import {User} from '../models/userModel.js'
import {catchAsyncError} from '../middleware/catchAsyncError.js'
import { generateToken } from '../utils/jwtToken.js'
import {sendMail} from '../utils/sendMail.js'
import cloudinary from 'cloudinary'


//Registering Patient
export const patientRegister = catchAsyncError(async (req,res) => {
    const {firstName,lastName,email,phone,password,confirmPassword,gender,dob,nic,role} = req.body
    if(!firstName || !lastName || !email || !phone || !password || !confirmPassword || !gender || !dob || !nic || !role){
        return res.status(400).json({success:false,message:"Please Provide all the Information !"})
    }
    if(password !== confirmPassword){
        return res.status(400).json({success:false,message:"Password does not match !"})
    }
    let user = await User.findOne({ email })
    if(user){
        return res.status(400).json({message:"User Already Exists !"})
    }
    user = await User.create({firstName,lastName,email,password,gender,dob,nic,role})
    generateToken(user,"User Registered Successfully !",200,res)
    if(user.role === 'Patient'){
        sendMail(email,firstName)
    }
})

//User Login
export const userLogin = catchAsyncError(async(req,res) => {
    const {email,password,role} = req.body 
    if(!email || !password || !role){
        return res.status(400).json({success:false,message:"Please Enter All the Required Fields !"})
    }
    const user = await User.findOne({email}).select("+password")
    if(!user){
        return res.status(400).json({message:"Invalid Credentials !"})
    }
    const isPasswordMatched = await user.comparePassword(password)
    if(!isPasswordMatched){
        return res.status(400).json({message:"Invalid Credentials !"})
    }
    if(role !== user.role){
        return res.status(400).json({message:"User not Found with this Role !"})
    }
    generateToken(user,"User Logged in Successfully !",200,res)
})

//Add new Admin
export const addNewAdmin = catchAsyncError(async(req,res) => {
    const {firstName,lastName,email,phone,password,confirmPassword,gender,dob,nic} = req.body
    if(!firstName || !lastName || !email || !phone || !password || !confirmPassword || !gender || !dob || !nic){
        return res.status(400).json({success:false,message:"Please Provide All the Information !"})
    }
    if(password !== confirmPassword){
        return res.status(400).json({success:false,message:"Password does not match !"})
    }
    const isRegistered = await User.findOne({ email })
    if(isRegistered){
        return res.status(400).json({message:"Admin Already Exists !"})
    }
    const admin = await User.create({firstName,lastName,email,phone,password,gender,dob,nic,role:'Admin'})
    res.status(200).json({ success:true,message:"Admin Registration Successfully !" })
})

//Add New Doctor
export const addNewDoctor = catchAsyncError(async (req, res, next) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ message: "Please Upload a Profile Picture!" })
        }
        const { docAvatar } = req.files
        const allowedFormats = ["image/png", "image/jpg", "image/jpeg", "image/webp"]
        if (!allowedFormats.includes(docAvatar.mimetype)) {
            return res.status(400).json({ message: "Invalid File Format! Please Upload a PNG, JPG, JPEG, or WebP File." });
        }
        let avatar_url
        try {
            avatar_url = await cloudinary.uploader.upload(docAvatar.tempFilePath, { resource_type: 'image' })
        } catch (error) {
            console.error("Cloudinary Upload Error:", error)
            return res.status(500).json({ message: "Error Uploading Image to Cloudinary!" })
        }
        if (!avatar_url) {
            return res.status(500).json({ message: "Error Uploading Image to Cloudinary!" })
        }
        const { firstName, lastName, email, phone, password, confirmPassword, gender, dob, nic, doctorDepartment } = req.body;
        if (!firstName || !lastName || !email || !phone || !password || !confirmPassword || !gender || !dob || !nic || !doctorDepartment) {
            return res.status(400).json({ success: false, message: "Please Provide All the Information!" })
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ success: false, message: "Password does not match!" })
        }
        const isRegistered = await User.findOne({ email });
        if (isRegistered) {
            return res.status(400).json({ message: "Doctor Already Exists!" })
        }
        const doctor = await User.create({firstName,lastName,email,phone,password,gender,dob,nic, role: 'Doctor',docAvatar: avatar_url.secure_url,doctorDepartment})
        return res.status(200).json({ success: true, message: "Doctor Registered Successfully!", doctor })
    }catch (error) {
        console.error("Unexpected Error:", error)
        next(error)
    }
});


//Get All Doctors
export const getAllDoctors = catchAsyncError(async (req,res,next) => {
    const doctors = await User.find({role:'Doctor'})
    res.status(200).json({success:true, doctors}) 
})

//Getting all Patients
export const getAllPatients = catchAsyncError(async (req,res,next) => {
    const users = await User.find({role:'Patient'})
    res.status(200).json({success:true, users})
})

// Single User Details
export const getUserDetails = catchAsyncError( async (req,res) => {
    const user = req.user
    res.status(200).json({success:true, user})
})

// Admin Logout
export const adminLogout = catchAsyncError( async (req,res) => {
    res.status(200).cookie("adminToken","",{
        httpOnly:true,
        expires:new Date(Date.now())
    }).json({
        success:true,
        message:"Admin Logged Out Successfully!"
    })
})

//Patient Logout
export const patientLogout = catchAsyncError( async (req,res) => {
    res.status(200).cookie("patientToken","",{
        httpOnly:true,
        expires:new Date(Date.now())
    }).json({
        success:true,
        message:"Patient Logged Out Successfully!"
    })
})