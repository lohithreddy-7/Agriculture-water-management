import React, { useState, useEffect, useRef } from 'react';
import { Droplets, Leaf, CloudRain, TrendingUp } from 'lucide-react';
import { getStates, getStateCrops, analyzeCrop } from '../services/api';
import type { CropAnalysisResult } from '../utils/types';
import DashboardCard from '../components/DashboardCard';
import WaterLevelChart from '../components/WaterLevelChart';
import { generalWaterTips } from '../data/waterManagementTips';

export default function CropAnalysis() {
  const [states, setStates] = useState<Array<{ id: number; name: string }>>([]);
  const [crops, setCrops] = useState<Array<{ id: number; name: string }>>([]);
  const [formData, setFormData] = useState({
    stateId: '',
    cropId: '',
    area: ''
  });
  const [analysis, setAnalysis] = useState<CropAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const analysisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const data = await getStates();
        setStates(data);
      } catch (err) {
        setError('Failed to load states');
        console.error('Error fetching states:', err);
      }
    };
    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCrops = async () => {
      if (formData.stateId) {
        try {
          const data = await getStateCrops(Number(formData.stateId));
          setCrops(data);
        } catch (err) {
          setError('Failed to load crops');
          console.error('Error fetching crops:', err);
        }
      } else {
        setCrops([]);
      }
    };
    fetchCrops();
  }, [formData.stateId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await analyzeCrop({
        stateId: Number(formData.stateId),
        cropId: Number(formData.cropId),
        area: Number(formData.area)
      });
      setAnalysis(result);
      analysisRef.current?.scrollIntoView({ behavior: 'smooth' });
    } catch (err) {
      setError('Failed to analyze crop data');
      console.error('Error analyzing crop:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-3xl font-bold mb-4">Water Resource Analysis</h2>
        <p className="text-gray-600">Get personalized water management recommendations based on your location and crop type.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State
            </label>
            <select
              name="stateId"
              className="w-full p-2 border rounded-lg"
              value={formData.stateId}
              onChange={handleInputChange}
              required
            >
              <option value="">Select state</option>
              {states.map((state) => (
                <option key={state.id} value={state.id}>{state.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Crop Type
            </label>
            <select
              name="cropId"
              className="w-full p-2 border rounded-lg"
              value={formData.cropId}
              onChange={handleInputChange}
              required
              disabled={!formData.stateId}
            >
              <option value="">Select a crop</option>
              {crops.map((crop) => (
                <option key={crop.id} value={crop.id}>{crop.name}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Area (in acres)
            </label>
            <input
              type="number"
              name="area"
              className="w-full p-2 border rounded-lg"
              value={formData.area}
              onChange={handleInputChange}
              required
              min="0.1"
              step="0.1"
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Analyzing...' : 'Analyze Water Requirements'}
        </button>

        {error && (
          <p className="mt-4 text-red-600">{error}</p>
        )}
      </form>

      {analysis && (
        <div ref={analysisRef} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DashboardCard
              title="Water Requirement"
              value={`${analysis.waterRequired} ML`}
              icon={Droplets}
              color="blue"
            />
            <DashboardCard
              title="Water Availability"
              value={analysis.waterAvailability}
              icon={CloudRain}
              color="blue"
            />
            <DashboardCard
              title="Estimated Profit"
              value={`₹${analysis.profitEstimate}`}
              icon={TrendingUp}
              color="green"
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Water Management Tips</h3>
            <div className="grid gap-6">
              {analysis.tips.slice(0, 3).map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <Leaf className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800">{tip}</p>
                    {generalWaterTips[index] && (
                      <p className="mt-2 text-sm text-gray-600">{generalWaterTips[index].details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Recommended Crops</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Water Required (ML/acre)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profit per Acre (₹)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Efficiency Score</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {analysis.recommendedCrops.map((crop, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap capitalize">{crop.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{crop.waterRequirement}</td>
                      <td className="px-6 py-4 whitespace-nowrap">₹{crop.profitPerAcre}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{(crop.efficiency || 0).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}