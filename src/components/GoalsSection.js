import React from "react";
import { motion } from "framer-motion";

const GoalsSection = () => {
  return (
    <section className="bg-[#E0F7FA] py-16 px-4 sm:px-6 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
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

        <div className="flex flex-col gap-6 lg:w-1/2">
          <motion.div
            className="relative flex items-center bg-pink-100 text-black rounded-2xl p-6 shadow-md w-full h-auto"
            whileHover={{
              backgroundColor: "#16a34a",
              color: "#ffffff",
              scale: 1.02,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{
              backgroundColor: "#16a34a",
              color: "#ffffff",
              scale: 1.02,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="absolute -left-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <img
                src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755533608/icon2_ey3pwr.png"
                alt="Customer Satisfaction Icon"
                className="w-8 h-8 object-contain"
              />
            </div>

            <div className="pl-12">
              <h3 className="text-xl font-semibold mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                semper dolor lacus, nec ornare velit cursus sed.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative flex items-center bg-green-600 text-white rounded-2xl p-6 shadow-md w-full h-auto"
            whileHover={{
              backgroundColor: "#16a34a",
              color: "#ffffff",
              scale: 1.02,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{
              backgroundColor: "#16a34a",
              color: "#ffffff",
              scale: 1.02,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="absolute -left-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <img
                src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755533409/Icon1_savjvi.png"
                alt="Convenience Accessibility Icon"
                className="w-9 h-9 object-contain"
              />
            </div>

            <div className="pl-12">
              <h3 className="text-xl font-semibold mb-2">
                Convenience Accessibility
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                semper dolor lacus, nec ornare velit cursus sed.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative flex items-center bg-pink-100 text-black rounded-2xl p-6 shadow-md w-full h-auto"
            whileHover={{
              backgroundColor: "#16a34a",
              color: "#ffffff",
              scale: 1.02,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{
              backgroundColor: "#16a34a",
              color: "#ffffff",
              scale: 1.02,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="absolute -left-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <img
                src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755533642/icon3_waamca.png"
                alt="Quality and Freshness Icon"
                className="w-9 h-9 object-contain"
              />
            </div>

            <div className="pl-12">
              <h3 className="text-xl font-semibold mb-2">
                Quality and Freshness
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                semper dolor lacus, nec ornare velit cursus sed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
