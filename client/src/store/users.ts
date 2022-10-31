import { makeAutoObservable } from 'mobx'
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import {Post} from "../models/Post";
import {API_URL, TOKEN_KEY} from "../consts";
import Login from "../componets/auth/login/Login";

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

interface Login {
    username: string,
    password: string
}

interface SingUp {
    email: string,
    username: string,
    fullName: string,
    password: string
}


class User {
    token = ''
    userId = ''
    userData: UserModel | null = null

    constructor() {
        makeAutoObservable(this)
    }

    async getUserId() {
        try {
            const token = await AsyncStorage.getItem(TOKEN_KEY)
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
            fetch(`${API_URL}/getUserPosts/${this.userId}`)
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
        await fetch(`${API_URL}/user/put/${this.userId}`, {
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

    async login(values: Login) {
        await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((response) => response.json())
            .then((data) => {
                this.token = data.token
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    async sinUp(values: SingUp) {
       await fetch(`${API_URL}/auth/registration`, {
            method: 'POST',
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
