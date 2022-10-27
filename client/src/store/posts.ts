import { makeAutoObservable } from 'mobx'

export interface PostModel {
    _id: string,
    createdAt: string,
    message: string,
    imageUrl: string,
    userId: string,
}

class Posts {
    posts: PostModel[] = []

    constructor() {
        makeAutoObservable(this)
    }

     async fetchPostsList() {
        await fetch('https://d11b-185-244-169-80.eu.ngrok.io/getAllPosts')
            .then(res => res.json())
            .then(data => {
                this.posts = (data)
            })
            .catch(function(err) {
                console.info(err);
            });
    }
}

export default new Posts()
