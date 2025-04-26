// context/PropertyContext.tsx
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import {
  Property,
  PropertyFilters,
  PropertyFormData,
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
  getPropertiesBySeller,
  searchPropertiesByLocation,
} from '../services/propertyServices';
import { useAuth } from './AuthContext';

interface PropertyContextType {
  properties: Property[];
  currentProperty: Property | null;
  loading: boolean;
  error: string | null;
  filters: PropertyFilters;
  setFilters: (filters: PropertyFilters) => void;
  fetchProperties: () => Promise<void>;
  fetchPropertyById: (id: string) => Promise<void>;
  addProperty: (propertyData: PropertyFormData, images: File[]) => Promise<void>;
  editProperty: (id: string, propertyData: Partial<PropertyFormData>, images?: File[]) => Promise<void>;
  removeProperty: (id: string) => Promise<void>;
  fetchPropertiesBySeller: (sellerId: string) => Promise<void>;
  searchByLocation: (longitude: number, latitude: number, maxDistance?: number) => Promise<void>;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const useProperty = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('useProperty must be used within a PropertyProvider');
  }
  return context;
};

interface PropertyProviderProps {
  children: ReactNode;
}

export const PropertyProvider: React.FC<PropertyProviderProps> = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();
  const [properties, setProperties] = useState<Property[]>([]);
  const [currentProperty, setCurrentProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<PropertyFilters>({
    page: 1,
    limit: 10,
    sortBy: 'createdAt',
    sortOrder: 'desc',
  });

  const fetchProperties = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllProperties(filters);
      setProperties(data.properties);
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const fetchPropertyById = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getPropertyById(id);
      setCurrentProperty(data.property);
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addProperty = useCallback(async (propertyData: PropertyFormData, images: File[]) => {
    try {
      setLoading(true);
      setError(null);
      const data = await createProperty(propertyData, images);
      setProperties((prev) => [data.property, ...prev]);
      toast.success('Property created successfully');
      router.push(`/properties/${data.property._id}`);
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, [router]);

  const editProperty = useCallback(async (id: string, propertyData: Partial<PropertyFormData>, images?: File[]) => {
    try {
      setLoading(true);
      setError(null);
      const data = await updateProperty(id, propertyData, images);
      setProperties((prev) =>
        prev.map((property) => (property._id === id ? data.property : property))
      );
      setCurrentProperty(data.property);
      toast.success('Property updated successfully');
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const removeProperty = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      await deleteProperty(id);
      setProperties((prev) => prev.filter((property) => property._id !== id));
      if (currentProperty?._id === id) {
        setCurrentProperty(null);
      }
      toast.success('Property deleted successfully');
      router.push('/properties');
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, [currentProperty, router]);

  const fetchPropertiesBySeller = useCallback(async (sellerId: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getPropertiesBySeller(sellerId);
      setProperties(data.properties);
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const searchByLocation = useCallback(async (longitude: number, latitude: number, maxDistance?: number) => {
    try {
      setLoading(true);
      setError(null);
      const data = await searchPropertiesByLocation(longitude, latitude, maxDistance);
      setProperties(data.properties);
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    properties,
    currentProperty,
    loading,
    error,
    filters,
    setFilters,
    fetchProperties,
    fetchPropertyById,
    addProperty,
    editProperty,
    removeProperty,
    fetchPropertiesBySeller,
    searchByLocation,
  };

  return <PropertyContext.Provider value={value}>{children}</PropertyContext.Provider>;
}; 