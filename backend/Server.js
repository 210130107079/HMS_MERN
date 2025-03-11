import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import {connectDB} from './db/connectDB.js'
import messageRouter from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'
import appointmentRoutes from './routes/appointmentRoutes.js'
import connectCloudinary from './config/Cloudinary.js'

const app = express();
dotenv.config({path:"./config/.env"})
const PORT = process.env.PORT

connectDB()
connectCloudinary()

// Middlewares
app.use(cors({
    origin: [process.env.FRONTEND_URL,process.env.ADMIN_URL],
    credentials: true,
    methods: ['GET, POST, PUT, DELETE']
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(fileUpload({ 
    useTempFiles: true,
    tempFileDir:"/tmp/"
}))

app.use('/api/message',messageRouter)
app.use('/api/user',userRoutes)
app.use('/api/appointment',appointmentRoutes)

app.listen(PORT,()=>{   
    console.log(`Server running on port ${PORT}`)
})