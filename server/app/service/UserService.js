import User from "../models/User.js";

class UserService {
    async getAll() {
        const users = await User.find();
        return users;
    }
}


export default new UserService();