import {catchAsyncError} from '../middleware/catchAsyncError.js'
import {Appointment} from '../models/appointmentModel.js'
import {User} from '../models/userModel.js'

// Creating an appointment
export const postAppointment = catchAsyncError(async (req,res) => {
    const {firstName,lastName,email,phone,nic,dob,gender,appointment_date,department,doctor_firstName,doctor_lastName,hasVisited,address,} = req.body
    if(!firstName || !lastName || !email || !phone || !nic || !dob || !gender || !appointment_date || !department || !doctor_firstName || !doctor_lastName || !hasVisited || !address){
        return res.status(400).json({success:false,message:"Please Provide all the Information !"})
    }
    const isConflict = await User.find({
        firstName:doctor_firstName,
        lastName:doctor_lastName,
        role:"Doctor",
        doctorDepartment:department
    })
    if(isConflict.length === 0){
        return res.status(404).json({message:"Doctor Not Found !"})
    }
    if(isConflict.length > 1){
        return res.status(400).json({message:"More than 1 Doctor Found ! Please contact thorough Email or Phone !"})
    }
    const doctorId = isConflict[0]._id
    const patientId = req.user._id
    const appointment = await Appointment.create({firstName,lastName,email,phone,nic,dob,gender,appointment_date,department,doctor:{firstName:doctor_firstName,lastName:doctor_lastName},hasVisited,address,doctorId,patientId})
    res.status(200).json({success:true,message:"Appointment Booked Successfully !"})
})

// getting all appointment
export const getAllAppointments = catchAsyncError(async (req,res) => {
    const appointments = await Appointment.find()
    res.status(200).json({success:true, appointments})
})

//Updating Appointment
export const updateAppointmentStatus = catchAsyncError(async (req,res) => {
    const { id } = req.params
    let appointment = await Appointment.findById(id)
    if(!appointment){
        return res.status(404).json({message:"Appointment Not Found !"})
    }
    appointment = await Appointment.findByIdAndUpdate(id,req.body,{
        new: true,
        runValidators: true,
        useFindAndModify:false
    })
    res.status(200).json({success:true,message:"Appointment Updated Successfully !",appointment})
})

// Deleting Appointment
export const deleteAppointment = catchAsyncError(async (req,res) => {
    const { id } = req.params
    const appointment = await Appointment.findById(id)
    if(!appointment){
        return res.status(404).json({message:"Appointment Not Found !"})
    }
    await appointment.deleteOne()
    res.status(200).json({success:true,message:"Appointment Deleted Successfully !"})
})