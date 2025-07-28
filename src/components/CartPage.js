import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import Header from './Header';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate('/checkout'); // ✅ Go to checkout if logged in
    } else {
      navigate('/login'); // ✅ Redirect to login page if not logged in
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen bg-blue-100">
        <Header />

        <div className="px-6 py-8">
          <h2 className="text-4xl font-bold flex items-center gap-2 mb-8">
            <span className="text-white bg-black px-3 py-1 rounded">Your</span>
            <span className="text-green-300">Cart</span>
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-600 text-center text-lg">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {/* ✅ Cart Items */}
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-24 h-24 bg-gray-50 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => (e.target.src = '/images/fallback.jpg')}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">₦{item.price.toFixed(2)} x {item.quantity}</p>
                    <p className="text-lg font-medium text-gray-800">
                      Total: ₦{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                      disabled={item.quantity === 1}
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}

              {/* ✅ Subtotal and Checkout */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  Subtotal: ₦{subtotal.toFixed(2)}
                </h3>
                <button
                  className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors font-medium"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CartPage;