import React from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackParamList} from "../../../../App";
import {Formik} from "formik";
import {observer} from "mobx-react-lite";
import users from "../../../store/users";
import {TOKEN_KEY} from "../../../consts";

export type Props = NativeStackScreenProps<StackParamList, 'Login'>;
const Login: React.FC<Props> = observer((props: Props) => {

    const loginAccount = async (values: any) => {
        await users.login(values)
        try {
            const token = await AsyncStorage.setItem(TOKEN_KEY, users.token)
            if(token !== null) {
                props.navigation.navigate('Homepage');
            }
            await users.getUserId()
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

    return (
        <View style={stylesAuth.conteiner}>
            <View style={stylesAuth.wrapper}>
                <View style={stylesAuth.main}>
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
                        onSubmit={values => loginAccount(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View>
                                <TextInput
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    placeholder="Username"
                                    value={values.username}
                                    style={stylesAuth.input}
                                />
                                <TextInput
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    placeholder="Password"
                                    value={values.password}
                                    style={stylesAuth.input}
                                    secureTextEntry={true}/>
                                <TouchableOpacity
                                    onPress={handleSubmit}
                                    style={stylesAuth.buttonEditProfileContainer}
                                >
                                    <Text style={stylesAuth.buttonEditProfileText}>Log in</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </View>


                <View style={stylesAuth.footer}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('SingUp');
                        }}
                    >
                        <View style={stylesAuth.singUp}>
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
})

export const stylesAuth = StyleSheet.create({
    conteiner: {
        flex: 1,
        height: "100%",
        backgroundColor: "#fff"
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

export default Login