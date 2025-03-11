import {Message} from '../models/messagesModel.js'
import {catchAsyncError} from '../middleware/catchAsyncError.js'

// Send Message Route
export const sendMessage = catchAsyncError(async (req,res) => {
    const {firstName,lastName,email,phone,message} = req.body
    if(!firstName || !lastName || !email || !phone || !message){
        return res.status(500).json({message:"Please Provide All the Information !"})
    }
    await Message.create({ firstName,lastName,email,phone,message })
    res.status(200).json({success:true,message:"Message Sent Successfully !"})
})

//Get All Messages
export const getAllMessages = catchAsyncError(async (req,res) => {
    const messages = await Message.find()
    res.status(200).json({success:true, messages})
})