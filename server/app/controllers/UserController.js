import UserService from "../service/UserService.js";

class UserController {
    async getAllUsers(req, res) {
        try {
            const posts = await UserService.getAll();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new UserController();