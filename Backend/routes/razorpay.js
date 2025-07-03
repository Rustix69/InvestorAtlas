const express = require("express");
const router = express.Router();
const { createOrder, verifyPayment } = require("../controllers/razorpayController");

// Create a new Razorpay order
router.post("/create-order", createOrder);

// Verify Razorpay payment
router.post("/verify-payment", verifyPayment);

module.exports = router;
