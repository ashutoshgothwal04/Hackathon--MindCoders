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

interface ChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
}

interface UpdateAccountPayload {
  fullName: string;
  email: string;
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

export const getCurrentUser = async () => {
  try {
    const response = await axiosInstance.get('/users/current-user');
    return response.data;
  } catch (error: any) {
    console.error('Error fetching user profile:', error?.response?.data || error.message);
    throw new Error(error?.response?.data?.message || 'Failed to fetch user profile');
  }
};

export const changePassword = async (payload: ChangePasswordPayload) => {
  try {
    const response = await axiosInstance.post('/users/change-password', payload);
    return response.data;
  } catch (error: any) {
    console.error('Error changing password:', error?.response?.data || error.message);
    throw new Error(error?.response?.data?.message || 'Failed to change password');
  }
};

export const updateAccountDetails = async (payload: UpdateAccountPayload) => {
  try {
    const response = await axiosInstance.post('/users/update-account-details', payload);
    return response.data;
  } catch (error: any) {
    console.error('Error updating account details:', error?.response?.data || error.message);
    throw new Error(error?.response?.data?.message || 'Failed to update account details');
  }
};

export const updateProfilePicture = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('avatar', file);
    
    const response = await axiosInstance.post('/users/update-profile-picture', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error: any) {
    console.error('Error updating profile picture:', error?.response?.data || error.message);
    throw new Error(error?.response?.data?.message || 'Failed to update profile picture');
  }
};
