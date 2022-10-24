import express from 'express'
import mongoose from 'mongoose'
import authRouter from "./app/routes/authRouter.js";
import userRouter from "./app/routes/userRouter.js";
import postRouter from "./app/routes/postRouter.js";
import cookieParser from 'cookie-parser';
import cors from "cors"

import * as http from "http";
const hostname = '127.0.0.1';
const port = 8000;

const db = "mongodb+srv://admin:admin@cluster.mjsuoul.mongodb.net/?retryWrites=true&w=majority"
const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:8081"
}));
app.use('/user', userRouter)
app.use('/auth', authRouter)
app.use(postRouter);

async function startApp() {
    try {
        await mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });
    } catch (e) {
        console.log(e)
    }
}

startApp()