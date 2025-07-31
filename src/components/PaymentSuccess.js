import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Get cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    if (cartItems.length > 0) {
      const newOrder = {
        id: "ORD" + Date.now(),
        date: new Date().toLocaleDateString(),
        items: cartItems.map((item) => item.name),
        total: subtotal,
        status: "Processing",
        progress: ["Processing"],
      };

      // Save order in localStorage
      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
      existingOrders.push(newOrder);
      localStorage.setItem("orders", JSON.stringify(existingOrders));

      // Clear cart after saving
      localStorage.removeItem("cartItems");
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-blue-100 flex flex-col"
    >
      <Header isLoggedIn={true} />
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-8 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful 🎉
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Thank you for your order. Your payment was successful!
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => navigate("/account")}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Go to My Account
          </button>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default PaymentSuccess;
