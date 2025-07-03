import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import investorsRouter from './routes/investors.js';
import razorpayRouter from './routes/razorpay.js';

// Load environment variables
dotenv.config();

const app = express();  

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/razorpay", razorpayRouter);
app.use("/api/investors", investorsRouter);

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Investor Atlas API is running",
    endpoints: {
      investors: {
        list: "/api/investors/list - GET masked investors list for display",
        detail: "/api/investors/:id - GET specific investor details",
        all: "/api/investors/all - GET all investors data (admin)"
      },
      razorpay: "/api/razorpay - Payment integration endpoints"
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;