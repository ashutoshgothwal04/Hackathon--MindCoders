import axios from 'axios';

// Make sure there's no trailing slash in the API URL
const API_URL = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000').replace(/\/$/, '');

export interface PaymentIntent {
  clientSecret: string;
}

export interface UPIPaymentLink {
  paymentUrl: string;
}

export interface Payment {
  _id: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export const paymentService = {
  async getPaymentHistory() {
    try {
      const response = await axios.get(`${API_URL}/api/v1/payments/history`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching payment history:', error);
      throw error;
    }
  },

  async createPaymentIntent(amount: number, currency: string = 'inr') {
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/payments/create-payment-intent`,
        { amount, currency },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error creating payment intent:', error);
      throw error;
    }
  },

  async createUPIPaymentLink(amount: number, currency: string = 'inr') {
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/payments/create-upi-payment`,
        { amount, currency },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error creating UPI payment link:', error);
      throw error;
    }
  }
}; 