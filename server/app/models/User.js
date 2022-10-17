import mongoose from 'mongoose';

const User = new mongoose.Schema({
    email: {type: String},
    password: {type: String, required: true},
    fullName: {type: String},
    bio: {type: String},
    username: {type: String},
    avatarUrl: {type: String},
    phone: {type: String},
    gender: {type: String},
    post: {type: String, ref: 'Post'},
 })

export default mongoose.model('User', User)