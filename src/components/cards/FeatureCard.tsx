import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  to: string;
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

export default function FeatureCard({ to, icon: Icon, title, description, iconColor }: FeatureCardProps) {
  return (
    <Link to={to} className="block group">
      <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-lg">
        <div className="bg-primary-50 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
          <Icon className={`h-8 w-8 ${iconColor}`} />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}