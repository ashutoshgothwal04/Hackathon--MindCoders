'use client';

// path of this file NestQuest/app/register/page.tsx

import React, { useState } from 'react';
import { registerUser } from '@/services/userServices';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '', // fixed typo: was "useranme"
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    setLoading(true);
    setMessage('');
    try {
      const data = await registerUser({
        name: formData.fullName,
        email: formData.email,
        password: formData.password
      });
      console.log('Registered:', data);
      setMessage('🎉 Registration successful!');
    } catch (error: any) {
      console.error('Registration failed:', error?.message || error);
      setMessage('❌ Registration failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Register</h1>

      <div className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
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
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Registering...' : 'Register User'}
        </button>

        {message && <p className="text-center text-sm mt-2">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterPage;
