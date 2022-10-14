import mongoose from 'mongoose';

const User = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    fullName: {type: String},
    bio: {type: String},
    username: {
        type: String,
        default: "Vasia"
    },
    avatarUrl: {type: String},
    phone: {type: String},
    gender: {type: String},
    post: {type: String, ref: 'Post'},
 })

export default mongoose.model('User', User)