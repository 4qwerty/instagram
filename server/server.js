import express from 'express'
import mongoose from 'mongoose'
const port = 8000;
const db = "mongodb+srv://admin:admin@cluster.mjsuoul.mongodb.net/?retryWrites=true&w=majority"
const app = express()

async function startApp() {
    try {
        await mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(port, () => console.log('SERVER STARTED ON PORT ' + port))
    } catch (e) {
        console.log(e)
    }
}

startApp()