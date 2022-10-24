import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
import {User} from "../../../models/User";
import PostCard from "../postСard/PostСard";
import {Post} from "../../../models/Post";

export default function PostList() {

    const [dataPosts, setDataPosts] = useState<Post[]>([])

    useEffect(() => {
        fetch('https://d604-185-244-169-55.eu.ngrok.io/getAllPosts')
            .then(res => res.json())
            .then(data => {
                setDataPosts(data)
            })
            .catch(function(err) {
                console.info(err);
            });
    }, [])

    if (dataPosts.length === 0) {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }

    return (
    <FlatList
        data={dataPosts}
        renderItem={({item}) =>
            <PostCard data={item}/>
        }
        keyExtractor={item => item?._id}
    />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    buttonBox: {
        justifyContent: "space-around",
        flexDirection: "row",
    },
})