const { razorpay } = require("../config/razorpay");
const crypto = require("crypto");

const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;
    
    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid amount"
      });
    }

    const orderOptions = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      payment_capture: 1
    };
    
    const order = await razorpay.orders.create(orderOptions);

    res.status(200).json({
      success: true,
      order
    });
    console.log("Order created successfully");
  } catch (error) {
    if (error.statusCode === 401 || 
        (error.error && error.error.code === 'BAD_REQUEST_ERROR') ||
        error.message.includes('authentication')) {
      return res.status(500).json({
        success: false,
        message: "Authentication failed with Razorpay. Please check your API keys.",
        error: {
          code: error.error?.code || "AUTH_ERROR",
          description: error.error?.description || error.message
        }
      });
    }
    
    res.status(500).json({
      success: false,
      message: "Error creating payment order",
      error: error.message
    });
  }
};

const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Missing required payment verification parameters"
      });
    }

    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    
    const data = razorpay_order_id + "|" + razorpay_payment_id;
    hmac.update(data);
    
    const generatedSignature = hmac.digest("hex");
    
    const isValid = generatedSignature === razorpay_signature;
    
    if (isValid) {
      try {
        const paymentDetails = await razorpay.payments.fetch(razorpay_payment_id);
        console.log("Payment Details:", {
          id: paymentDetails.id,
          status: paymentDetails.status,
          amount: paymentDetails.amount / 100,
          currency: paymentDetails.currency,
          method: paymentDetails.method,
          order_id: paymentDetails.order_id,
          created_at: new Date(paymentDetails.created_at * 1000).toISOString()
        });
      } catch (error) {
        console.log("Note: Could not fetch payment details", error.message);
      }
      
      res.status(200).json({
        success: true,
        message: "Payment verified successfully"
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Payment verification failed. Invalid signature."
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error verifying payment",
      error: error.message
    });
  }
};

module.exports = { createOrder, verifyPayment };
