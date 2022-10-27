import User from "../models/User.js";

class UserService {
    async getAll() {
        const users = await User.find();
        return users;
    }

    async update(user) {
        const userBody = user.body
        const userId = user.params.id

        if (!userId) {
            throw new Error('ID not specified')
        }
        const updatedUser = await User.findByIdAndUpdate(userId, userBody, {new: true})

        return updatedUser;
    }

}


export default new UserService();