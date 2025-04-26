import React from 'react';
import { Droplets, AlertTriangle, Gauge } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';
import WaterLevelChart from '../components/WaterLevelChart';

export default function DamMonitor() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Dam Infrastructure Monitor</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Current Water Level"
          value="140m"
          icon={Droplets}
          trend={5}
          color="blue"
        />
        <DashboardCard
          title="Storage Capacity"
          value="85%"
          icon={Gauge}
          trend={-2}
          color="green"
        />
        <DashboardCard
          title="Safety Status"
          value="Normal"
          icon={AlertTriangle}
          color="yellow"
        />
      </div>

      <div className="mt-8">
        <WaterLevelChart />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md mt-6">
        <h3 className="text-lg font-semibold mb-4">Infrastructure Status</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">Dam Wall Integrity</span>
            <span className="text-green-600">Excellent</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">Spillway Condition</span>
            <span className="text-green-600">Good</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">Gate Operations</span>
            <span className="text-green-600">Normal</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">Seepage Monitoring</span>
            <span className="text-yellow-600">Moderate</span>
          </div>
        </div>
      </div>
    </div>
  );
}