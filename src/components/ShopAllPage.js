import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Added import
import Header from "./Header";
import Footer from "./Footer";
import Typing from "./Typing";
import { fruits, vegetables, pantryStaples } from "../data/products";

const ShopAllPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoggedIn] = useState(false);
  const { addToCart } = useCart(); // Use cart context

  const allProducts = [
    ...fruits.map((p) => ({ ...p, category: "Fruits" })),
    ...vegetables.map((p) => ({ ...p, category: "Vegetables" })),
    ...pantryStaples.map((p) => ({ ...p, category: "Pantry" })),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

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
      <div className="min-h-screen bg-blue-100">
        {/* HEADER */}
        <Header isLoggedIn={isLoggedIn} /> {/* Removed cartItems prop */}
        {/* PAGE TITLE */}
        <motion.div
          className="px-6 py-8 text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold flex items-center gap-2">
            <span className="text-white bg-black px-3 py-1 rounded">Shop</span>
            <span className="text-green-300">
              <Typing text="All" />
            </span>
          </h2>

          {/* FILTER BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-3">
            {["All", "Fruits", "Vegetables", "Pantry"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === cat
                    ? "bg-green-500 text-white"
                    : "bg-white border border-green-400 text-green-600 hover:bg-green-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
        {/* PRODUCTS GRID */}
        <motion.div
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-6 pb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={sectionVariants}
                whileHover={{ scale: 1.04 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300"
              >
                <div className="relative w-full h-52 bg-gray-50 rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.src = "/images/fallback.jpg")}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-lg mb-4">
                  ₦{product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors w-full font-medium"
                >
                  Add to Cart
                </button>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              No products available in this category.
            </p>
          )}
        </motion.div>
        {/* FOOTER */}
        <Footer />
      </div>
    </motion.div>
  );
};

export default ShopAllPage;
