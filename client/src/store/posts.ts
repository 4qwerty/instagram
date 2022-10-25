import { makeAutoObservable } from 'mobx'

export interface CurrencyModel {
    _id: string,
    createdAt: string,
    message: string,
    imageUrl: string,
    userId: string,
}

class Posts {
    posts: CurrencyModel[] = []

    constructor() {
        makeAutoObservable(this)
    }

    fetchPosts() {
        fetch('https://6aea-185-244-169-55.eu.ngrok.io/getAllPosts')
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
