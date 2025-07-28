import React from 'react';
import { motion } from 'framer-motion';

const BulkServicesSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          The Bulk{' '}
          <span className="bg-black text-white px-4 py-1 rounded-xl inline-block">
            Services
          </span>{' '}
          We Provide For You
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-12">
          We specialize in delivering fresh products in large quantities, tailored to your needs.
          Whether for events, businesses, or communities, we ensure professional service with guaranteed quality and efficient logistics.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <motion.div
            className="bg-gray-100 text-black rounded-lg p-6 shadow-md w-[234px] h-[304px]"
            whileHover={{
              backgroundColor: '#16a34a', // bg-green-600
              color: '#ffffff', // text-white
              scale: 1.1, // hover:scale-110
              x: -6, // hover:-translate-x-6 (leftward lift)
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)', // Enhanced shadow
            }}
            whileTap={{
              backgroundColor: '#16a34a', // bg-green-600
              color: '#ffffff', // text-white
              scale: 1.1, // tap:scale-110
              x: -6, // tap:-translate-x-6 (leftward lift)
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)', // Enhanced shadow
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-semibold mb-2">Freshness Guaranteed</h3>
            <p className="text-sm">
              We deliver the freshest products directly from trusted suppliers to your doorstep in bulk.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-gray-100 text-black rounded-lg p-6 shadow-md w-[234px] h-[304px]"
            whileHover={{
              backgroundColor: '#16a34a', // bg-green-600
              color: '#ffffff', // text-white
              scale: 1.1, // hover:scale-110
              x: -6, // hover:-translate-x-6 (leftward lift)
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)', // Enhanced shadow
            }}
            whileTap={{
              backgroundColor: '#16a34a', // bg-green-600
              color: '#ffffff', // text-white
              scale: 1.1, // tap:scale-110
              x: -6, // tap:-translate-x-6 (leftward lift)
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)', // Enhanced shadow
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-semibold mb-2">Personalized Shopping</h3>
            <p className="text-sm">
              Customize your bulk orders to fit your specific needs and preferences without compromise.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-gray-100 text-black rounded-lg p-6 shadow-md w-[234px] h-[304px]"
            whileHover={{
              backgroundColor: '#16a34a', // bg-green-600
              color: '#ffffff', // text-white
              scale: 1.1, // hover:scale-110
              x: -6, // hover:-translate-x-6 (leftward lift)
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)', // Enhanced shadow
            }}
            whileTap={{
              backgroundColor: '#16a34a', // bg-green-600
              color: '#ffffff', // text-white
              scale: 1.1, // tap:scale-110
              x: -6, // tap:-translate-x-6 (leftward lift)
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)', // Enhanced shadow
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-semibold mb-2">Professional Courier</h3>
            <p className="text-sm">
              Our delivery team ensures timely, professional transport with proper handling for large quantities.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bg-gray-100 text-black rounded-lg p-6 shadow-md w-[234px] h-[304px]"
            whileHover={{
              backgroundColor: '#16a34a', // bg-green-600
              color: '#ffffff', // text-white
              scale: 1.1, // hover:scale-110
              x: -6, // hover:-translate-x-6 (leftward lift)
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)', // Enhanced shadow
            }}
            whileTap={{
              backgroundColor: '#16a34a', // bg-green-600
              color: '#ffffff', // text-white
              scale: 1.1, // tap:scale-110
              x: -6, // tap:-translate-x-6 (leftward lift)
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)', // Enhanced shadow
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-semibold mb-2">Best Service and Licensed</h3>
            <p className="text-sm">
              We are certified and dedicated to offering top-notch service that you can rely on always.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BulkServicesSection;