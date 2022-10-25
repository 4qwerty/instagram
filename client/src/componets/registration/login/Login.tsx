import React from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackParamList} from "../../../../App";
import {Formik} from "formik";

export type Props = NativeStackScreenProps<StackParamList, 'Login'>;

interface Login {
    username: string,
    password: string
}

export default function Login(props: Props) {
    const storeData = async (value: string) => {
        try {
            await AsyncStorage.setItem('@storage_Key', value)
            await getData()
        } catch (e) {
            showAlert()
            console.log(e)
        }
    }

    const showAlert = () => {
        Alert.alert(
            "Account not found",
            "Incorrectly entered username or password, try again",
        );
    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_Key')

            if(value !== null) {
                props.navigation.navigate('Homepage');
            }
        } catch(e) {
            console.log(e)
        }
    }

    const fetchLogin = async (values: Login) => {
        await fetch('https://6aea-185-244-169-55.eu.ngrok.io/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((response) => response.json())
            .then((data) => {
                storeData(data.token)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <View style={styles.conteiner}>
            <View style={styles.wrapper}>
                <View style={styles.main}>
                    <View style={{alignItems: "center"}}>
                        <Image
                            source={require('../../../assets/img/Instagram_logo.png')}
                            style={{
                                width: 200,
                                height: 70,
                                marginBottom: 20
                            }}
                        />
                    </View>

                    <Formik
                        initialValues={{ username: '', password: ''}}
                        onSubmit={values => fetchLogin(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View>
                                <TextInput
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    placeholder="Username"
                                    value={values.username}
                                    style={styles.input}
                                />
                                <TextInput
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    placeholder="Password"
                                    value={values.password}
                                    style={styles.input}
                                    secureTextEntry={true}/>
                                <TouchableOpacity
                                    onPress={handleSubmit}
                                    style={styles.buttonEditProfileContainer}
                                >
                                    <Text style={styles.buttonEditProfileText}>Log in</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </View>


                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('SingUp');
                        }}
                    >
                        <View style={styles.singUp}>
                            <Text>
                                Don't have an account?
                            </Text>
                            <Text style={{
                                color: "#6890e7",
                                fontWeight: "bold"
                            }}>
                                Sing Up
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        height: "100%",
    },
    wrapper: {
        minHeight: "100%",
        flexDirection: "column",
    },
    main: {
        flexDirection: 'column',
        marginTop: 120,
        flexGrow: 1,
    },
    input: {
        height: 45,
        borderColor: "#b7b7b7",
        backgroundColor: "#ececec",
        borderWidth: 1,
        borderRadius: 7,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15
    },
    buttonEditProfileContainer: {
        margin: 20,
        elevation: 8,
        backgroundColor: "#75a5f3",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    buttonEditProfileText: {
        justifyContent: "center",
        fontSize: 15,
        color: "#ffffff",
        fontWeight: "bold",
        alignSelf: "center",
    },
    singUp: {
        flexDirection: "row",
    },
    footer: {
        alignItems: "center",
        marginBottom: 30,
    }
})