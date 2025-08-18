import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Header from "./Header";
import {
  FaTachometerAlt,
  FaShoppingCart,
  FaHeart,
  FaAddressBook,
  FaCreditCard,
  FaUserCog,
  FaLifeRing,
  FaSignOutAlt,
} from "react-icons/fa";

export default function AccountPage() {
  const { currentUser, logout } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/orders");
        const data = await res.json();
        console.log("Fetched orders:", data);
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <>
      <Header />
      <div className="flex bg-green-50 min-h-screen p-6">
        <div className="w-64 bg-white rounded-2xl p-4 shadow">
          <ul className="space-y-3">
            <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-100 cursor-pointer">
              <FaTachometerAlt /> Dashboard
            </li>
            <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-100 cursor-pointer">
              <FaShoppingCart /> My Cart
            </li>
            <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-100 cursor-pointer">
              <FaHeart /> Wishlist
            </li>
            <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-100 cursor-pointer">
              <FaAddressBook /> Address Book
            </li>
            <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-100 cursor-pointer">
              <FaCreditCard /> Payment Methods
            </li>
            <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-100 cursor-pointer">
              <FaUserCog /> Account Settings
            </li>
            <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-100 cursor-pointer">
              <FaLifeRing /> Help & Support
            </li>
            <li
              onClick={logout}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-100 cursor-pointer text-red-600"
            >
              <FaSignOutAlt /> Log Out
            </li>
          </ul>
        </div>

        <div className="flex-1 ml-6">
          <h1 className="text-3xl font-bold mb-2">
            Welcome, {currentUser?.name || "User"}!
          </h1>
          <p className="text-gray-600 mb-6">
            Here’s a summary of your recent activity and account information.
          </p>

          <div className="bg-white rounded-xl p-4 shadow mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-lg">Recent Orders</h2>
              <button className="text-green-600 hover:underline">
                View All
              </button>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500">
                  <th>Order #</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <tr key={order.id} className="border-t">
                      <td>#{order.id}</td>
                      <td>{order.date}</td>
                      <td
                        className={
                          order.status === "Delivered"
                            ? "text-green-600"
                            : order.status === "Processing"
                            ? "text-yellow-500"
                            : "text-red-500"
                        }
                      >
                        {order.status}
                      </td>
                      <td>${order.total}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center text-gray-500 py-4">
                      No recent orders
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-600 text-white p-4 rounded-xl shadow hover:bg-green-400 cursor-pointer">
              <h3 className="font-bold">My Cart</h3>
              <p>3 items</p>
            </div>
            <div className="bg-yellow-400 text-white p-4 rounded-xl shadow hover:bg-green-400 cursor-pointer">
              <h3 className="font-bold">Wishlist</h3>
              <p>5 items</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
