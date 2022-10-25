import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from "react-native";
import PostCard from "../postСard/PostСard";
import posts from "../../../store/posts"

export default function PostList() {
    const postsData = posts.posts

    // useEffect(() => {
    //     fetch('https://6aea-185-244-169-55.eu.ngrok.io/getAllPosts')
    //         .then(res => res.json())
    //         .then(data => {
    //             setDataPosts(data)
    //         })
    //         .catch(function(err) {
    //             console.info(err);
    //         });
    // }, [])

    useEffect(() => {
        posts.fetchPosts();
    }, [])

    if (postsData.length === 0) {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }

    return (
        <FlatList
            data={postsData}
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