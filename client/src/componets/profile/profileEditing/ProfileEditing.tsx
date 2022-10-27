import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import { Formik } from 'formik';
import users from "../../../store/users";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {StackParamList} from "../../../../App";

export type Props = NativeStackScreenProps<StackParamList, 'ProfileEditing'>;

export default function ProfileEditing(props: Props) {
    const user = users.userData

    return (
        <Formik
            initialValues={{
                username: user?.username,
                fullName: user?.fullName,
                bio: user?.bio,
                email: user?.email,
            }}
            onSubmit={(values) => {
                users.putUsers(values)
                    .catch(console.error);
                props.navigation.navigate('ProfilePage')
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>

                    <View style={styles.inputBox}>
                        <Text style={styles.text}>Username:</Text>
                        <TextInput

                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            placeholder="Username"
                            value={values.username}
                        />
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.text}>Full name:</Text>
                        <TextInput
                            onChangeText={handleChange('fullName')}
                            onBlur={handleBlur('fullName')}
                            placeholder="Full name"
                            value={values.fullName}
                        />
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.text}>Bio:</Text>
                        <TextInput
                            onChangeText={handleChange('bio')}
                            onBlur={handleBlur('bio')}
                            placeholder="Bio"
                            value={values.bio}
                        />
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.text}>Email:</Text>
                        <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            placeholder="Email"
                            value={values.email}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    inputBox: {
        marginLeft: 10,
        flexDirection: "row",
        alignItems: "center",
    },

    text: {
        color: "#3f3f3f",
        fontSize: 15
    },

    submitButton: {
        margin: 10,
    },

    submitButtonText: {
        color: "#3f3f3f",
        fontSize: 15,
        fontWeight: "bold"
    }
})