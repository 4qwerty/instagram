import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from "../../../../App";
import {Formik} from "formik";
import users from "../../../store/users";
import {stylesAuth} from "../login/Login";

interface User {
    email: string,
    username: string,
    fullName: string,
    password: string
}

export type Props = NativeStackScreenProps<StackParamList, 'SingUp'>;

export default function SingUp(props: Props) {

    const singUpAccount = async (values: any) => {
        try {
            await users.sinUp(values)
            props.navigation.navigate('Login')
        } catch (e) {
            console.log(e)
        }
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
                        initialValues={{ email: '', username: '', fullName: '', password: ''}}
                        onSubmit={values => singUpAccount(values)}
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
                                    <Text style={stylesAuth.buttonEditProfileText}>Sing up</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </View>


                <View style={stylesAuth.footer}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('Login');
                        }}
                    >
                        <View style={stylesAuth.singUp}>
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