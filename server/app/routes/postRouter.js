import Router from 'express'
import PostController from "../controllers/PostController.js";

const postRouter = new Router()

postRouter.post('/posts/:id', PostController.create)
postRouter.get('/get', PostController.getAll)
postRouter.get('/getAllPosts', PostController.getAllPosts)
postRouter.get('/getAllUserPosts/:id', PostController.getAllUserPosts)

export default postRouter;