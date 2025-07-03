// db.js
const { Client, Pool } = require('pg');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Determine if we should use SSL based on the connection string
const shouldUseSSL = () => {
  const dbUrl = process.env.DATABASE_URL || '';
  // Use SSL for standard Supabase domains, disable for IP addresses
  return dbUrl.includes('supabase.co') || 
         dbUrl.includes('railway.app') || 
         dbUrl.includes('render.com') ||
         dbUrl.includes('heroku.com') ||
         process.env.NODE_ENV === 'production';
};

// SSL configuration
const sslConfig = shouldUseSSL() ? {
  rejectUnauthorized: false,
} : false;

console.log(`🔒 SSL Configuration: ${shouldUseSSL() ? 'Enabled' : 'Disabled'}`);

// Create a pool for database connections
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: sslConfig,
});

// Create a new client instance for each connection (for individual use)
async function connectDB() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: sslConfig,
  });

  try {
    await client.connect();
    console.log('✅ Connected to database');
    console.log(`🔗 Connection type: ${shouldUseSSL() ? 'SSL Enabled' : 'Non-SSL'}`);
    return client;
  } catch (err) {
    console.error('❌ Database connection error:', err.stack);
    throw err;
  }
}

module.exports = {
  connectDB,
  pool,
};
