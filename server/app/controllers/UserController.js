import UserService from "../service/UserService.js";

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await UserService.getAll();
            return res.json(users);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const posts = await UserService.update(req);

            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }

}


export default new UserController();