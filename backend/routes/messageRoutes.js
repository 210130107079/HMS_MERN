import express from 'express';
import { getAllMessages, sendMessage } from '../controllers/messageController.js';
import {isAdminAuthenticated} from '../middleware/auth.js'

const router = express.Router()

router.post('/send',sendMessage)
router.get('/get-all',isAdminAuthenticated,getAllMessages)

export default router