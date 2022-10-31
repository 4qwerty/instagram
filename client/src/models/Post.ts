import {User} from "./User";

export interface Post {
    "_id": string,
    createdAt?: string,
    message: string,
    userId?: User,
    imageUrl?: string
}