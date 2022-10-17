import Router from 'express'
import PostController from "../controllers/PostController.js";

const postRouter = new Router()

postRouter.get('/get', PostController.getAll)
postRouter.post('/posts/:id', PostController.create)
postRouter.get('/getAllPosts/:id', PostController.getAllPosts)

export default postRouter;