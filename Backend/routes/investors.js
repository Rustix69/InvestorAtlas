const express = require("express");
const { getAllInvestors, getInvestorsList, getInvestorById } = require("../controllers/investorController");

const router = express.Router();

// Get all investors data (unmasked - admin use)
router.get("/all", getAllInvestors);

// Get investors list with masked sensitive fields (for frontend list view)
router.get("/list", getInvestorsList);

// Get specific investor details by ID (for detail view)
router.get("/:id", getInvestorById);

module.exports = router;
