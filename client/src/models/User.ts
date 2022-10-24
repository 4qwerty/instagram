import {Post} from '../models/Post'

export interface User {
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