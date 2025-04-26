export const regions = {
  "Andhra Pradesh": {
    rainfall: 912,
    groundwater: "moderate",
    crops: [
      { name: "rice", waterRequirement: 1200, profitPerAcre: 45000 },
      { name: "cotton", waterRequirement: 550, profitPerAcre: 35000 },
      { name: "sugarcane", waterRequirement: 1800, profitPerAcre: 55000 },
      { name: "groundnut", waterRequirement: 450, profitPerAcre: 30000 }
    ]
  },
  "Punjab": {
    rainfall: 649,
    groundwater: "high",
    crops: [
      { name: "wheat", waterRequirement: 400, profitPerAcre: 40000 },
      { name: "rice", waterRequirement: 1200, profitPerAcre: 48000 },
      { name: "cotton", waterRequirement: 550, profitPerAcre: 38000 },
      { name: "maize", waterRequirement: 500, profitPerAcre: 35000 }
    ]
  },
  "Maharashtra": {
    rainfall: 2500,
    groundwater: "moderate",
    crops: [
      { name: "cotton", waterRequirement: 550, profitPerAcre: 42000 },
      { name: "soybean", waterRequirement: 450, profitPerAcre: 35000 },
      { name: "sugarcane", waterRequirement: 1800, profitPerAcre: 60000 },
      { name: "jowar", waterRequirement: 350, profitPerAcre: 25000 }
    ]
  },
  "Karnataka": {
    rainfall: 1248,
    groundwater: "low",
    crops: [
      { name: "ragi", waterRequirement: 400, profitPerAcre: 28000 },
      { name: "maize", waterRequirement: 500, profitPerAcre: 32000 },
      { name: "pulses", waterRequirement: 300, profitPerAcre: 25000 },
      { name: "cotton", waterRequirement: 550, profitPerAcre: 40000 }
    ]
  },
  "Gujarat": {
    rainfall: 850,
    groundwater: "moderate",
    crops: [
      { name: "cotton", waterRequirement: 550, profitPerAcre: 45000 },
      { name: "groundnut", waterRequirement: 450, profitPerAcre: 32000 },
      { name: "wheat", waterRequirement: 400, profitPerAcre: 35000 },
      { name: "castor", waterRequirement: 300, profitPerAcre: 28000 }
    ]
  }
};