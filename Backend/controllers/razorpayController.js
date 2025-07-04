const { razorpay } = require("../config/razorpay");
const crypto = require("crypto");
const { pool } = require("../config/db");

const createOrder = async (req, res) => {
  try {
    const { amount, planId, planName, tokens, userId, userEmail, userName } = req.body;
    
    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid amount"
      });
    }

    // Validate required fields
    if (!userId || !userEmail) {
      return res.status(400).json({
        success: false,
        message: "User information is required"
      });
    }

    if (!planId || !planName) {
      return res.status(400).json({
        success: false,
        message: "Plan information is required"
      });
    }

    if (!tokens || tokens < 0) {
      return res.status(400).json({
        success: false,
        message: "Valid token amount is required"
      });
    }

    const orderOptions = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      payment_capture: 1,
      notes: {
        userId,
        userEmail,
        userName,
        planId,
        planName,
        tokens
      }
    };
    
    const order = await razorpay.orders.create(orderOptions);

    // Store order information in database
    await pool.query(
      `INSERT INTO orders (
        order_id,
        user_id,
        plan_id,
        plan_name,
        amount,
        currency,
        tokens,
        status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        order.id,
        userId,
        planId,
        planName,
        amount,
        order.currency,
        tokens,
        'created'
      ]
    );

    res.status(200).json({
      success: true,
      order
    });
    console.log("Order created successfully for plan:", planName, "with", tokens, "tokens");
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
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      userId,
      planId,
      planName,
      tokens
    } = req.body;
    
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
        
        // Update order status and store payment details
        await pool.query(
          `UPDATE orders 
           SET status = $1,
               payment_id = $2,
               payment_signature = $3,
               payment_status = $4,
               payment_method = $5,
               updated_at = CURRENT_TIMESTAMP
           WHERE order_id = $6`,
          [
            'completed',
            razorpay_payment_id,
            razorpay_signature,
            paymentDetails.status,
            paymentDetails.method,
            razorpay_order_id
          ]
        );

        // Update user's credits and subscription status
        await pool.query(
          `UPDATE users 
           SET credits = credits + $1,
               current_plan = $2,
               subscription_status = 'active',
               subscription_start_date = CURRENT_TIMESTAMP,
               subscription_end_date = CURRENT_TIMESTAMP + INTERVAL '1 month',
               updated_at = CURRENT_TIMESTAMP
           WHERE id = $3`,
          [tokens, planId, userId]
        );

        console.log("Payment Details:", {
          id: paymentDetails.id,
          status: paymentDetails.status,
          amount: paymentDetails.amount / 100,
          currency: paymentDetails.currency,
          method: paymentDetails.method,
          order_id: paymentDetails.order_id,
          plan: planName,
          tokens: tokens,
          user: userId,
          created_at: new Date(paymentDetails.created_at * 1000).toISOString()
        });
      } catch (error) {
        console.error("Error updating database:", error.message);
      }
      
      res.status(200).json({
        success: true,
        message: "Payment verified successfully",
        tokens: tokens
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
