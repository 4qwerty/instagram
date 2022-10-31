import mongoose, {Schema} from "mongoose";

const Post = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    message: {type: String},
    userId: {type: Schema.Types.ObjectId, ref: "User"},
    imageUrl: {type: String}
})

export default mongoose.model('Post', Post)