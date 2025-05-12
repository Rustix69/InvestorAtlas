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

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion, React-Razorpay
- **Backend**: Node.js, Express, Razorpay Node SDK
- **Payment**: Razorpay Payment Gateway
