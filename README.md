# Investor Atlas with Razorpay Integration

This project demonstrates the integration of Razorpay payment gateway with a Node.js backend and React.js frontend.

## Project Structure

- **Frontend**: React application built with Vite, TypeScript, and Tailwind CSS
- **Backend**: Node.js application with Express, handling Razorpay API integration

## Setup Instructions

### Backend Setup

1. Navigate to the Backend directory:
   ```
   cd Backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following:
   ```
   PORT=3001
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```
   
   You can get your Razorpay API keys from the [Razorpay Dashboard](https://dashboard.razorpay.com/app/keys).

4. Start the backend server:
   ```
   npm start
   ```
   
   For development with auto-reload:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the Frontend directory:
   ```
   cd Frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following:
   ```
   VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
   ```
   
   This should be the same key used in the backend.

4. Start the development server:
   ```
   npm run dev
   ```

5. Access the application at `http://localhost:3000`

## Testing the Payment Flow

1. Click the "Pay Now" button in the hero section
2. The Razorpay payment modal will open
3. Use the following test card details:
   - Card Number: 5267 3181 8797 5449
   - Expiry: Any future date
   - CVV: Any 3 digits
   - Name: Any name
   - 3D Secure Password: 1234

4. After successful payment, you will receive a success message

## Troubleshooting

### Authentication Error ("Error creating payment order")

If you're seeing this error, it's likely due to incorrect or missing Razorpay API keys:

1. **Check your API keys**:
   - Make sure you have valid API keys from the Razorpay Dashboard
   - Ensure both the Key ID and Key Secret are correctly set in Backend/.env
   - Verify the Key ID is correctly set in Frontend/.env (prefixed with VITE_)

2. **Test the backend API connection**:
   ```
   cd Backend
   node test-razorpay.js
   ```
   This will output detailed information about any connection issues.

3. **Check connectivity**:
   - Ensure the backend server is running on port 3001
   - Make sure there are no firewall issues blocking the connection
   - Verify your internet connection

4. **Razorpay account status**:
   - Log in to your Razorpay Dashboard to verify your account is active
   - Check if you need to complete any KYC requirements
   - Ensure your account has permissions for payment processing

## API Endpoints

### Razorpay Integration API

- **Create Order**
  - URL: `POST http://localhost:3001/api/razorpay/create-order`
  - Body: `{ "amount": 5000 }`
  
- **Verify Payment**
  - URL: `POST http://localhost:3001/api/razorpay/verify-payment`
  - Body: 
    ```
    { 
      "razorpay_order_id": "order_ID",
      "razorpay_payment_id": "payment_ID",
      "razorpay_signature": "signature"
    }
    ```

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion, React-Razorpay
- **Backend**: Node.js, Express, Razorpay Node SDK
- **Payment**: Razorpay Payment Gateway

## Notes

- This is a demonstration project and should be properly secured before using in a production environment
- For production, ensure secure handling of API keys and proper error handling
- Consider adding a database to store transaction records 