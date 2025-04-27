// services/userServices.ts
import axiosInstance from '../utils/axiosInstance';

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

export const registerUser = async (payload: RegisterPayload) => {
  try {
    const response = await axiosInstance.post('/register', payload);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (payload: LoginPayload) => {
  try {
    const response = await axiosInstance.post('/login', payload, {
      withCredentials: true, // send cookies if backend uses them
    });
    return response.data;
  } catch (error: any) {
    console.error('Error logging in:', error?.response?.data || error.message);
    throw new Error(error?.response?.data?.message || 'Login failed');
  }
};
