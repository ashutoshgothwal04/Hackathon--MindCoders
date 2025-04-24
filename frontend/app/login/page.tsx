'use client';

import React, { useState } from 'react';
import { loginUser } from '@/services/userServices';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    setLoading(true);
    setMessage('');
    try {
      const data = await loginUser(formData); // assumes loginUser returns token or user data
      console.log('Logged in:', data);

      // ✅ Save token (if using JWT auth)
      if (data?.token) {
        localStorage.setItem('token', data.token);
      }

      setMessage('✅ Login successful!');
      // redirect or refresh state here if needed
    } catch (error: any) {
      console.error('Login failed:', error?.message || error);
      setMessage('❌ Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <div className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {message && <p className="text-center text-sm mt-2">{message}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
