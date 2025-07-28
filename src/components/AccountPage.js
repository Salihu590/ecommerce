import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const AccountPage = () => {
  
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  
  const [orders, setOrders] = useState([]);

  
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
    setEmail(savedProfile.email || '');
    setPhone(savedProfile.phone || '');
    setAddress(savedProfile.address || '');

    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  
  const handleSaveProfile = () => {
    const profile = { email, phone, address };
    localStorage.setItem('userProfile', JSON.stringify(profile));
    alert('Profile updated successfully!');
  };

  // ✅ Cancel Order (only if status = "Processing")
  const handleCancelOrder = (orderId) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: 'Cancelled' } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-blue-100 flex flex-col"
    >
      <Header isLoggedIn={true} />

      <motion.div
        className="w-full px-6 py-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Account</h2>

        {/* ✅ Profile Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 w-full">
          <h3 className="text-xl font-semibold mb-4">Profile Information</h3>

          <div className="space-y-4">
            {/* Email (Editable) */}
            <div>
              <label className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-lg"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block font-semibold mb-2">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border rounded-lg"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block font-semibold mb-2">Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-3 border rounded-lg"
                placeholder="Enter your address"
              ></textarea>
            </div>

            <button
              onClick={handleSaveProfile}
              className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Save Profile
            </button>
          </div>
        </div>

        {/* ✅ My Orders Section */}
        <div className="bg-white rounded-xl shadow-md p-6 w-full">
          <h3 className="text-xl font-semibold mb-4">My Orders</h3>

          {orders.length === 0 ? (
            <p className="text-gray-500">You have no orders yet.</p>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border rounded-lg p-4 flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">Order ID: {order.id}</p>
                    <p className="text-gray-600 text-sm">Date: {order.date}</p>
                    <p className="text-gray-600 text-sm">Items: {order.items.join(', ')}</p>
                    <p className="text-gray-600 text-sm">Total: ₦{order.total}</p>
                    <p
                      className={`font-semibold ${
                        order.status === 'Cancelled'
                          ? 'text-red-500'
                          : order.status === 'Delivered'
                          ? 'text-green-600'
                          : 'text-yellow-600'
                      }`}
                    >
                      Status: {order.status}
                    </p>
                  </div>

                  {/* Cancel button only if status = Processing */}
                  {order.status === 'Processing' && (
                    <button
                      onClick={() => handleCancelOrder(order.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default AccountPage;