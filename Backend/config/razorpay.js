import Razorpay from 'razorpay';
import dotenv from 'dotenv';

// Ensure environment variables are loaded
dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'test_key',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'test_secret'
});

// Log warning if using test keys
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  console.warn('⚠️ Warning: Using test Razorpay keys. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in .env for production use.');
}

export { razorpay };

