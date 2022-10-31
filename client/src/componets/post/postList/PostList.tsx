import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from "react-native";
import PostCard from "../postСard/PostСard";
import posts from "../../../store/posts"
import {observer} from "mobx-react-lite";
import {Post} from "../../../models/Post";

const PostList: React.FC = observer(() => {
    const postsData: Post[] = posts.posts

    useEffect(() => {
        posts.fetchPostsList()
            .catch(console.error);
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
});

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

export default PostList
