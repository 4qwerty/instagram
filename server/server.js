import express from 'express'
import mongoose from 'mongoose'
import authRouter from "./app/routes/authRouter.js";
import userRouter from "./app/routes/userRouter.js";
import postRouter from "./app/routes/postRouter.js";

const port = 8000;
const db = "mongodb+srv://admin:admin@cluster.mjsuoul.mongodb.net/?retryWrites=true&w=majority"
const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use('/user', userRouter)
app.use('/auth', authRouter)
app.use(postRouter)

async function startApp() {
    try {
        await mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(port, () => console.log('SERVER STARTED ON PORT ' + port))
    } catch (e) {
        console.log(e)
    }
}

startApp()