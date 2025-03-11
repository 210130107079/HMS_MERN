import { User } from "../models/userModel.js";
import { catchAsyncError } from "./catchAsyncError.js";
import jwt from 'jsonwebtoken'


export const isAdminAuthenticated = catchAsyncError(async (req,res,next) => {
    const token = req.cookies.adminToken
    if(!token){
        return res.status(401).json({ success: false, message: "Admin not Authenticated !" })
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id)
    if(req.user.role !== 'Admin'){
        return res.status(403).json({ success: false, message: "User is not Authorized for this Route !" })
    }
    next()
})

export const isPatientAuthenticated = catchAsyncError(async (req,res,next) => {
    const token = req.cookies.patientToken
    if(!token){
        return res.status(401).json({ success: false, message: "Patient not Authenticated !" })
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id)
    if(req.user.role !== 'Patient'){
        return res.status(403).json({ success: false, message: "User is not Authorized for this Route !" })
    }
    next()
})