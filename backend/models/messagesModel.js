import mongoose from "mongoose";
import validator from 'validator'

const messageSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minlength: [3,"First Name must contain At-least 3 Characters"]
    },
    lastName:{
        type: String,
        required: true,
        minlength: [3,"Last Name must contain At-least 3 Characters"]
    },
    email:{
        type: String,
        required: true,
        validate:[validator.isEmail,"Please Provide a Valid Email"]
    },
    phone:{
        type: String,
        required: true,
        minlength:[10,"Phone Number must Contain 10 Digits"],
        maxLength:[10,"Phone Number must Contain 10 Digits"]
    },
    message:{
        type: String,
        required: true,
        minlength:[10,"Message must contain At-least 10 Characters"]
    }
})

export const Message = mongoose.model("Message",messageSchema)