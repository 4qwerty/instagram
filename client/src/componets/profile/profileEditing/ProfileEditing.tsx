import React, {useCallback, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import { Formik } from 'formik';
import users from "../../../store/users";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {StackParamList} from "../../../../App";
import * as ImagePicker from "react-native-image-picker";
import storage from "@react-native-firebase/storage";

export type Props = NativeStackScreenProps<StackParamList, 'ProfileEditing'>;

export default function ProfileEditing(props: Props) {
    const user = users.userData
    const [response, setResponse] = useState<any>(null);
    const includeExtra = true;

    const downloadPhoto = useCallback(
        (
            type: string,
            options: ImagePicker.ImageLibraryOptions,
        ) => {
            ImagePicker.launchImageLibrary(options, setResponse);
        },
        [],
    );

    const submitPhoto = async () => {
        await downloadPhoto('library', {
            selectionLimit: 0,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra,
        })

        const uploadUir = response.assets[0].uri;
        const fileName = uploadUir.substring(uploadUir.lastIndexOf('/') + 1);
        const storageRef = storage().ref(`avatar/${fileName}`);
        await storageRef.putFile(uploadUir);

        const url = await storageRef.getDownloadURL()
            .catch((error: any) => {
                console.log(error)
            });

        await users.putUsers({avatarUrl: url})
        await users.getUser()
    }

    return (
        <Formik
            initialValues={{
                username: user?.username,
                avatarUrl: user?.avatarUrl,
                fullName: user?.fullName,
                bio: user?.bio,
                email: user?.email,
            }}
            onSubmit={async (values) => {
                await users.putUsers(values)
                await users.getUser()
                props.navigation.navigate('ProfilePage')

            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={{backgroundColor: "#fff", height: "100%"}}>
                    <View style={styles.profileImageBox}>
                        <View style={styles.profileImage}>
                            {response?.assets &&
                                response?.assets.map(({uri}: {uri: string}) => (
                                    <View key={uri} >
                                        <Image
                                            resizeMode="cover"
                                            resizeMethod="scale"
                                            style={styles.profileImage}
                                            source={{uri: uri}}
                                        />
                                    </View>
                                ))
                            }
                        </View>

                        <TouchableOpacity
                            onPress={async () => {
                                await submitPhoto()
                            }}
                        >
                            <Text style={styles.changeProfilePhoto}>
                                Change profile photo
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            borderBottomColor: '#3b3b3b',
                            borderBottomWidth: 0.5,
                        }}
                    />

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

    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: "#e5e5e5",
    },
    profileImageBox: {
        marginTop: 10,
        alignItems: "center",
    },
    inputBox: {
        marginLeft: 20,
        flexDirection: "row",
        alignItems: "center",
    },

    text: {
        color: "#3f3f3f",
        fontSize: 15,
    },
    submitButton: {
        alignItems: "center",
        margin: 10,
    },
    submitButtonText: {
        color: "#3f3f3f",
        fontSize: 16,
        fontWeight: "bold"
    },
    changeProfilePhoto: {
        margin: 10,
        color: "#4082ee",
        fontSize: 15,
    }
})