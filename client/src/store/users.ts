import { makeAutoObservable } from 'mobx'
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import {Post} from "../models/Post";

interface DecodedToken {
    "exp": number,
    "iat": number,
    "id": string
}

interface UserModel {
    email?: string,
    password: string,
    fullName?: string,
    bio?: string,
    username: string,
    avatarUrl?: string,
    phone?: string,
    gender?: string,
    posts: Post[],
}

class User {
    userId = ''
    userData: UserModel | null = null

    constructor() {
        makeAutoObservable(this)
    }

    async getUserId() {
        try {
            const token = await AsyncStorage.getItem('@storage_Key')
            if (token != null) {
                const decoded: DecodedToken = jwt_decode(token);
                this.userId = decoded.id;
            }

        } catch(e) {
            console.log(e)
        }
    }

    async getUser() {
        try {
            fetch(`https://d11b-185-244-169-80.eu.ngrok.io/getUserPosts/${this.userId}`)
                .then(res => res.json())
                .then(data => {
                    this.userData = data[0]
                })
                .catch(function(err) {
                    console.log(err);
                });
        } catch (e) {
            console.log(e)
        }
    }

    async putUsers(values: any) {
        await fetch(`https://d11b-185-244-169-80.eu.ngrok.io/user/put/${this.userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default new User()
