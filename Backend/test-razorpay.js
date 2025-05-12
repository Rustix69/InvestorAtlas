const Razorpay = require('razorpay');
require('dotenv').config();

console.log('=== RAZORPAY API TEST ===');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('API KEY ID:', process.env.RAZORPAY_KEY_ID);
console.log('API SECRET:', process.env.RAZORPAY_KEY_SECRET ? '*****' : 'NOT SET');

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  console.error('\n⚠️  Missing API credentials in .env file');
  console.error('Please ensure you have valid credentials in your .env file:');
  console.error('RAZORPAY_KEY_ID=rzp_test_yourKeyId');
  console.error('RAZORPAY_KEY_SECRET=yourKeySecret\n');
  process.exit(1);
}

async function testRazorpay() {
  try {
    console.log('\n🔄 Initializing Razorpay client...');
    
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    console.log('✅ Razorpay client initialized');
    
    console.log('\n🔄 Creating a test order...');
    const order = await razorpay.orders.create({
      amount: 50000, // ₹500
      currency: 'INR',
      receipt: 'test_receipt_' + Date.now(),
      payment_capture: 1,
    });
    
    console.log('✅ Test order created successfully!');
    console.log('Order ID:', order.id);
    console.log('Amount:', order.amount / 100, order.currency);
    console.log('\nYour Razorpay integration is working correctly! 🎉');
    
  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    console.error('\nDetails:', JSON.stringify(error, null, 2));
    
    if (error.statusCode === 401) {
      console.error('\n⚠️  Authentication failed. Please check your API credentials.');
      console.error('1. Verify you have the correct API Key ID and Secret in your .env file');
      console.error('2. Ensure there are no leading/trailing spaces in your credentials');
      console.error('3. Make sure you are using test credentials in test mode, or live credentials in live mode');
      console.error('\nYou can find your API keys in the Razorpay Dashboard under Settings > API Keys');
    }
  }
}

testRazorpay(); 