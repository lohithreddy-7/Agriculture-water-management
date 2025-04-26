import React from 'react';
import { Droplets, Leaf, LineChart, Info, CloudRain, Sprout, Globe, Sun, Waves } from 'lucide-react';

const stats = [
  {
    icon: CloudRain,
    value: '70%',
    label: 'of global freshwater',
    description: 'is used for agriculture'
  },
  {
    icon: Sprout,
    value: '2x',
    label: 'water demand',
    description: 'expected by 2050'
  },
  {
    icon: Droplets,
    value: '15-35%',
    label: 'water savings',
    description: 'possible with efficient irrigation'
  }
];

const challenges = [
  {
    icon: Sun,
    title: 'Climate Change Impact',
    description: 'Rising temperatures and irregular rainfall patterns affect crop yields and water availability.'
  },
  {
    icon: Globe,
    title: 'Population Growth',
    description: 'Increasing global population demands more food production with limited water resources.'
  },
  {
    icon: Waves,
    title: 'Water Scarcity',
    description: 'Many agricultural regions face severe water stress and depleting groundwater levels.'
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-3xl p-12 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Sustainable Water Resource Management</h1>
          <p className="text-xl text-primary-100 mb-8">
            Empowering farmers with smart water management solutions for sustainable agriculture and food security
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Learn More
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <stat.icon className="h-12 w-12 text-primary-500 mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-lg font-medium text-gray-600 mb-1">{stat.label}</div>
            <div className="text-gray-500">{stat.description}</div>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="bg-primary-50 rounded-3xl p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Mission</h2>
          <p className="text-lg text-primary-700 mb-8">
            We are committed to revolutionizing agricultural water management through innovative technology and sustainable practices. 
            Our platform helps farmers optimize water usage, increase crop yields, and contribute to global food security.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <challenge.icon className="h-10 w-10 text-primary-500 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Information Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-water-50 p-8 rounded-xl">
          <h3 className="text-xl font-bold text-water-800 mb-4 flex items-center gap-2">
            <Info className="h-5 w-5" />
            The Importance of Water in Agriculture
          </h3>
          <p className="text-water-700 mb-6">
            Water is the lifeline of agriculture, playing a crucial role in food production and global food security. 
            As climate change intensifies and population grows, efficient water management becomes increasingly vital 
            for sustainable farming practices.
          </p>
          <ul className="space-y-4 text-water-600">
            <li className="flex items-start gap-3">
              <Droplets className="h-5 w-5 mt-1" />
              <div>
                <span className="font-semibold">Crop Growth:</span> Water is essential for photosynthesis, nutrient transport, and maintaining plant structure
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Leaf className="h-5 w-5 mt-1" />
              <div>
                <span className="font-semibold">Soil Health:</span> Proper irrigation helps maintain soil moisture and supports beneficial microorganisms
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CloudRain className="h-5 w-5 mt-1" />
              <div>
                <span className="font-semibold">Climate Resilience:</span> Efficient water management helps crops withstand weather extremes
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-primary-50 p-8 rounded-xl">
          <h3 className="text-xl font-bold text-primary-800 mb-4 flex items-center gap-2">
            <Sprout className="h-5 w-5" />
            Sustainable Agriculture Practices
          </h3>
          <p className="text-primary-700 mb-6">
            Modern agriculture requires a balance between productivity and sustainability. Our platform promotes smart 
            farming techniques that optimize water usage while maintaining high crop yields and soil health.
          </p>
          <ul className="space-y-4 text-primary-600">
            <li className="flex items-start gap-3">
              <LineChart className="h-5 w-5 mt-1" />
              <div>
                <span className="font-semibold">Data-Driven Decisions:</span> Use real-time monitoring and analytics to optimize irrigation schedules
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Leaf className="h-5 w-5 mt-1" />
              <div>
                <span className="font-semibold">Precision Agriculture:</span> Implement targeted irrigation systems for efficient water distribution
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Info className="h-5 w-5 mt-1" />
              <div>
                <span className="font-semibold">Best Practices:</span> Access expert recommendations for crop-specific water management
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}