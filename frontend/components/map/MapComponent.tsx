'use client';

import { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { Property } from '@/services/propertyServices';
import { getAllProperties } from '@/services/propertyServices';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { IndianRupee } from 'lucide-react';
import { useRouter } from 'next/navigation';
import './MapComponent.css';
import styles from './MapComponent.module.css';

// Dynamically import Leaflet components with no SSR
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

// Import Leaflet CSS
import 'leaflet/dist/leaflet.css';

// Initialize Leaflet only on client side
let L: any;
if (typeof window !== 'undefined') {
  L = require('leaflet');
  
  // Fix Leaflet's default icon issue
  const DefaultIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [12, 41]
  });

  // Set the default icon for all markers
  L.Marker.prototype.options.icon = DefaultIcon;
}

interface MapComponentProps {
  onLocationSelect?: (location: { lat: number; lng: number; address: string }) => void;
  initialLocation?: { lat: number; lng: number };
  height?: string;
}

interface SearchResult {
  lat: string;
  lon: string;
  display_name: string;
  type: string;
}

interface NearbyPlace {
  lat: number;
  lng: number;
  name: string;
  type: string;
  property?: Property;
}

// Create a separate component for the search control that uses the map context
const SearchControlComponent = ({ 
  onLocationSelect,
  onNearbyPlacesChange 
}: { 
  onLocationSelect?: MapComponentProps['onLocationSelect'];
  onNearbyPlacesChange: (places: NearbyPlace[]) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  
  // Import useMap directly in the component
  const { useMap } = require('react-leaflet');
  const map = useMap();

  const fetchNearbyPlaces = async (lat: number, lon: number) => {
    try {
      // Fetch properties from the API
      const response = await getAllProperties({
        page: 1,
        limit: 10,
        sortBy: 'createdAt',
        sortOrder: 'desc'
      });

      // Generate random points around the main location
      const places = Array.from({ length: 10 }, (_, index) => {
        // Generate random offset between -0.01 and 0.01 degrees (roughly 1km)
        const latOffset = (Math.random() - 0.5) * 0.02;
        const lonOffset = (Math.random() - 0.5) * 0.02;
        
        // Get a random property from the fetched properties
        const randomProperty = response.properties[Math.floor(Math.random() * response.properties.length)];
        
        return {
          lat: lat + latOffset,
          lng: lon + lonOffset,
          name: `Property ${index + 1}`,
          type: 'property',
          property: randomProperty
        };
      });

      onNearbyPlacesChange(places);
    } catch (error) {
      console.error('Error generating random points:', error);
      onNearbyPlacesChange([]);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setSearchResults([]);
    onNearbyPlacesChange([]);
    
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=5`
      );
      const data = await response.json();
      
      if (!Array.isArray(data) || data.length === 0) {
        toast.error('No locations found');
        return;
      }
      
      setSearchResults(data);
      const { lat, lon, display_name } = data[0];
      const location = { lat: parseFloat(lat), lng: parseFloat(lon), address: display_name };
      
      map.setView([location.lat, location.lng], 13);
      if (onLocationSelect) {
        onLocationSelect(location);
      }
      
      await fetchNearbyPlaces(location.lat, location.lng);
    } catch (error) {
      console.error('Error searching location:', error);
      toast.error('Failed to search location');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className={styles.searchControl}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search location..."
        className={styles.searchInput}
      />
      <button onClick={handleSearch} className={styles.searchButton} disabled={isSearching}>
        {isSearching ? 'Searching...' : 'Search'}
      </button>
      {searchResults.length > 0 && (
        <div className={styles.searchResults}>
          {searchResults.map((result) => (
            <div
              key={result.place_id}
              className={styles.searchResult}
              onClick={() => {
                const location = { 
                  lat: parseFloat(result.lat), 
                  lng: parseFloat(result.lon), 
                  address: result.display_name 
                };
                map.setView([location.lat, location.lng], 13);
                if (onLocationSelect) {
                  onLocationSelect(location);
                }
              }}
            >
              {result.display_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Wrap the component with dynamic import
const SearchControl = dynamic(() => Promise.resolve(SearchControlComponent), { ssr: false });

// Add custom popup styles
const popupStyles = `
  .custom-popup .leaflet-popup-content-wrapper {
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  .custom-popup .leaflet-popup-content {
    margin: 0;
    width: 250px !important;
  }
  .custom-popup .leaflet-popup-tip {
    background: white;
  }
`;

export default function MapComponent({ onLocationSelect, initialLocation, height = '400px' }: MapComponentProps) {
  const [position, setPosition] = useState(
    initialLocation || { lat: 20.5937, lng: 78.9629 }
  );
  const [isClient, setIsClient] = useState(false);
  const [nearbyPlaces, setNearbyPlaces] = useState<NearbyPlace[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const router = useRouter();

  // Handle location updates
  const handleLocationUpdate = (location: { lat: number; lng: number; address: string }) => {
    setPosition({ lat: location.lat, lng: location.lng });
    if (onLocationSelect) {
      onLocationSelect(location);
    }
  };

  useEffect(() => {
    setIsClient(true);
    // Get user's location on component mount
    if (!initialLocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const location = { 
            lat: pos.coords.latitude, 
            lng: pos.coords.longitude,
            address: 'Current Location'
          };
          handleLocationUpdate(location);
        },
        (error) => {
          console.error('Error getting location:', error);
          toast.error('Failed to get your location');
        }
      );
    }
  }, [initialLocation]);

  useEffect(() => {
    // Add custom styles to the document
    const styleElement = document.createElement('style');
    styleElement.textContent = popupStyles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const handlePropertyClick = (propertyId: string) => {
    router.push(`/properties/${propertyId}`);
  };

  if (!isClient) {
    return (
      <div className="w-full h-full bg-gray-100 animate-pulse rounded-lg" />
    );
  }

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={[position.lat, position.lng]}
        zoom={13}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[position.lat, position.lng]}>
          <Popup>
            <div>
              <p className="font-medium">Selected Location</p>
              <p className="text-sm text-gray-500">Main marker</p>
            </div>
          </Popup>
        </Marker>
        {nearbyPlaces.map((place, index) => (
          <Marker 
            key={index}
            position={[place.lat, place.lng]}
            eventHandlers={{
              click: (e) => {
                if (place.property) {
                  setSelectedProperty(place.property);
                }
              }
            }}
          />
        ))}
        <SearchControl 
          onLocationSelect={handleLocationUpdate} 
          onNearbyPlacesChange={setNearbyPlaces}
        />
      </MapContainer>

      {/* Property Card */}
      {selectedProperty && (
        <div className={styles.propertyHoverCard}>
          <div className="cursor-pointer" onClick={() => handlePropertyClick(selectedProperty._id)}>
            {selectedProperty.images && selectedProperty.images[0] && (
              <div className="relative w-full h-32 mb-2 rounded-md overflow-hidden">
                <img
                  src={selectedProperty.images[0]}
                  alt={selectedProperty.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <h3 className="font-semibold text-sm mb-1 line-clamp-1">{selectedProperty.title}</h3>
            <div className="flex items-center gap-2 mb-2">
              <IndianRupee className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">{selectedProperty.price.toLocaleString()}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {selectedProperty.amenities?.slice(0, 3).map((amenity, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {amenity}
                </Badge>
              ))}
            </div>
            <Button 
              className="w-full mt-2" 
              onClick={() => handlePropertyClick(selectedProperty._id)}
            >
              View Details
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 