import React, { useState, useEffect } from 'react';
import { Droplet, ChevronDown, ChevronUp, Plus, Info } from 'lucide-react';
import { getStateTips, addTip, getStates } from '../services/api';
import { cropWaterTips, generalWaterTips } from '../data/waterManagementTips';

interface Tip {
  id: number;
  tip: string;
  added_by: string;
  state_name: string;
  created_at: string;
  details?: string;
}

export default function WaterSavingTips() {
  const [tips, setTips] = useState<Tip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedTipId, setExpandedTipId] = useState<number | null>(null);
  const [showAddTipForm, setShowAddTipForm] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);
  const [newTip, setNewTip] = useState({
    state_id: '',
    tip: '',
    added_by: '',
    details: ''
  });
  const [states, setStates] = useState<Array<{ id: number; name: string }>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tipsData, statesData] = await Promise.all([
          getStateTips(0),
          getStates()
        ]);
        setTips(tipsData);
        setStates(statesData);
      } catch (error) {
        setError('Failed to load data');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await addTip(newTip);
      setTips(prevTips => [response, ...prevTips]);
      setShowAddTipForm(false);
      setNewTip({ state_id: '', tip: '', added_by: '', details: '' });
    } catch (error) {
      console.error('Error adding tip:', error);
    }
  };

  const toggleTip = (tipId: number) => {
    setExpandedTipId(expandedTipId === tipId ? null : tipId);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-blue-50 p-6 rounded-xl">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Water Saving Tips</h2>
            <p className="text-gray-600">Expert recommendations for water conservation in agriculture across India</p>
          </div>
          <button
            onClick={() => setShowAddTipForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Plus className="h-5 w-5" />
            Add New Tip
          </button>
        </div>
      </div>

      {/* Crop-specific Water Management Section */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-4">Crop-Specific Water Management</h3>
        <div className="grid gap-4">
          {cropWaterTips.map((cropTip) => (
            <div
              key={cropTip.crop}
              className={`p-4 rounded-lg border transition-colors ${
                selectedCrop === cropTip.crop
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => setSelectedCrop(selectedCrop === cropTip.crop ? null : cropTip.crop)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className="text-lg font-semibold">{cropTip.crop}</h4>
                <Info className="h-5 w-5 text-blue-500" />
              </div>
              
              {selectedCrop === cropTip.crop && (
                <div className="mt-4 space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-medium text-blue-600">Water Requirement:</p>
                    <p className="mt-1">{cropTip.waterRequirement}</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-blue-600">Management Tips:</p>
                    <ul className="mt-2 space-y-2">
                      {cropTip.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="font-medium text-yellow-800">Additional Notes:</p>
                    <p className="mt-1 text-yellow-900">{cropTip.additionalNotes}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* General Water Management Tips */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-4">General Water Management Practices</h3>
        <div className="grid gap-4">
          {generalWaterTips.map((tip, index) => (
            <div key={index} className="p-4 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-blue-600">{tip.title}</h4>
              <p className="mt-2 text-gray-700">{tip.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Community Tips Section */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-4">Community Tips</h3>
        <div className="grid gap-6">
          {tips.map((tip) => (
            <div key={tip.id} className="p-4 rounded-lg border border-gray-200">
              <div 
                className="flex items-start cursor-pointer"
                onClick={() => toggleTip(tip.id)}
              >
                <Droplet className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0 mt-1" />
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      {tip.state_name}
                    </span>
                    {expandedTipId === tip.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                  <p className="text-gray-800 mb-2">{tip.tip}</p>
                  {expandedTipId === tip.id && tip.details && (
                    <div className="mt-4 pl-4 border-l-2 border-blue-200">
                      <p className="text-gray-600">{tip.details}</p>
                    </div>
                  )}
                  <div className="text-sm text-gray-500 mt-2">
                    <p>Added by: {tip.added_by}</p>
                    <p>Date: {new Date(tip.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add New Tip Form */}
      {showAddTipForm && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4">Add New Water Saving Tip</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <select
                value={newTip.state_id}
                onChange={(e) => setNewTip({ ...newTip, state_id: e.target.value })}
                className="w-full p-2 border rounded-lg"
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
                Tip Title
              </label>
              <input
                type="text"
                value={newTip.tip}
                onChange={(e) => setNewTip({ ...newTip, tip: e.target.value })}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Description
              </label>
              <textarea
                value={newTip.details}
                onChange={(e) => setNewTip({ ...newTip, details: e.target.value })}
                className="w-full p-2 border rounded-lg h-32"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={newTip.added_by}
                onChange={(e) => setNewTip({ ...newTip, added_by: e.target.value })}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Submit Tip
              </button>
              <button
                type="button"
                onClick={() => setShowAddTipForm(false)}
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}