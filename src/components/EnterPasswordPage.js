import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Typing from './Typing';
import { useAuth } from '../context/AuthContext';

const EnterPasswordPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password.trim()) {
      toast.error('Please enter your password');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || 'Invalid email or password');
        return;
      }

      login();
      toast.success('Login successful!');
      navigate('/account');
    } catch (error) {
      toast.error('Network error. Please check your connection and try again.');
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center px-4 sm:px-6 py-12">
        <motion.div
          className="w-full max-w-md text-center"
          variants={sectionVariants}
        >
          <img
            src="/images/logo.png"
            alt="EasyEats Logo"
            className="h-12 object-contain mb-8 mx-auto"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back!</h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8">
            Log back into your EasyEats account.
          </p>
          <form onSubmit={handleSubmit} className="w-full mb-8">
            <input
              type="email"
              value={email}
              readOnly
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-800 bg-gray-100 cursor-not-allowed mb-4"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 placeholder-gray-400"
            />
            <button
              type="submit"
              className="mt-4 w-full bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors font-medium"
            >
              Login
            </button>
          </form>
          <p className="text-gray-600 text-sm mb-8">
            Forgot your password?{' '}
            <a href="/help" className="text-blue-600 underline hover:text-blue-700">
              Get help
            </a>.
          </p>
          <p className="text-gray-600 text-sm mb-8">
            For further support, you may visit the{' '}
            <a href="/help" className="text-blue-600 underline hover:text-blue-700">
              Help Center
            </a>{' '}
            or contact our{' '}
            <a href="mailto:support@easyeats.com" className="text-blue-600 underline hover:text-blue-700">
              customer service team
            </a>.
          </p>
          <img
            src="/images/logo.png"
            alt="EasyEats Logo"
            className="h-6 object-contain mx-auto"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EnterPasswordPage;
