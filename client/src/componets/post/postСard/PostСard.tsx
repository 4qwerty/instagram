import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {Post} from "../../../models/Post";

export default function PostCard(props: { data: Post; }) {

    const dataPosts: Post = props.data

    return (
        <View>
            <View style={styles.headPost}>
                <Image
                    source={{uri: dataPosts.userId?.avatarUrl}}
                        style={{
                            backgroundColor: '#b7b7b7',
                            borderRadius: 20,
                            height: 25,
                            width: 25
                        }}
                />
                <Text style={{marginLeft: 6, fontWeight: "bold", color: "#000"}}>
                    {dataPosts.userId?.username}
                </Text>
            </View>
            <View>
                <Image
                    source={{
                        uri: dataPosts.imageUrl,
                    }}
                    style={{
                        width: 420,
                        height: 400
                    }}
                />
            </View>

            <View style={styles.postText}>
                <Text>
                    {dataPosts.message}
                </Text>
            </View>

            <View style={styles.buttonBox}>
                <Image
                    source={require('../../../assets/icons/like.png')}
                    style={styles.indentationButtons}
                />
                <Image
                    source={require('../../../assets/icons/comment.png')}
                    style={styles.indentationButtons}
                />
                <Image
                    source={require('../../../assets/icons/repost.png')}
                    style={styles.indentationButtons}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headPost: {
        flexDirection: "row",
        alignItems: "center",
        margin: 5
    },
    buttonBox: {
        flex: 1,
        marginTop: 12,
        marginBottom: 25,
        flexDirection: "row",
    },
    indentationButtons: {
        marginLeft: 16
    },
    postText: {
        color: "#000",
        marginLeft:12,
        marginTop: 6
    }
})