import axios from 'axios';

// Make sure there's no trailing slash in the API URL
const API_URL = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000').replace(/\/$/, '');

export const testAPI = async () => {
  try {
    // Test health endpoint
    console.log(`Testing health endpoint: ${API_URL}/api/health`);
    const healthResponse = await axios.get(`${API_URL}/api/health`);
    console.log('Health check response:', healthResponse.data);

    // Test payment endpoints
    try {
      console.log(`Testing payment intent endpoint: ${API_URL}/api/v1/payments/create-payment-intent`);
      const paymentIntentResponse = await axios.post(`${API_URL}/api/v1/payments/create-payment-intent`, {
        amount: 1000,
        currency: 'inr',
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log('Payment intent response:', paymentIntentResponse.data);
    } catch (error) {
      console.error('Error testing payment intent endpoint:', error);
    }

    try {
      console.log(`Testing UPI payment endpoint: ${API_URL}/api/v1/payments/create-upi-payment`);
      const upiPaymentResponse = await axios.post(`${API_URL}/api/v1/payments/create-upi-payment`, {
        amount: 1000,
        currency: 'inr',
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log('UPI payment response:', upiPaymentResponse.data);
    } catch (error) {
      console.error('Error testing UPI payment endpoint:', error);
    }

    return true;
  } catch (error) {
    console.error('Error testing API:', error);
    return false;
  }
}; 