import React, {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Navbar from "../../navbar/Navbar";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {StackParamList} from "../../../../App";
import users from "../../../store/users";
import {observer} from "mobx-react-lite";
import {Post} from "../../../models/Post";

export type Props = NativeStackScreenProps<StackParamList, 'ProfilePage'>;

const ProfilePage: React.FC<Props> = observer((props: Props) => {
    const user = users.userData

    useEffect(() => {
        users.getUser()
            .catch(console.error);
    }, [])

    return (
        <View style={styles.body}>
            <View style={styles.wrapper}>

                <View style={styles.userInfo}>
                    <View style={{alignItems: "center"}}>
                        <Text style={styles.username}>
                            {user?.username}
                        </Text>
                    </View>

                    <Image
                        style={styles.profileImage}
                        source={{
                            uri: user?.avatarUrl,
                        }}
                    />

                    <Text style={{fontSize: 16, color: "#000000"}}>
                        {user?.fullName}
                    </Text>

                    <Text style={{fontSize: 15, color: "#7c7c7c"}}>
                        {user?.bio}
                    </Text>
                </View>

                <View style={styles.main}>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate('ProfileEditing');
                            }}
                            style={styles.buttonEditProfileContainer}
                        >
                            <Text style={styles.buttonEditProfileText}>Edit profile</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        <View style={styles.postList}>
                            {user?.posts.map((post: Post) => (
                                <Image
                                    key={post._id}
                                    style={{width: 120, height: 120, margin: 5}}
                                    source={{
                                        uri: post.imageUrl,
                                    }}
                                />
                            ))}
                        </View>
                    </ScrollView>

                </View>

                <View style={styles.navbar}>
                    <Navbar {...props}/>
                </View>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    postList: {
        justifyContent: "center",
        flexDirection: "row",
    },
    userInfo: {
        marginTop: 20,
        marginLeft: 20
    },
    username: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#a1a1a1",
        marginBottom: 15
    },
    buttonBox: {
        justifyContent: "space-around",
        flexDirection: "row",
    },
    body: {
        height: "100%",
    },
    wrapper: {
        minHeight: "100%",

    },
    main: {
        flexGrow: 1,
    },
    navbar: {
        marginBottom: 30,
    },
    buttonEditProfileContainer: {
        margin: 20,
        elevation: 8,
        backgroundColor: "#ffffff",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    buttonEditProfileText: {
        justifyContent: "center",
        fontSize: 15,
        color: "#000",
        fontWeight: "bold",
        alignSelf: "center",
    }
})

export default ProfilePage