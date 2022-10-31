import React from 'react';
import {StyleSheet, View} from "react-native";
import Navbar from "../navbar/Navbar";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from "../../../App";
import PostList from "../post/postList/PostList";

export type Props = NativeStackScreenProps<StackParamList, 'Homepage'>;

export default function Homepage(props: Props) {
    return (
        <View style={styles.conteiner}>
            <PostList/>

            <View style={styles.navbar}>
                <Navbar {...props}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        height: "100%",
        backgroundColor: "#fff"
    },
    buttonBox: {
        justifyContent: "space-around",
        flexDirection: "row",
    },
    navbar: {
        marginTop: 15,
        marginBottom: 20,
    }
})