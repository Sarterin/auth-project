import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import router from './router/index.js'
import errorMiddleware from './middlewares/error-middleware.js'

const PORT = process.env.PORT || 5000
const app = express()

dotenv.config()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()