const { pool } = require("../config/db");

// Sync user from Clerk to database
const syncUser = async (req, res) => {
  const { userId, email, name } = req.body;

  if (!userId || !email) {
    return res.status(400).json({
      success: false,
      error: "Missing required fields: userId and email are required"
    });
  }

  try {
    // Insert or update user data
    const result = await pool.query(
      `
      INSERT INTO users (id, email, name, updated_at)
      VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
      ON CONFLICT (id) DO UPDATE
      SET email = EXCLUDED.email,
          name = EXCLUDED.name,
          updated_at = CURRENT_TIMESTAMP
      RETURNING *;
      `,
      [userId, email, name || null]
    );

    res.json({
      success: true,
      message: "User synced successfully",
      user: result.rows[0]
    });
  } catch (err) {
    console.error("Error syncing user:", err);
    res.status(500).json({
      success: false,
      error: "Database error",
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

// Get user details by ID
const getUserById = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({
      success: false,
      error: "User ID is required"
    });
  }

  try {
    const result = await pool.query(
      'SELECT id, email, name, credits, created_at, updated_at FROM users WHERE id = $1',
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: "User not found"
      });
    }

    res.json({
      success: true,
      user: result.rows[0]
    });
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({
      success: false,
      error: "Database error",
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

// Get all users (admin endpoint)
const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, email, name, credits, created_at, updated_at FROM users ORDER BY created_at DESC'
    );

    res.json({
      success: true,
      users: result.rows,
      count: result.rows.length
    });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({
      success: false,
      error: "Database error",
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

// Get user credits by ID
const getUserCredits = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({
      success: false,
      error: "User ID is required"
    });
  }

  try {
    const result = await pool.query(
      'SELECT id, email, name, credits, current_plan, subscription_status, created_at, updated_at FROM users WHERE id = $1',
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: "User not found"
      });
    }

    res.json({
      success: true,
      user: result.rows[0]
    });
  } catch (err) {
    console.error("Error fetching user credits:", err);
    res.status(500).json({
      success: false,
      error: "Database error",
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

module.exports = {
  syncUser,
  getUserById,
  getAllUsers,
  getUserCredits
};
