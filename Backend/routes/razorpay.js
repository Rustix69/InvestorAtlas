import express from 'express';
import { createOrder, verifyPayment } from '../controllers/razorpayController.js';

const router = express.Router();

// Create a new Razorpay order
router.post("/create-order", createOrder);

// Verify Razorpay payment
router.post("/verify-payment", verifyPayment);

export default router;
