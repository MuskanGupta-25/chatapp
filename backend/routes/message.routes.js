import express from 'express';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';
const router = express.Router();

//get message b/w two user
router.get("/:id",protectRoute,getMessages);

router.post("/send/:id",protectRoute,sendMessage);
//protectRoutes -  is like a authorization process  or we can say that user is login or not


export default router;