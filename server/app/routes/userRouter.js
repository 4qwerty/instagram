import Router from 'express'
import UserController from "../controllers/UserController.js";

const userRouter = new Router()

userRouter.post('/create', UserController.create)
userRouter.get('/getAll', UserController.getAll)
userRouter.get('/getOne/:id', UserController.getOne)
userRouter.put('/update', UserController.update)
userRouter.patch ('/updateFields', UserController.updateFields)
userRouter.delete('/delete/:id', UserController.delete)

export default userRouter;