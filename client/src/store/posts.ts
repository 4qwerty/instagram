import { makeAutoObservable } from 'mobx'
import {API_URL} from "../consts";
import users from "./users";
import {Post} from "../models/Post";
import {User} from "../models/User";

export interface PostModel {
    _id: string,
    createdAt: string,
    message: string,
    imageUrl: string,
    userId: User,
}

class Posts {
    constructor() {
        makeAutoObservable(this)
    }

    posts: PostModel[] = []

     async fetchPostsList() {
        await fetch(`${API_URL}/getAllPosts`)
            .then(res => res.json())
            .then(data => {
                this.posts = data
            })
            .catch(function(err) {
                console.info(err);
            });
    }

    async createPosts(data: Post, url: string | void) {
        await fetch(`${API_URL}/posts/${users.userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...data, imageUrl: url}),
        })
            .then((response) => response.json())
            .then((data) => {
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default new Posts()
