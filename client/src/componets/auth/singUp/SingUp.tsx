import React from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from "../../../../App";
import {Formik} from "formik";

interface User {
    email: string,
    username: string,
    fullName: string,
    password: string
}

export type Props = NativeStackScreenProps<StackParamList, 'SingUp'>;

export default function SingUp(props: Props) {

    const showAlert = (message: string) => {
        Alert.alert(
            "",
            `${message}`,
        );
    }

    const fetchSinUp = (values: User) => {
        fetch('https://d11b-185-244-169-80.eu.ngrok.io/auth/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((response) => response.json())
            .then((data) => {
                showAlert(data.message)
                props.navigation.navigate('Login')
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
                        initialValues={{ email: '', username: '', fullName: '', password: ''}}
                        onSubmit={values => fetchSinUp(values)}
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
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    placeholder="Email"
                                    value={values.email}
                                    style={styles.input}
                                />
                                <TextInput
                                    onChangeText={handleChange('fullName')}
                                    onBlur={handleBlur('fullName')}
                                    placeholder="Full name"
                                    value={values.fullName}
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
                                    <Text style={styles.buttonEditProfileText}>Sing up</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </View>


                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('Login');
                        }}
                    >
                        <View style={styles.singUp}>
                            <Text>
                                You have an account?
                            </Text>
                            <Text style={{
                                color: "#6890e7",
                                fontWeight: "bold"
                            }}>
                                Log in
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
        marginTop: 60,
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