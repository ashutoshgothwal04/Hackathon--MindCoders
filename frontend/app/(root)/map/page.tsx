'use client';

import dynamic from 'next/dynamic';

const MapComponent = dynamic(
  () => import('@/components/map/MapComponent'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[80vh] bg-gray-100 animate-pulse rounded-lg" />
    )
  }
);

export default function MapPage() {
  return (
    <div className="container  mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Find Properties Near You</h1>
      <div className="w-full h-[70vh] overflow-hidden shadow-lg">
        <MapComponent />
      </div>
    </div>
  );
} 