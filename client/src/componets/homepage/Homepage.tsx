import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, StyleSheet, Text, View} from "react-native";
import Navbar from "../navbar/Navbar";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from "../../../App";
import PostList from "../post/postList/PostList";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    navbar: {
        marginTop: 15,
        marginBottom: 20,
    }
})