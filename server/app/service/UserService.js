import User from "../models/User.js";

class UserService {
    async create(user) {
        const createdUser = await User.create({...user});
        return createdUser;
    }

    async getAll() {
        const users = await User.find();
        return users;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('ID not specified')
        }
        const user = await User.findById(id);
        return user;
    }

    async update(post) {
        if (!post._id) {
            throw new Error('ID not specified')
        }
        const updatedUser = await User.findByIdAndUpdate(post._id, post, {new: true})
        return updatedUser;
    }

    async updateFields(post) {
        if (!post._id) {
            throw new Error('ID not specified')
        }
        const updatedUser = await User.findByIdAndUpdate(post._id, post, {new: true})
        return updatedUser;
    }

    async delete(id) {
        if (!id) {
            throw new Error('ID not specified')
        }
        const user = await User.findByIdAndDelete(id);
        return user;
    }
}


export default new UserService();