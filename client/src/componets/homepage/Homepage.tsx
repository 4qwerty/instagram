import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import Navbar from "../navbar/Navbar";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from "../../../App";
import PostList from "../post/postList/PostList";

export type Props = NativeStackScreenProps<StackParamList, 'Homepage'>;

export default function Homepage(props: Props) {

    return (
        <View style={{flex: 1}}>
            <PostList/>

            <View style={styles.navbar}>
                <Navbar {...props}/>
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
        flex: 1,
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
        marginTop: 15,
        marginBottom: 20,
    }
})