import Post from "../models/Post.js";

class PostService {
    async create(post) {
        const createdPost = await Post.create({...post});
        return createdPost;
    }

    async getAll() {
        const posts = await Post.find();
        return posts;
    }
}


export default new PostService();