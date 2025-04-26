import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export interface LoginCredentials {
  email?: string;
  username?: string;
  password: string;
}

export interface RegisterCredentials {
  fullName: string;
  email: string;
  username: string;
  password: string;
  phone: string;
}

export interface AuthResponse {
  success: boolean;
  msg: string;
  user?: any;
  accessToken?: string;
  refreshToken?: string;
}

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  try {
    const response = await api.post('/users/login', credentials);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.msg || 'Login failed');
  }
};

export const register = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
  try {
    const response = await api.post('/users/register', credentials);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.msg || 'Registration failed');
  }
};

export const logout = async (): Promise<AuthResponse> => {
  try {
    const response = await api.post('/users/logout');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.msg || 'Logout failed');
  }
};6

export const refreshToken = async (): Promise<AuthResponse> => {
  try {
    const response = await api.post('/users/refresh-token');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.msg || 'Token refresh failed');
  }
}; 