import express from 'express';
import { deleteAppointment, getAllAppointments, postAppointment, updateAppointmentStatus } from '../controllers/appointmentController.js';
import { isAdminAuthenticated, isPatientAuthenticated } from '../middleware/auth.js';

const router = express.Router()

router.post('/book',isPatientAuthenticated,postAppointment)
router.get('/all-apts',isAdminAuthenticated,getAllAppointments)
router.put('/update/:id',isAdminAuthenticated,updateAppointmentStatus)
router.delete('/delete/:id',isAdminAuthenticated,deleteAppointment)

export default router