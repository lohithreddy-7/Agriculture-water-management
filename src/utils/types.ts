export interface RegionData {
  rainfall: number;
  groundwater: 'high' | 'moderate' | 'low';
  crops: CropInfo[];
}

export interface CropInfo {
  name: string;
  waterRequirement: number;
  profitPerAcre: number;
  efficiency?: number;
}

export interface CropAnalysisResult {
  waterRequired: number;
  waterAvailability: string;
  rainfall: number;
  profitEstimate: number;
  tips: string[];
  recommendedCrops: CropInfo[];
}

export interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ComponentType<any>;
  trend?: number;
  color?: string;
}