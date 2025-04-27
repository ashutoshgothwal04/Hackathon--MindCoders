import React from 'react';
import { Button } from '../ui/button';
import { howItWorksData } from './Data/Data';

const HowItWorksItem = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="text-center">
    <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
      <Icon className="h-10 w-10 text-blue-600" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

export default function Hero() {
  return (
    <div>
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Virtual Property Tours</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Experience properties from anywhere with our immersive 3D virtual tours
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-blue-600 dark:text-white hover:bg-blue-700">Browse VR Properties</Button>
          <Button variant="outline">How It Works</Button>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white dark:bg-bg-color rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">How Virtual Tours Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorksData.map((item, index) => (
            <HowItWorksItem key={index} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
}
