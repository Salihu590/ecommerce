import React from "react";
import { motion } from "framer-motion";

const FeaturedServicesSection = () => {
  return (
    <section className="bg-[#E0F7FA] py-12 px-4 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="flex-shrink-0">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Our</h2>
          <div className="bg-black text-white px-6 py-2 rounded-2xl inline-block text-3xl font-semibold">
            Featured
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          <motion.div
            className="flex flex-col items-center text-center p-4 bg-gray-50 text-black rounded-xl shadow-sm"
            whileHover={{
              backgroundColor: "#16a34a",
              color: "#ffffff",
              scale: 1.1,
              x: -6,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{
              backgroundColor: "#16a34a",
              color: "#ffffff",
              scale: 1.1,
              x: -6,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-12 h-12 mb-2 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755533409/Icon1_savjvi.png"
                alt="Customer Support"
                className="w-9 h-9 object-contain"
              />
            </div>
            <p className="text-sm font-medium">24/7 Customer Support</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center p-4 bg-gray-50 text-black rounded-xl shadow-sm"
            whileHover={{
              backgroundColor: "#16a34a",
              color: "#ffffff",
              scale: 1.1,
              x: -6,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{
              backgroundColor: "#16a34a",
              color: "#ffffff",
              scale: 1.1,
              x: -6,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-12 h-12 mb-2 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755533608/icon2_ey3pwr.png"
                alt="Online Shopping"
                className="w-9 h-9 object-contain"
              />
            </div>
            <p className="text-sm font-medium">Online Shopping</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center p-4 bg-gray-50 text-black rounded-xl shadow-sm"
            whileHover={{
              backgroundColor: "#16a34a",
              color: "#ffffff",
              scale: 1.1,
              x: -6,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{
              backgroundColor: "#16a34a",
              color: "#ffffff",
              scale: 1.1,
              x: -6,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-12 h-12 mb-2 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755533642/icon3_waamca.png"
                alt="Weekly Discount"
                className="w-9 h-9"
              />
            </div>
            <p className="text-sm font-semibold">Weekly Discount</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center p-4 bg-gray-50 text-black rounded-xl shadow-sm"
            whileHover={{
              backgroundColor: "#16a34a",
              color: "#ffffff",
              scale: 1.1,
              x: -6,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{
              backgroundColor: "#16a34a",
              color: "#ffffff",
              scale: 1.1,
              x: -6,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-12 h-12 mb-2 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755533701/cash_ntt4z7.png"
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
