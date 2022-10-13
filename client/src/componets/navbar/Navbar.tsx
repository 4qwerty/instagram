import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function Navbar() {

    return (
        <View style={styles.buttonBox}>
            <TouchableOpacity onPress={()=>{console.log("you clicked home")}}>
                <Image source={require('../../assets/icons/home.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{console.log("you clicked search")}}>
                <Image source={require('../../assets/icons/search.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{console.log("you clicked add")}}>
                <Image source={require('../../assets/icons/add.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{console.log("you clicked like")}}>
                <Image source={require('../../assets/icons/like.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{console.log("you clicked icon")}}>
                <Image source={require('../../assets/icons/Ellipse.png')}/>
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
