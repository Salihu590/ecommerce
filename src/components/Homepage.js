import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import WholesalePage from './WholesalePage';
import Header from './Header';

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-blue-100 min-h-screen font-sans relative">
        {/* Header */}
        <Header isLoggedIn={isLoggedIn} cartItems={cartItems} />

        {/* Main Content (Hero Section & Product Cards) */}
        <main className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-12 px-6 py-6 md:px-12 md:py-10">
          {/* Left Hero Section */}
          <motion.div
            className="col-span-1 md:col-span-3 space-y-4 md:space-y-6 pr-0 md:pr-4 order-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Enjoy the Results
            </h2>
            <motion.div
              className="inline-block bg-black text-white text-4xl sm:text-5xl md:text-6xl font-extrabold px-4 py-1 md:px-6 md:py-2 rounded"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
            >
              Big Harvest
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              With Ease
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-full md:max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper dolor lacus, nec ornare velit cursus sed. Cras in molestie elit. Sed purus orci, sodales non metus vel, cursus bibendum turpis. Nam sit amet congue orci. Sed a ligula in velit porttitor consequat. Duis massa est, elementum id lectus ac, viverra dictum turpis.
            </p>
            <motion.button
              onClick={() => navigate('/shop')}
              className="bg-green-500 hover:bg-green-400 text-white text-base md:text-lg font-semibold px-5 py-2 md:px-6 md:py-3 rounded-full shadow-md transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false }}
            >
              Shop Now
            </motion.button>
          </motion.div>

          {/* Right Product Cards Section */}
          <motion.div
            className="col-span-1 md:col-span-2 space-y-6 order-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            {/* Vegetables Card */}
            <motion.div
              className="bg-white rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false }}
            >
              <img
                src="/images/main-groceries.png"
                alt="Groceries Vegetables"
                className="w-full h-48 sm:h-52 object-cover"
              />
              <div className="p-4 sm:p-5 space-y-1 sm:space-y-2">
                <p className="text-teal-500 font-semibold text-sm">Groceries</p>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Vegetables</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-snug">
                  Fresh and organic veggies delivered directly to your doorstep.
                </p>
                <a href="#" className="text-teal-500 text-xs sm:text-sm font-medium inline-block mt-1">Read More...</a>
              </div>
            </motion.div>

            {/* Fruits Cards */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: false }}
            >
              {/* Card 1 */}
              <motion.div
                className="bg-white rounded-xl shadow-xl flex-1 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
              >
                <img
                  src="/images/Fruits-card1.png"
                  alt="Fruits 1"
                  className="w-full h-32 sm:h-28 object-cover rounded-t-xl"
                />
                <div className="p-3 sm:p-4">
                  <p className="text-teal-500 font-semibold text-sm">Groceries</p>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900">Fruits</h4>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="bg-white rounded-xl shadow-xl flex-1 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false }}
              >
                <img
                  src="/images/fruits-card2.png"
                  alt="Fruits 2"
                  className="w-full h-32 sm:h-28 object-cover rounded-t-xl"
                />
                <div className="p-3 sm:p-4">
                  <p className="text-teal-500 font-semibold text-sm">Groceries</p>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900">Fruits</h4>
                </div>
              </motion.div>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="flex justify-end gap-2 sm:gap-3 pt-0 sm:pt-2 pr-0 sm:pr-2">
              <button className="w-9 h-9 sm:w-10 sm:h-10 bg-green-300 border border-green-400 rounded-full flex items-center justify-center hover:bg-green-400 transition shadow-md">
                <ChevronLeft className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 bg-green-300 rounded-full flex items-center justify-center hover:bg-green-400 transition shadow-md">
                <ChevronRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </motion.div>
        </main>

        {/* Render the WholesalePage component directly below the main content */}
        <WholesalePage />
      </div>
    </motion.div>
  );
};

export default HomePage;