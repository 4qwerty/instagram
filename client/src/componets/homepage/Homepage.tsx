import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from "react-native";
import Navbar from "../navbar/Navbar";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from "../../../App";
import axios from "axios";

export type Props = NativeStackScreenProps<StackParamList, 'Homepage'>;

export default function Homepage(props: Props) {

    // axios.get('localhost:8000/get')
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    useEffect(() => {
        fetch("http://localhost:8000/get")
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        // axios({
        //     method: 'get',
        //     url: `localhost:8000/get`,
        // }).then((response) => {
        //     console.log(response.data);
        // });
    }, [])

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