# Investor Atlas Backend

This is the backend server for Investor Atlas with Razorpay payment integration.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3001
   RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_ID
   RAZORPAY_KEY_SECRET=YOUR_RAZORPAY_KEY_SECRET
   ```

   Replace `YOUR_KEY_ID` and `YOUR_KEY_SECRET` with your actual Razorpay API keys.

3. Start the server:
   ```
   npm start
   ```

   Or for development with auto-reload:
   ```
   npm run dev
   ```

## API Endpoints

### Razorpay Integration

- **Create Order**
  - URL: `POST /api/razorpay/create-order`
  - Body: `{ "amount": 5000 }`
  - Response: Order details from Razorpay

- **Verify Payment**
  - URL: `POST /api/razorpay/verify-payment`
  - Body: 
    ```
    { 
      "razorpay_order_id": "order_ID",
      "razorpay_payment_id": "payment_ID",
      "razorpay_signature": "signature"
    }
    ```
  - Response: Payment verification status

## How to Get Razorpay API Keys

1. Sign up or log in to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Go to Settings > API Keys
3. Generate a new API key pair
4. Copy the Key ID and Key Secret to your `.env` file

For testing, you can use the test mode keys provided by Razorpay.

## Troubleshooting Authentication Errors

If you're getting authentication errors when trying to create orders:

1. **Verify your API keys**:
   - Ensure your Key ID starts with `rzp_test_` for test mode
   - Check for any leading/trailing spaces in your API keys
   - Make sure you've copied both the Key ID and Key Secret correctly

2. **Test direct API connection**:
   You can use the included test script:
   ```
   node test-razorpay.js
   ```
   
   This will attempt to create a test order and show detailed error information.

3. **Other common issues**:
   - Make sure your Razorpay account is active and not suspended
   - Check if you have the correct permissions for payment processing
   - Ensure you're not mixing test and live credentials

## Testing the Payment Flow

1. Create an order using the create-order endpoint
2. Use the order details to open the Razorpay payment modal in the frontend
3. Complete the payment process
4. Verify the payment using the verify-payment endpoint 