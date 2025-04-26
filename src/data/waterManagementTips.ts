export interface CropWaterTip {
  crop: string;
  waterRequirement: string;
  tips: string[];
  additionalNotes: string;
}

export const cropWaterTips: CropWaterTip[] = [
  {
    crop: "Rice",
    waterRequirement: "1,500–2,500 liters per kg of grain",
    tips: [
      "Implement Alternate Wetting and Drying (AWD) technique to reduce water usage by up to 30%",
      "Use Direct Seeded Rice (DSR) method instead of traditional flooding",
      "Maintain optimal water depth of 2-5 cm during vegetative stages",
      "Practice laser land leveling for uniform water distribution"
    ],
    additionalNotes: "Avoid deep water during seedling stage as it reduces oxygen availability for roots. Consider SRI (System of Rice Intensification) for better water efficiency."
  },
  {
    crop: "Wheat",
    waterRequirement: "450-650 mm per growth cycle",
    tips: [
      "Focus irrigation during crown root initiation, jointing, flowering, and grain filling stages",
      "Implement drip irrigation to prevent fungal diseases",
      "Use mulching techniques to reduce evaporation",
      "Practice deficit irrigation during less critical growth stages"
    ],
    additionalNotes: "Wheat is particularly sensitive to waterlogging. Monitor soil moisture regularly to prevent over-irrigation."
  },
  {
    crop: "Maize",
    waterRequirement: "500-800 mm per season",
    tips: [
      "Prioritize irrigation during tasseling, silking, and grain filling stages",
      "Implement furrow irrigation to minimize leaf contact",
      "Use drought-tolerant varieties in water-scarce regions",
      "Install rainwater harvesting systems for supplemental irrigation"
    ],
    additionalNotes: "Critical water stress during silking can reduce yield by up to 50%. Consider ridge planting in areas with excess rainfall."
  },
  {
    crop: "Sugarcane",
    waterRequirement: "1,500-2,200 mm annually",
    tips: [
      "Install Subsurface Drip Irrigation (SDI) for direct root zone irrigation",
      "Practice trash mulching with sugarcane leaves",
      "Ensure proper field leveling to prevent water pooling",
      "Implement skip-furrow irrigation during less critical stages"
    ],
    additionalNotes: "Consider intercropping with short-duration pulses to improve water use efficiency. Maintain proper drainage to prevent waterlogging."
  },
  {
    crop: "Cotton",
    waterRequirement: "700-1,300 mm per season",
    tips: [
      "Use sprinkler irrigation systems for better water distribution",
      "Focus irrigation during flowering and boll development",
      "Implement conservation tillage practices",
      "Apply deficit irrigation during vegetative growth"
    ],
    additionalNotes: "Avoid frequent shallow irrigations as they promote shallow root development. Consider plastic mulching in water-scarce regions."
  },
  {
    crop: "Pulses",
    waterRequirement: "250-500 mm per growth cycle",
    tips: [
      "Utilize residual soil moisture through proper timing of sowing",
      "Prioritize irrigation during flowering and pod development",
      "Add organic matter to improve soil water retention",
      "Practice intercropping with deep-rooted crops"
    ],
    additionalNotes: "Most pulses are drought-tolerant and suitable for rainfed farming. Consider raised bed planting in high rainfall areas."
  },
  {
    crop: "Oilseeds",
    waterRequirement: "350-450 mm per season",
    tips: [
      "Install sprinkler systems for uniform water distribution",
      "Focus irrigation on flowering and seed formation stages",
      "Apply gypsum to improve soil water infiltration",
      "Use ridge and furrow method for better moisture conservation"
    ],
    additionalNotes: "Different oilseeds have varying water requirements. Monitor soil moisture to prevent diseases like root rot."
  },
  {
    crop: "Millets",
    waterRequirement: "300-500 mm per season",
    tips: [
      "Implement rain-fed cultivation with supplemental irrigation",
      "Use ridge and furrow system for efficient water use",
      "Practice organic mulching to reduce evaporation",
      "Consider watershed management approaches"
    ],
    additionalNotes: "Millets are highly drought-tolerant and perfect for water-scarce regions. They can be grown with minimal irrigation support."
  }
];

export const generalWaterTips = [
  {
    title: "Rainwater Harvesting",
    details: "Implement farm ponds, check dams, and percolation tanks to capture and store rainwater. This can provide critical irrigation during dry spells and reduce dependence on groundwater.",
  },
  {
    title: "Micro-Irrigation Systems",
    details: "Install drip and sprinkler systems for precise water application. These systems can achieve water use efficiency of up to 90% compared to 40-50% in conventional irrigation methods.",
  },
  {
    title: "Soil Moisture Monitoring",
    details: "Use soil moisture sensors and tensiometers to determine exact irrigation needs. This prevents over-irrigation and helps maintain optimal soil moisture levels for crop growth.",
  },
  {
    title: "Conservation Agriculture",
    details: "Practice minimum tillage, maintain crop residue cover, and implement crop rotation to improve soil water retention and reduce evaporation losses.",
  },
  {
    title: "Climate-Smart Varieties",
    details: "Choose crop varieties bred specifically for water-use efficiency and drought tolerance. These varieties can maintain good yields even under water-stressed conditions.",
  }
];