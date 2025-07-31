import React from "react";
import { motion } from "framer-motion";

const FeaturedServicesSection = () => {
  return (
    <section className="bg-[#E0F7FA] py-12 px-4 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Left Column - Title */}
        <div className="flex-shrink-0">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Our</h2>
          <div className="bg-black text-white px-6 py-2 rounded-2xl inline-block text-3xl font-semibold">
            Featured
          </div>
        </div>

        {/* Right Column - Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {/* Card 1 */}
          <motion.div
            className="flex flex-col items-center text-center p-4 bg-gray-50 text-black rounded-xl shadow-sm"
            whileHover={{
              backgroundColor: "#16a34a", // bg-green-600
              color: "#ffffff", // text-white
              scale: 1.1, // hover:scale-110
              x: -6, // hover:-translate-x-6 (leftward lift)
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)", // Enhanced shadow
            }}
            whileTap={{
              backgroundColor: "#16a34a", // bg-green-600
              color: "#ffffff", // text-white
              scale: 1.1, // tap:scale-110
              x: -6, // tap:-translate-x-6 (leftward lift)
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)", // Enhanced shadow
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-12 h-12 mb-2 bg-white rounded-full flex items-center justify-center">
              <img
                src="/images/icon1.png"
                alt="Customer Support"
                className="w-9 h-9 object-contain"
              />
            </div>
            <p className="text-sm font-medium">24/7 Customer Support</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="flex flex-col items-center text-center p-4 bg-gray-50 text-black rounded-xl shadow-sm"
            whileHover={{
              backgroundColor: "#16a34a", // bg-green-600
              color: "#ffffff", // text-white
              scale: 1.1, // hover:scale-110
              x: -6, // hover:-translate-x-6 (leftward lift)
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)", // Enhanced shadow
            }}
            whileTap={{
              backgroundColor: "#16a34a", // bg-green-600
              color: "#ffffff", // text-white
              scale: 1.1, // tap:scale-110
              x: -6, // tap:-translate-x-6 (leftward lift)
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)", // Enhanced shadow
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-12 h-12 mb-2 bg-white rounded-full flex items-center justify-center">
              <img
                src="/images/icon2.png"
                alt="Online Shopping"
                className="w-9 h-9 object-contain"
              />
            </div>
            <p className="text-sm font-medium">Online Shopping</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="flex flex-col items-center text-center p-4 bg-gray-50 text-black rounded-xl shadow-sm"
            whileHover={{
              backgroundColor: "#16a34a", // bg-green-600
              color: "#ffffff", // text-white
              scale: 1.1, // hover:scale-110
              x: -6, // hover:-translate-x-6 (leftward lift)
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)", // Enhanced shadow
            }}
            whileTap={{
              backgroundColor: "#16a34a", // bg-green-600
              color: "#ffffff", // text-white
              scale: 1.1, // tap:scale-110
              x: -6, // tap:-translate-x-6 (leftward lift)
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)", // Enhanced shadow
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-12 h-12 mb-2 bg-white rounded-full flex items-center justify-center">
              <img
                src="/images/icon3.png"
                alt="Weekly Discount"
                className="w-9 h-9"
              />
            </div>
            <p className="text-sm font-semibold">Weekly Discount</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="flex flex-col items-center text-center p-4 bg-gray-50 text-black rounded-xl shadow-sm"
            whileHover={{
              backgroundColor: "#16a34a", // bg-green-600
              color: "#ffffff", // text-white
              scale: 1.1, // hover:scale-110
              x: -6, // hover:-translate-x-6 (leftward lift)
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)", // Enhanced shadow
            }}
            whileTap={{
              backgroundColor: "#16a34a", // bg-green-600
              color: "#ffffff", // text-white
              scale: 1.1, // tap:scale-110
              x: -6, // tap:-translate-x-6 (leftward lift)
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)", // Enhanced shadow
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-12 h-12 mb-2 bg-white rounded-full flex items-center justify-center">
              <img
                src="/images/cash.png"
                alt="Cash on Delivery"
                className="w-9 h-9 object-contain"
              />
            </div>
            <p className="text-sm font-medium">Cash On Delivery</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServicesSection;
