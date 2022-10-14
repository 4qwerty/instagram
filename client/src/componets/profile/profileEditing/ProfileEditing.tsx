import React from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import { Formik } from 'formik';

export default function ProfileEditing() {
    return (
        <Formik

            initialValues={{
                name: 'Name',
                bio: 'Bio',
                email: 'Email',
                gender: 'Gender'

            }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    {/*<View style={styles.buttonEditProfileContainer}>*/}
                    {/*    <TouchableOpacity*/}
                    {/*        onPress={handleSubmit}*/}
                    {/*        style={styles.buttonEditProfileContainer}*/}
                    {/*    >*/}
                    {/*        <Text style={styles.buttonEditProfileText}>Cancel</Text>*/}
                    {/*    </TouchableOpacity>*/}

                    {/*    <TouchableOpacity*/}
                    {/*        onPress={handleSubmit}*/}
                    {/*        style={styles.buttonEditProfileContainer}*/}
                    {/*    >*/}
                    {/*        <Text style={styles.buttonEditProfileText}>Done</Text>*/}
                    {/*    </TouchableOpacity>*/}
                    {/*</View>*/}

                    <TextInput
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                    />
                    <TextInput
                        onChangeText={handleChange('bio')}
                        onBlur={handleBlur('bio')}
                        value={values.bio}
                    />

                    <Text style={styles.textPrivateInformation}>
                        Private information
                    </Text>

                    <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    <TextInput
                        onChangeText={handleChange('gender')}
                        onBlur={handleBlur('gender')}
                        value={values.gender}
                    />
                </View>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    buttonEditProfileContainer: {
        justifyContent: "space-around",
        flexDirection: "row",
        margin: 20,
        borderRadius: 5,
    },
    buttonEditProfileText: {
        fontSize: 15,
        color: "#000",
        fontWeight: "bold",
        alignSelf: "center",
    },
    textPrivateInformation: {
        margin: 12,
        fontSize: 18,
        color: "#000",
    }
})