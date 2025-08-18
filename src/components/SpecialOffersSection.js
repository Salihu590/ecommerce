import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SpecialOffersSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 2,
    minutes: 28,
    seconds: 26,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        seconds -= 1;

        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }

        if (days < 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-16 px-4 md:px-12 lg:px-24 bg-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6"
      >
        Order Today And{" "}
        <span className="bg-black text-white font-extrabold px-2 py-1 rounded">
          Save Up To 70%!
        </span>
      </motion.h2>
      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
        dolor lacus, nec ornare velit cursus sed. Cras in consectetur arcu, eu
        auctor mi.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="bg-green-500 rounded-lg p-6 text-white shadow-lg flex flex-col h-auto min-h-[500px] hover:shadow-xl hover:scale-105 transition-transform duration-300"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Best Deals</h3>
              <p className="text-sm mb-4">Sale of the Month</p>
              <div className="text-xs text-gray-200 mb-4">
                {`${timeLeft.days
                  .toString()
                  .padStart(2, "0")} : ${timeLeft.hours
                  .toString()
                  .padStart(2, "0")} : ${timeLeft.minutes
                  .toString()
                  .padStart(2, "0")} : ${timeLeft.seconds
                  .toString()
                  .padStart(2, "0")} Days Hours Mins Secs`}
              </div>
            </div>
            <button
              className="bg-white text-green-500 px-6 py-3 rounded-full text-lg font-medium w-full mx-auto block text-center hover:bg-gray-100 transition-colors"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </button>
          </div>

          <img
            src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755536266/best-deals_fc70bi.jpg"
            alt="Best Deals"
            className="mt-4 h-80 w-full object-cover rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="bg-gray-800 rounded-lg p-6 text-white shadow-lg flex flex-col h-auto min-h-[500px] hover:shadow-xl hover:scale-105 transition-transform duration-300"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Low - Fat Meat</h3>
              <p className="text-sm mb-4">85% Fat Free - Started at $49</p>
            </div>
            <button
              className="bg-white text-gray-800 px-6 py-3 rounded-full text-lg font-medium w-full mx-auto block text-center hover:bg-gray-100 transition-colors"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </button>
          </div>

          <img
            src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755536337/low-fat-meat_s0uspx.jpg"
            alt="Low Fat Meat"
            className="mt-4 h-80 w-full object-cover rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="bg-yellow-500 rounded-lg p-6 text-white shadow-lg flex flex-col h-auto min-h-[500px] hover:shadow-xl hover:scale-105 transition-transform duration-300"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Summer Sale</h3>
              <p className="text-sm mb-4">100% Fresh Fruit - Up to 64% OFF</p>
            </div>
            <button
              className="bg-white text-yellow-500 px-6 py-3 rounded-full text-lg font-medium w-full mx-auto block text-center hover:bg-gray-100 transition-colors"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </button>
          </div>

          <img
            src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755536381/fresh-fruit_pskkaa.jpg"
            alt="Summer Sale"
            className="mt-4 h-80 w-full object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SpecialOffersSection;
