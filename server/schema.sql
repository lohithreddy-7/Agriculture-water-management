-- Drop existing database and recreate
DROP DATABASE IF EXISTS water_management;
CREATE DATABASE water_management;
USE water_management;

-- States table
CREATE TABLE IF NOT EXISTS states (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  water_scarcity_status VARCHAR(50) NOT NULL,
  annual_rainfall FLOAT NOT NULL,
  groundwater_level VARCHAR(50) NOT NULL
);

-- Crops table
CREATE TABLE IF NOT EXISTS crops (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  water_requirement FLOAT NOT NULL,
  profit_per_acre FLOAT NOT NULL,
  season VARCHAR(50)
);

-- State-Crops relationship table
CREATE TABLE IF NOT EXISTS state_crops (
  id INT PRIMARY KEY AUTO_INCREMENT,
  state_id INT NOT NULL,
  crop_id INT NOT NULL,
  is_major BOOLEAN DEFAULT FALSE,
  is_alternative BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (state_id) REFERENCES states(id),
  FOREIGN KEY (crop_id) REFERENCES crops(id)
);

-- Tips table
CREATE TABLE IF NOT EXISTS tips (
  id INT PRIMARY KEY AUTO_INCREMENT,
  state_id INT,
  tip TEXT NOT NULL,
  details TEXT,
  added_by VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (state_id) REFERENCES states(id)
);

-- Suggestions table
CREATE TABLE IF NOT EXISTS suggestions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert states data
INSERT INTO states (name, water_scarcity_status, annual_rainfall, groundwater_level) VALUES
('Punjab', 'Severe', 649, 'High'),
('Haryana', 'Severe', 617, 'Moderate'),
('Uttar Pradesh', 'Moderate', 942, 'Moderate'),
('Madhya Pradesh', 'Moderate', 1160, 'Low'),
('Rajasthan', 'Acute', 575, 'Low'),
('Gujarat', 'Severe', 850, 'Moderate'),
('Maharashtra', 'Severe', 2500, 'Moderate'),
('Tamil Nadu', 'Acute', 998, 'Low'),
('Karnataka', 'Severe', 1248, 'Low'),
('Kerala', 'Moderate', 3055, 'High'),
('Andhra Pradesh', 'Severe', 912, 'Moderate'),
('Telangana', 'Severe', 905, 'Low'),
('Bihar', 'Moderate', 1205, 'High'),
('West Bengal', 'Moderate', 2585, 'High'),
('Odisha', 'Moderate', 1451, 'Moderate'),
('Assam', 'Moderate', 2818, 'High'),
('Jharkhand', 'Moderate', 1382, 'Low'),
('Chhattisgarh', 'Moderate', 1338, 'Moderate'),
('Uttarakhand', 'Moderate', 1547, 'High'),
('Himachal Pradesh', 'Moderate', 1251, 'High');

-- Insert crops data
INSERT INTO crops (name, water_requirement, profit_per_acre, season) VALUES
('Rice', 1200, 45000, 'Kharif'),
('Wheat', 400, 40000, 'Rabi'),
('Cotton', 550, 38000, 'Kharif'),
('Sugarcane', 1800, 55000, 'Annual'),
('Maize', 500, 35000, 'Kharif'),
('Pulses', 300, 25000, 'Both'),
('Millets', 350, 28000, 'Kharif'),
('Groundnut', 450, 32000, 'Kharif'),
('Soybean', 450, 35000, 'Kharif'),
('Mustard', 250, 30000, 'Rabi'),
('Bajra', 350, 25000, 'Kharif'),
('Jowar', 350, 25000, 'Both'),
('Ragi', 400, 28000, 'Kharif'),
('Tea', 2000, 150000, 'Annual'),
('Jute', 500, 40000, 'Kharif'),
('Spices', 400, 60000, 'Annual'),
('Potato', 400, 45000, 'Rabi'),
('Barley', 350, 30000, 'Rabi'),
('Coconut', 1500, 80000, 'Annual'),
('Vegetables', 600, 50000, 'Both');

-- Insert state-crop relationships for all states
INSERT INTO state_crops (state_id, crop_id, is_major, is_alternative) VALUES
-- Punjab
(1, 1, TRUE, FALSE), -- Rice
(1, 2, TRUE, FALSE), -- Wheat
(1, 3, TRUE, FALSE), -- Cotton
(1, 5, TRUE, FALSE), -- Maize
(1, 6, FALSE, TRUE), -- Pulses
(1, 7, FALSE, TRUE), -- Millets
(1, 10, FALSE, TRUE), -- Mustard

-- Haryana
(2, 1, TRUE, FALSE), -- Rice
(2, 2, TRUE, FALSE), -- Wheat
(2, 4, TRUE, FALSE), -- Sugarcane
(2, 3, TRUE, FALSE), -- Cotton
(2, 10, FALSE, TRUE), -- Mustard
(2, 18, FALSE, TRUE), -- Barley
(2, 6, FALSE, TRUE); -- Pulses

-- Add similar entries for all other states...
-- (Add entries for states 3-20 following the same pattern)

-- Insert sample tips
INSERT INTO tips (state_id, tip, details, added_by) VALUES
(1, 'Implement Direct Seeded Rice (DSR) technique', 'DSR can save up to 30% water compared to traditional transplanting. It also reduces labor costs and greenhouse gas emissions.', 'Agricultural Expert'),
(1, 'Use drip irrigation for cotton', 'Drip irrigation can improve water use efficiency by 40-50% compared to flood irrigation, while also improving yield quality.', 'Water Management Board'),
(2, 'Practice laser land leveling', 'Laser leveling can save 20-30% irrigation water and improve crop yield by 10-15% by ensuring uniform water distribution.', 'Agricultural Department');

-- Add more tips for other states...