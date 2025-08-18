import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import { PaystackButton } from "react-paystack";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const { cartItems, subtotal, clearCart } = useCart();

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("Door Delivery");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const deliveryFee =
    deliveryOption === "Door Delivery" ? cartItems.length * 500 : 0;
  const grandTotal = subtotal + deliveryFee;

  const saveOrder = (status = "Processing") => {
    const newOrder = {
      id: "ORD" + Date.now(),
      date: new Date().toLocaleDateString(),
      items: cartItems.map((item) => item.name),
      total: grandTotal,
      status,
      progress: ["Processing"],
      email: user?.email || "",
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(existingOrders));
  };

  const handlePlaceOrder = () => {
    if (!fullName || !address) {
      toast.error("Please fill in all required fields");
      return;
    }

    saveOrder("Pending");
    clearCart();
    toast.success("Order placed successfully!");

    navigate("/payment-success");
  };

  const publicKey = "pk_test_3d5fa0db7091d8d24191c48291b4c865275aaf6e";
  const amount = grandTotal * 100;
  const email = user?.email || "test@example.com";

  const paystackConfig = {
    email,
    amount,
    publicKey,
    metadata: {
      custom_fields: [
        {
          display_name: "Full Name",
          variable_name: "full_name",
          value: fullName,
        },
        {
          display_name: "Delivery Address",
          variable_name: "address",
          value: address,
        },
      ],
    },
    text: "Place Order",
    onSuccess: () => {
      saveOrder("Processing");
      clearCart();
      navigate("/payment-success");
    },
    onClose: () => toast("Payment window closed"),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-blue-100"
    >
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-4xl font-bold mb-6">Checkout</h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <label className="block text-lg font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 border rounded-lg"
              placeholder="Enter your full name"
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <label className="block text-lg font-semibold mb-2">
              Shipping Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border rounded-lg"
              placeholder="Enter your address"
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Delivery Option</h3>
            <div className="flex gap-4">
              <button
                className={`px-4 py-2 rounded-full border ${
                  deliveryOption === "Door Delivery"
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-700"
                }`}
                onClick={() => setDeliveryOption("Door Delivery")}
              >
                Door Delivery
              </button>
              <button
                className={`px-4 py-2 rounded-full border ${
                  deliveryOption === "Pick-up Station"
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-700"
                }`}
                onClick={() => setDeliveryOption("Pick-up Station")}
              >
                Pick-up Station
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>₦{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t mt-4 pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Items Total</span>
                <span>₦{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₦{deliveryFee}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₦{grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  checked={paymentMethod === "Cash on Delivery"}
                  onChange={() => setPaymentMethod("Cash on Delivery")}
                />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  checked={paymentMethod === "Card/Bank/USSD"}
                  onChange={() => setPaymentMethod("Card/Bank/USSD")}
                />
                Pay with Cards, Bank Transfer or USSD
              </label>
            </div>
          </div>

          {paymentMethod === "Cash on Delivery" ? (
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition"
            >
              Place Order
            </button>
          ) : (
            <PaystackButton
              {...paystackConfig}
              className="w-full bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CheckoutPage;
