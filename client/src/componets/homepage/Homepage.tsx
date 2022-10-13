import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import Navbar from "../navbar/Navbar";

export default function Homepage() {

    return (
        <View style={styles.body}>
            <View style={styles.wrapper}>
                <View style={styles.main}>
                    <Text>
                        Homepage
                    </Text>
                </View>

                <View style={styles.navbar}>
                    <Navbar/>
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
    }
})