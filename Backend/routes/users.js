const express = require("express");
const router = express.Router();
const { syncUser, getUserById, getAllUsers, getUserCredits } = require("../controllers/usersController");

// Sync user from Clerk to database
router.post("/sync-user", syncUser);

// Get user details by ID
router.get("/:userId", getUserById);

// Get user credits by ID
router.get("/:userId/credits", getUserCredits);

// Get all users (admin endpoint)
router.get("/", getAllUsers);

module.exports = router;
