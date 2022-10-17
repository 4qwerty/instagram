import PostService from "../service/PostService.js";
import User from "../models/User.js";

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create({...req.body, userId: req.params.id})

            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAllPosts(req, res) {
        try {
            let foundUser = await User.find({id: req.params.id}).populate("posts")
            return res.json(foundUser);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}




export default new PostController();