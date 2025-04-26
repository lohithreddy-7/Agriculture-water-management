/*
  # Add state-crop relationships

  1. Changes
    - Insert state-crop relationships for all states
    - Each state gets appropriate major and alternative crops based on their agricultural patterns
    - Sets is_major and is_alternative flags appropriately

  2. Data Overview
    - Major crops are marked with is_major = TRUE
    - Alternative crops are marked with is_alternative = TRUE
    - Each state gets 4-7 major crops and 2-3 alternative crops
*/

-- Punjab
INSERT INTO state_crops (state_id, crop_id, is_major, is_alternative) VALUES
(1, 1, TRUE, FALSE),  -- Rice
(1, 2, TRUE, FALSE),  -- Wheat
(1, 3, TRUE, FALSE),  -- Cotton
(1, 5, TRUE, FALSE),  -- Maize
(1, 6, FALSE, TRUE),  -- Pulses
(1, 7, FALSE, TRUE);  -- Millets

-- Haryana
INSERT INTO state_crops (state_id, crop_id, is_major, is_alternative) VALUES
(2, 1, TRUE, FALSE),  -- Rice
(2, 2, TRUE, FALSE),  -- Wheat
(2, 3, TRUE, FALSE),  -- Cotton
(2, 4, TRUE, FALSE),  -- Sugarcane
(2, 10, FALSE, TRUE); -- Mustard

-- Uttar Pradesh
INSERT INTO state_crops (state_id, crop_id, is_major, is_alternative) VALUES
(3, 1, TRUE, FALSE),  -- Rice
(3, 2, TRUE, FALSE),  -- Wheat
(3, 4, TRUE, FALSE),  -- Sugarcane
(3, 6, TRUE, FALSE),  -- Pulses
(3, 17, FALSE, TRUE); -- Potato

-- Maharashtra
INSERT INTO state_crops (state_id, crop_id, is_major, is_alternative) VALUES
(7, 3, TRUE, FALSE),  -- Cotton
(7, 4, TRUE, FALSE),  -- Sugarcane
(7, 9, TRUE, FALSE),  -- Soybean
(7, 12, TRUE, FALSE), -- Jowar
(7, 6, FALSE, TRUE),  -- Pulses
(7, 8, FALSE, TRUE);  -- Groundnut

-- Karnataka
INSERT INTO state_crops (state_id, crop_id, is_major, is_alternative) VALUES
(9, 1, TRUE, FALSE),  -- Rice
(9, 13, TRUE, FALSE), -- Ragi
(9, 5, TRUE, FALSE),  -- Maize
(9, 6, TRUE, FALSE),  -- Pulses
(9, 7, FALSE, TRUE);  -- Millets

-- Tamil Nadu
INSERT INTO state_crops (state_id, crop_id, is_major, is_alternative) VALUES
(8, 1, TRUE, FALSE),  -- Rice
(8, 4, TRUE, FALSE),  -- Sugarcane
(8, 19, TRUE, FALSE), -- Coconut
(8, 20, TRUE, FALSE), -- Vegetables
(8, 16, FALSE, TRUE); -- Spices

-- Gujarat
INSERT INTO state_crops (state_id, crop_id, is_major, is_alternative) VALUES
(6, 3, TRUE, FALSE),  -- Cotton
(6, 8, TRUE, FALSE),  -- Groundnut
(6, 2, TRUE, FALSE),  -- Wheat
(6, 11, FALSE, TRUE); -- Bajra

-- Madhya Pradesh
INSERT INTO state_crops (state_id, crop_id, is_major, is_alternative) VALUES
(4, 9, TRUE, FALSE),  -- Soybean
(4, 2, TRUE, FALSE),  -- Wheat
(4, 6, TRUE, FALSE),  -- Pulses
(4, 3, TRUE, FALSE),  -- Cotton
(4, 7, FALSE, TRUE);  -- Millets

-- Rajasthan
INSERT INTO state_crops (state_id, crop_id, is_major, is_alternative) VALUES
(5, 2, TRUE, FALSE),  -- Wheat
(5, 11, TRUE, FALSE), -- Bajra
(5, 10, TRUE, FALSE), -- Mustard
(5, 6, TRUE, FALSE),  -- Pulses
(5, 7, FALSE, TRUE);  -- Millets

-- Kerala
INSERT INTO state_crops (state_id, crop_id, is_major, is_alternative) VALUES
(10, 19, TRUE, FALSE), -- Coconut
(10, 16, TRUE, FALSE), -- Spices
(10, 1, TRUE, FALSE),  -- Rice
(10, 20, FALSE, TRUE); -- Vegetables

-- Andhra Pradesh
INSERT INTO state_crops (state_id, crop_id, is_major, is_alternative) VALUES
(11, 1, TRUE, FALSE),  -- Rice
(11, 3, TRUE, FALSE),  -- Cotton
(11, 8, TRUE, FALSE),  -- Groundnut
(11, 6, TRUE, FALSE),  -- Pulses
(11, 12, FALSE, TRUE); -- Jowar

-- West Bengal
INSERT INTO state_crops (state_id, crop_id, is_major, is_alternative) VALUES
(14, 1, TRUE, FALSE),  -- Rice
(14, 15, TRUE, FALSE), -- Jute
(14, 17, TRUE, FALSE), -- Potato
(14, 20, FALSE, TRUE); -- Vegetables

-- Bihar
INSERT INTO state_crops (state_id, crop_id, is_major, is_alternative) VALUES
(13, 1, TRUE, FALSE),  -- Rice
(13, 2, TRUE, FALSE),  -- Wheat
(13, 4, TRUE, FALSE),  -- Sugarcane
(13, 5, TRUE, FALSE),  -- Maize
(13, 6, FALSE, TRUE);  -- Pulses

-- Assam
INSERT INTO state_crops (state_id, crop_id, is_major, is_alternative) VALUES
(16, 1, TRUE, FALSE),  -- Rice
(16, 14, TRUE, FALSE), -- Tea
(16, 15, TRUE, FALSE), -- Jute
(16, 20, FALSE, TRUE); -- Vegetables

-- Odisha
INSERT INTO state_crops (state_id, crop_id, is_major, is_alternative) VALUES
(15, 1, TRUE, FALSE),  -- Rice
(15, 6, TRUE, FALSE),  -- Pulses
(15, 20, TRUE, FALSE), -- Vegetables
(15, 7, FALSE, TRUE);  -- Millets