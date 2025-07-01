const { connectDB } = require('../config/db');

// Helper function to mask investor name
const maskName = (name) => {
  if (!name || name.length < 3) return name;
  const firstChar = name.charAt(0);
  const lastChar = name.charAt(name.length - 1);
  const middleMask = 'X'.repeat(Math.max(0, name.length - 2));
  return `${firstChar}${middleMask}${lastChar}`;
};

// Get all investors data (unmasked - for admin use)
const getAllInvestors = async (req, res) => {
  let client;
  
  try {
    client = await connectDB();
    
    // Query to get all data from InvestorsV01 table with row number as ID
    const result = await client.query(`
      SELECT ROW_NUMBER() OVER (ORDER BY "Full Name") as id, *
      FROM "InvestorsV01"
    `);
    
    res.status(200).json({
      success: true,
      message: 'Investors data fetched successfully',
      data: result.rows,
      count: result.rows.length
    });
    
  } catch (error) {
    console.error('❌ Error fetching investors data:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch investors data',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  } finally {
    if (client) {
      await client.end();
      console.log('🔌 Disconnected from database');
    }
  }
};

// Get investors list with masked sensitive fields (for frontend list view)
const getInvestorsList = async (req, res) => {
  let client;
  
  try {
    client = await connectDB();
    
    // Query to get basic info from InvestorsV01 table with row number as ID
    const result = await client.query(`
      SELECT ROW_NUMBER() OVER (ORDER BY "Full Name") as id, *
      FROM "InvestorsV01"
    `);
    
    // Mask sensitive data for list view
    const maskedData = result.rows.map(investor => {
      const masked = { ...investor };
      
      // Mask Full Name
      if (masked["Full Name"]) {
        masked["Full Name"] = maskName(masked["Full Name"]);
      }
      
      // Mask Email
      if (masked["Email"]) {
        const emailParts = masked["Email"].split('@');
        if (emailParts.length === 2) {
          const localPart = emailParts[0];
          const domain = emailParts[1];
          const maskedLocal = localPart.length > 2 
            ? localPart.charAt(0) + 'X'.repeat(localPart.length - 2) + localPart.charAt(localPart.length - 1)
            : 'XXX';
          masked["Email"] = `${maskedLocal}@${domain}`;
        }
      }
      
      // Mask Phone
      if (masked["Phone"]) {
        const phone = masked["Phone"].replace(/\s+/g, ''); // Remove spaces
        if (phone.length > 4) {
          const first2 = phone.substring(0, 2);
          const last2 = phone.substring(phone.length - 2);
          const middleMask = 'X'.repeat(phone.length - 4);
          masked["Phone"] = `${first2}${middleMask}${last2}`;
        } else {
          masked["Phone"] = 'XXXX';
        }
      }
      
      // Mask LinkedIn URL
      if (masked["Linkedin URL"]) {
        // Extract just the username part and mask it
        const url = masked["Linkedin URL"];
        if (url.includes('linkedin.com/in/')) {
          const baseUrl = url.substring(0, url.lastIndexOf('/') + 1);
          const username = url.substring(url.lastIndexOf('/') + 1);
          const maskedUsername = username.length > 2 
            ? username.charAt(0) + 'X'.repeat(Math.max(0, username.length - 2)) + username.charAt(username.length - 1)
            : 'XXXX';
          masked["Linkedin URL"] = `${baseUrl}${maskedUsername}`;
        } else {
          masked["Linkedin URL"] = 'https://linkedin.com/in/XXXX';
        }
      }
      
      return masked;
    });
    
    res.status(200).json({
      success: true,
      message: 'Investors list fetched successfully',
      data: maskedData,
      count: maskedData.length
    });
    
  } catch (error) {
    console.error('❌ Error fetching investors list:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch investors list',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  } finally {
    if (client) {
      await client.end();
      console.log('🔌 Disconnected from database');
    }
  }
};

// Get specific investor details by ID (for detail view)
const getInvestorById = async (req, res) => {
  let client;
  const { id } = req.params;
  
  try {
    client = await connectDB();
    
    // Query to get specific investor data by row number
    const result = await client.query(`
      SELECT ROW_NUMBER() OVER (ORDER BY "Full Name") as id, *
      FROM "InvestorsV01"
    `);
    
    // Find the investor with the matching ID
    const investor = result.rows.find(row => row.id == id);
    
    if (!investor) {
      return res.status(404).json({
        success: false,
        message: 'Investor not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Investor details fetched successfully',
      data: investor
    });
    
  } catch (error) {
    console.error('❌ Error fetching investor details:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch investor details',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  } finally {
    if (client) {
      await client.end();
      console.log('🔌 Disconnected from database');
    }
  }
};

module.exports = {
  getAllInvestors,
  getInvestorsList,
  getInvestorById
};
