import mongoose from "mongoose";

const Post = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    message: {type: String},
    userId: {type: String},
    imageUrl: {type: String}
})

export default mongoose.model('Post', Post)