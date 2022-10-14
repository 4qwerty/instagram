import Post from "../models/Post.js";

class PostService {
    async create(user) {
        const createdUser = await Post.create({...user});
        return createdUser;
    }

    async getAll() {
        const users = await Post.find();
        return users;
    }
}


export default new PostService();