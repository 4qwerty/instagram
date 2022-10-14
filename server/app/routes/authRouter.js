import Router from "express";
import AuthController from "../controllers/AuthController.js";
import {check} from "express-validator";
const authRouter = new Router()

authRouter.post('/registration', [
    check('username', "Username cannot be empty").notEmpty(),
    check('password', "Password must be more than 4 and less than 10 characters")
        .isLength({min:4, max:10})
], AuthController.registration)
authRouter.post('/login', AuthController.login)

export default authRouter;