import PostService from "../service/PostService.js";
import User from "../models/User.js";
import Post from "../models/Post.js";

class PostController {
    async create(req, res) {
        const post = new Post();
        post.message = req.body.message;
        post.imageUrl = req.body.imageUrl;
        post.userId = req.params.id;
        post.save()
            .then(() => {
                User.findOne({ _id: post.userId }, (err, user) => {
                    if (user) {
                        user.posts.push(post);
                        user.save();
                        res.json(post);
                    }
                });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    }

    async getAll(req, res) {
        try {
            let foundUser = await User.find().populate("posts")
            return res.json(foundUser);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAllPosts(req, res) {
        try {
            let foundUser = await User.find({_id: req.params.id}).populate("posts")
            return res.json(foundUser);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}




export default new PostController();