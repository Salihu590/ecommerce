import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Typing from './Typing';

const AboutPage = () => {
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
      <div className="min-h-screen bg-blue-100 flex flex-col">
        <Header isLoggedIn={false} />
        <motion.div
          className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center"
          variants={sectionVariants}
        >
          <img
            src="/images/logo.png"
            alt="EasyEats Logo"
            className="h-12 md:h-16 object-contain mb-10"
          />
          <h2 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-2 mb-6">
            <span className="text-white bg-black px-3 py-1 rounded">About</span>
            <span className="text-green-300">
              <Typing text=" EasyEats" />
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-prose">
            At EasyEats, we’re passionate about delivering fresh, high-quality groceries straight to your door. 
            Founded with a mission to simplify your shopping experience, we source the best fruits, vegetables, 
            and pantry staples to ensure convenience without compromising on quality. Our team is dedicated to 
            sustainability, community support, and making every meal effortless and enjoyable.
          </p>
          <div className="w-full mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm"
                whileHover={{
                  backgroundColor: '#16a34a',
                  scale: 1.1,
                  x: -6,
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
                }}
                whileTap={{
                  backgroundColor: '#16a34a',
                  scale: 1.1,
                  x: -6,
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <motion.h4
                  className="text-black text-xl font-medium mb-3"
                  whileHover={{ color: '#ffffff' }}
                  whileTap={{ color: '#ffffff' }}
                >
                  Quality
                </motion.h4>
                <motion.p
                  className="text-black text-base"
                  whileHover={{ color: '#ffffff' }}
                  whileTap={{ color: '#ffffff' }}
                >
                  We handpick the freshest produce and premium products for every order.
                </motion.p>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm"
                whileHover={{
                  backgroundColor: '#16a34a',
                  scale: 1.1,
                  x: -6,
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
                }}
                whileTap={{
                  backgroundColor: '#16a34a',
                  scale: 1.1,
                  x: -6,
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <motion.h4
                  className="text-black text-xl font-medium mb-3"
                  whileHover={{ color: '#ffffff' }}
                  whileTap={{ color: '#ffffff' }}
                >
                  Convenience
                </motion.h4>
                <motion.p
                  className="text-black text-base"
                  whileHover={{ color: '#ffffff' }}
                  whileTap={{ color: '#ffffff' }}
                >
                  Shop anytime, anywhere, with fast and reliable delivery.
                </motion.p>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm"
                whileHover={{
                  backgroundColor: '#16a34a',
                  scale: 1.1,
                  x: -6,
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
                }}
                whileTap={{
                  backgroundColor: '#16a34a',
                  scale: 1.1,
                  x: -6,
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <motion.h4
                  className="text-black text-xl font-medium mb-3"
                  whileHover={{ color: '#ffffff' }}
                  whileTap={{ color: '#ffffff' }}
                >
                  Sustainability
                </motion.h4>
                <motion.p
                  className="text-black text-base"
                  whileHover={{ color: '#ffffff' }}
                  whileTap={{ color: '#ffffff' }}
                >
                  We prioritize eco-friendly practices and local sourcing.
                </motion.p>
              </motion.div>
            </div>
          </div>
          <Link
            to="/shop"
            className="w-full sm:w-auto bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors font-medium"
          >
            Shop Now
          </Link>
        </motion.div>
        <div className="flex-grow" />
        <Footer />
      </div>
    </motion.div>
  );
};

export default AboutPage;