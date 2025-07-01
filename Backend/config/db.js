// db.js
const { Client } = require('pg');

// Create a new client instance for each connection
async function connectDB() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false, // required for Supabase SSL
    },
  });

  try {
    await client.connect();
    console.log('✅ Connected to database');
    return client;
  } catch (err) {
    console.error('❌ Database connection error:', err.stack);
    throw err;
  }
}

module.exports = {
  connectDB,
};
