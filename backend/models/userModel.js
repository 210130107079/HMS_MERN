import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minlength: [3, "First Name must contain at least 3 characters"]
    },
    lastName:{
        type: String,
        required: true,
        minlength: [3, "Last Name must contain at least 3 characters"]
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password:{
        type: String,
        required: true,
        minlength: [10, "Password must contain at least 10 characters"],
        maxLength: [10, "Password must contain at least 10 characters"]
    },
    nic:{
        type: String,
        required: true,
        minlength: [13, "NIC must contain at least 10 characters"],
        maxLength: [13, "NIC must contain at least 10 characters"]
    },
    dob:{
        type: Date,
        required: [true,"Date of Birth is Required"]
    },
    gender:{
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    password:{
        type: String,
        required: true,
        minlength: [8, "Password must contain at least 8 characters"],
        select:false,
    },
    role:{
        type: String,
        required: true,
        enum: ["Admin", "Patient","Doctor"]
    },
    doctorDepartment:{
        type: String,
    },
    docAvatar:{
        public_id:String,
        url:String
    }
})


//Hashing Password
userSchema.pre('save', async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
})


// Comparing Password os Users
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword , this.password)
}

userSchema.methods.generateJsonWebToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });
};

export const User = mongoose.model('User',userSchema)