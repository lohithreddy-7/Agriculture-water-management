import express from 'express';
import cors from 'cors';
import pool from './db.js';
import { sendEmail } from './email.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Get all states
app.get('/api/states', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM states ORDER BY name');
    //console.log('States fetched:', rows); // Add logging
    res.json(rows);
  } catch (error) {
    console.error('Error fetching states:', error); // Add error logging
    res.status(500).json({ error: error.message });
  }
});

// Get crops for a specific state
app.get('/api/state/:id/crops', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        c.id,
        c.name,
        c.water_requirement,
        c.profit_per_acre,
        c.season,
        sc.is_major,
        sc.is_alternative
      FROM crops c 
      JOIN state_crops sc ON c.id = sc.crop_id 
      WHERE sc.state_id = ?
      ORDER BY c.name
    `, [req.params.id]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.post('/api/analyze', async (req, res) => {
  try {
    const { stateId, cropId, area } = req.body;

    // Get state information
    const [[state]] = await pool.query(
      'SELECT name, water_scarcity_status, annual_rainfall, groundwater_level FROM states WHERE id = ?',
      [stateId]
    );

    // Get selected crop information
    const [[crop]] = await pool.query(
      'SELECT name, water_requirement, profit_per_acre FROM crops WHERE id = ?',
      [cropId]
    );

    // Get alternative crops for the state
    const [alternativeCrops] = await pool.query(`
      SELECT 
        c.name,
        c.water_requirement,
        c.profit_per_acre,
        (c.profit_per_acre / c.water_requirement) as efficiency
      FROM crops c
      JOIN state_crops sc ON c.id = sc.crop_id
      WHERE sc.state_id = ? AND sc.is_alternative = true
      ORDER BY efficiency DESC
      LIMIT 5
    `, [stateId]);

    //console.log("Alternative Crops:", alternativeCrops); // Add logging

    // Format alternative crops to use camelCase
    const formattedCrops = alternativeCrops.map(crop => ({
      name: crop.name,
      waterRequirement: crop.water_requirement,
      profitPerAcre: crop.profit_per_acre,
      efficiency: crop.efficiency
    }));

    // Calculate water requirements
    const waterRequired = (crop.water_requirement * area).toFixed(2);
    
    // Determine water availability status based on state data
    let waterAvailability = 'Adequate';
    if (state.water_scarcity_status === 'Severe') {
      waterAvailability = 'Critical';
    } else if (state.water_scarcity_status === 'Moderate') {
      waterAvailability = 'Limited';
    }

    // Generate water management tips based on conditions
    const tips = [
      `Consider implementing water-efficient irrigation systems for ${crop.name} cultivation`,
      `Monitor soil moisture regularly to optimize irrigation scheduling`,
      `Use mulching techniques to reduce water evaporation`,
    ];

    if (state.water_scarcity_status === 'Severe') {
      tips.push(`Due to severe water scarcity in ${state.name}, consider alternative crops with lower water requirements`);
    }

    if (state.groundwater_level === 'Low') {
      tips.push('Implement rainwater harvesting systems to supplement irrigation needs');
    }

    // Calculate estimated profit
    const profitEstimate = (crop.profit_per_acre * area).toFixed(2);

    res.json({
      waterRequired,
      waterAvailability,
      rainfall: state.annual_rainfall,
      profitEstimate,
      tips,
      recommendedCrops: formattedCrops // Send formatted data
    });
  } catch (error) {
    console.error('Analysis error:', error);
    res.status(500).json({ error: error.message });
  }
});


// Get water management tips for all states or a specific state
app.get('/api/state/:id/tips', async (req, res) => {
  try {
    let query = `
      SELECT t.*, s.name as state_name 
      FROM tips t 
      JOIN states s ON t.state_id = s.id
    `;
    const params = [];
    
    if (req.params.id !== '0') {
      query += ' WHERE t.state_id = ?';
      params.push(req.params.id);
    }
    
    query += ' ORDER BY s.name, t.created_at DESC';
    
    const [rows] = await pool.query(query, params);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new tip
app.post('/api/tips', async (req, res) => {
  try {
    const { state_id, tip, added_by, details } = req.body;
    const [result] = await pool.query(
      'INSERT INTO tips (state_id, tip, added_by, details) VALUES (?, ?, ?, ?)',
      [state_id, tip, added_by, details]
    );
    
    // Get the newly added tip with state name
    const [[newTip]] = await pool.query(`
      SELECT t.*, s.name as state_name 
      FROM tips t 
      JOIN states s ON t.state_id = s.id 
      WHERE t.id = ?
    `, [result.insertId]);
    
    await sendEmail(
      'New Water Management Tip Added',
      `A new tip was added:\n\nTip: ${tip}\nAdded by: ${added_by}\nDetails: ${details || 'N/A'}`
    );
    
    res.json(newTip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Handle contact form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Create email content
    const emailSubject = `New Contact Form Message from ${name}`;
    console.log("Everything good");
    const emailText = `
      Name: ${name}
      Email: ${email}

      Message:
      ${message}
          `;
    await sendEmail(emailSubject, emailText);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});