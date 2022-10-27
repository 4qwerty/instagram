import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function Navbar(props: any) {
    return (
        <View style={styles.buttonBox}>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('Homepage');
                }}
            >
                <Image source={require('../../assets/icons/home.png')}/>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>{console.log("you clicked search")}}
            >
                <Image source={require('../../assets/icons/search.png')}/>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('CreatePost');
                }}
            >
                <Image source={require('../../assets/icons/add.png')}/>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>{console.log("you clicked like")}}
            >
                <Image source={require('../../assets/icons/like.png')}/>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('ProfilePage');
                }}
            >
                <Image
                    source={require('../../assets/icons/user.png')}
                    style={{width: 28, height: 28}}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonBox: {
        justifyContent: "space-around",
        flexDirection: "row",
    }
})
