const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/razorpay", require("./routes/razorpay"));

// Home route
app.get("/", (req, res) => {
  res.send("Investor Atlas API is running. Use /api/razorpay endpoints for payment integration.");
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined
  });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
});