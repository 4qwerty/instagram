import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Navbar from "../navbar/Navbar";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from "../../../App";

export type Props = NativeStackScreenProps<StackParamList, 'Homepage'>;

export default function Homepage(props: Props) {

    return (
        <View style={styles.body}>
            <View style={styles.wrapper}>
                <View style={styles.main}>
                    <Text>
                        Homepage
                    </Text>
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
    }
})