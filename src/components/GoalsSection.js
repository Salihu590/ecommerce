import React from "react";
import { motion } from "framer-motion";

const GoalsSection = () => {
  return (
    <section className="bg-[#E0F7FA] py-16 px-4 sm:px-6 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column - Title and Description */}
        <div className="text-left lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-black text-white px-4 py-1 rounded-xl inline-block">
              Goals
            </span>{" "}
            Of Our Wholesale Company
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-md mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
            dolor lacus, nec ornare velit cursus sed. Cras in molestie arcu, et
            auctor mi. Sed purus orci, sodales non metus vel, cursus bibendum
            turpis.
          </p>
        </div>

        {/* Right Column - Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 lg:w-1/2">
          {/* Card 1 - Convenience Accessibility */}
          <motion.div
            className="bg-white text-black rounded-xl p-6 shadow-md w-[300px] h-[200px] flex items-center"
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
            <div className="flex items-start">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                <img
                  src="/images/icon1.png"
                  alt="Convenience Accessibility Icon"
                  className="w-9 h-9 object-contain"
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">
                  Convenience Accessibility
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  semper dolor lacus, nec ornare velit cursus sed.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Customer Satisfaction */}
          <motion.div
            className="bg-white text-black rounded-xl p-6 shadow-md w-[300px] h-[200px] flex items-center"
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
            <div className="flex items-start">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                <img
                  src="/images/icon2.png"
                  alt="Customer Satisfaction Icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">
                  Customer Satisfaction
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  semper dolor lacus, nec ornare velit cursus sed.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Quality and Freshness */}
          <motion.div
            className="bg-white text-black rounded-xl p-6 shadow-md w-[300px] h-[200px] flex items-center"
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
            <div className="flex items-start">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                <img
                  src="/images/icon3.png"
                  alt="Quality and Freshness Icon"
                  className="w-9 h-9 object-contain"
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">
                  Quality and Freshness
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  semper dolor lacus, nec ornare velit cursus sed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
