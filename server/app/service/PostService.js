import Post from "../models/Post.js";

class PostService {
    async getAll() {
        const posts = await Post.find();
        return posts;
    }

}


export default new PostService();