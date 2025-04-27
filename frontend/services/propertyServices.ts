// services/propertyServices.ts
import axiosInstance from '../utils/axiosInstance';

export interface Property {
  _id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  address: {
    flatNo: string;
    buildingName: string;
    colony: string;
    nearByLocation: string;
    city: string;
    state: string;
    pincode: string;
  };
  location: {
    type: string;
    coordinates: [number, number];
  };
  propertyType: 'residential' | 'commercial' | 'industrial' | 'agricultural' | 'land';
  propertySize: number;
  propertyAge?: number;
  propertyCondition: 'new' | 'good' | 'needs_repair' | 'under_construction';
  status: 'available' | 'pending' | 'sold';
  amenities: string[];
  seller: {
    _id: string;
    username: string;
    fullName: string;
    email: string;
  };
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PropertyFilters {
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface PropertyFormData {
  title: string;
  description: string;
  price: number;
  address: {
    flatNo: string;
    buildingName: string;
    colony: string;
    nearByLocation: string;
    city: string;
    state: string;
    pincode: string;
  };
  location: {
    type: string;
    coordinates: [number, number];
  };
  propertyType: 'residential' | 'commercial' | 'industrial' | 'agricultural' | 'land';
  propertySize: number;
  propertyAge?: number;
  propertyCondition: 'new' | 'good' | 'needs_repair' | 'under_construction';
  amenities: string[];
}

// Get all properties with optional filters
export const getAllProperties = async (filters?: PropertyFilters) => {
  try {
    const queryParams = new URLSearchParams();
    
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, String(value));
        }
      });
    }
    
    const response = await axiosInstance.get(`/properties?${queryParams.toString()}`);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching properties:', error?.response?.data || error.message);
    throw new Error(error?.response?.data?.message || 'Failed to fetch properties');
  }
};

// Get a property by ID
export const getPropertyById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/properties/${id}`);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching property:', error?.response?.data || error.message);
    throw new Error(error?.response?.data?.message || 'Failed to fetch property');
  }
};

// Create a new property
export const createProperty = async (propertyData: PropertyFormData, images: File[]) => {
  try {
    const formData = new FormData();
    
    // Append property data
    Object.entries(propertyData).forEach(([key, value]) => {
      if (key === 'address' || key === 'location') {
        formData.append(key, JSON.stringify(value));
      } else if (key === 'amenities') {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    });
    
    // Append images
    images.forEach((image) => {
      formData.append('images', image);
    });
    
    const response = await axiosInstance.post('/properties', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error: any) {
    console.error('Error creating property:', error?.response?.data || error.message);
    throw new Error(error?.response?.data?.message || 'Failed to create property');
  }
};

// Update a property
export const updateProperty = async (id: string, propertyData: Partial<PropertyFormData>, images?: File[]) => {
  try {
    const formData = new FormData();
    
    // Append property data
    Object.entries(propertyData).forEach(([key, value]) => {
      if (key === 'address' || key === 'location') {
        formData.append(key, JSON.stringify(value));
      } else if (key === 'amenities') {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    });
    
    // Append images if provided
    if (images && images.length > 0) {
      images.forEach((image) => {
        formData.append('images', image);
      });
    }
    
    const response = await axiosInstance.patch(`/properties/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error: any) {
    console.error('Error updating property:', error?.response?.data || error.message);
    throw new Error(error?.response?.data?.message || 'Failed to update property');
  }
};

// Delete a property
export const deleteProperty = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/properties/${id}`);
    return response.data;
  } catch (error: any) {
    console.error('Error deleting property:', error?.response?.data || error.message);
    throw new Error(error?.response?.data?.message || 'Failed to delete property');
  }
};

// Get properties by seller
export const getPropertiesBySeller = async (sellerId: string) => {
  try {
    const response = await axiosInstance.get(`/properties/seller/${sellerId}`);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching properties by seller:', error?.response?.data || error.message);
    throw new Error(error?.response?.data?.message || 'Failed to fetch properties by seller');
  }
};

// Search properties by location
export const searchPropertiesByLocation = async (longitude: number, latitude: number, maxDistance?: number) => {
  try {
    const queryParams = new URLSearchParams();
    queryParams.append('longitude', String(longitude));
    queryParams.append('latitude', String(latitude));
    
    if (maxDistance !== undefined) {
      queryParams.append('maxDistance', String(maxDistance));
    }
    
    const response = await axiosInstance.get(`/properties/search/location?${queryParams.toString()}`);
    return response.data;
  } catch (error: any) {
    console.error('Error searching properties by location:', error?.response?.data || error.message);
    throw new Error(error?.response?.data?.message || 'Failed to search properties by location');
  }
}; 