import mongoose from "mongoose";
import { Mongoose } from "mongoose";
import validator from 'validator'

const appointmentSchema = new mongoose.Schema({
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
    nic:{
        type: String,
        required: true,
        minLength: [13, "NIC Must Contain Only 13 Digits!"],
        maxLength: [13, "NIC Must Contain Only 13 Digits!"],
    },
    dob:{
        type: Date,
        required: [true,"Date of Birth is Required"]
    },
    gender:{
        type: String,
        required: true,
        enum:["Male","Female"]  
    },
    appointment_date:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    doctor:{
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        }
    },hasVisited: {
        type: Boolean,
        default: false,
      },
      address: {
        type: String,
        required: [true, "Address Is Required!"],
      },
      doctorId: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Doctor Id Is Invalid!"],
      },
      patientId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Patient Id Is Required!"],
      },
      status: {
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending",
      }
})

export const Appointment = mongoose.model("Appointment", appointmentSchema)