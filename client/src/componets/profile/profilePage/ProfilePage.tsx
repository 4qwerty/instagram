import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Navbar from "../../navbar/Navbar";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {StackParamList} from "../../../../App";

export type Props = NativeStackScreenProps<StackParamList, 'ProfilePage'>;


export default function ProfilePage(props: Props) {

    return (
        <View style={styles.body}>
            <View style={styles.wrapper}>
                <View style={styles.main}>
                   <View>
                       <TouchableOpacity
                           onPress={() => {
                               props.navigation.navigate('ProfileEditing');
                           }}
                           style={styles.buttonEditProfileContainer}
                       >
                           <Text style={styles.buttonEditProfileText}>Edit profile</Text>
                       </TouchableOpacity>
                   </View>
                </View>

                <View style={styles.navbar}>
                    <Navbar {...props}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonBox: {
        justifyContent: "space-around",
        flexDirection: "row",
    },
    body: {
        height: "100%",
    },
    wrapper: {
        minHeight: "100%",
        flexDirection: "column",
    },
    main: {
        flexGrow: 1,
    },
    navbar: {
        marginBottom: 30,
    },
    buttonEditProfileContainer: {
        margin: 20,
        elevation: 8,
        backgroundColor: "#ffffff",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    buttonEditProfileText: {
        justifyContent: "center",
        fontSize: 15,
        color: "#000",
        fontWeight: "bold",
        alignSelf: "center",
    }
})