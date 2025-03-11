import express from 'express';
import { addNewAdmin, addNewDoctor, adminLogout, getAllDoctors, getAllPatients, getUserDetails, patientLogout, patientRegister, userLogin } from '../controllers/userController.js';
import {isAdminAuthenticated, isPatientAuthenticated} from '../middleware/auth.js'

const router = express.Router()

router.post('/patient/register',patientRegister)
router.post('/login',userLogin) //Both patient and admin Login
router.post('/doctor/register',isAdminAuthenticated,addNewDoctor)
router.post('/admin/register',isAdminAuthenticated,addNewAdmin)
router.get('/doctors/all',getAllDoctors)
router.get('/patients',isAdminAuthenticated,getAllPatients)
router.get('/admin/logout',isAdminAuthenticated,adminLogout)
router.get('/patient/logout',isPatientAuthenticated,patientLogout)
router.get('/patient/me',isPatientAuthenticated,getUserDetails)
router.get('/admin/me',isAdminAuthenticated,getUserDetails)

export default router