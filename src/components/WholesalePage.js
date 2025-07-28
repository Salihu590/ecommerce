import React from 'react';
import { RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import BulkServicesSection from './BulkServicesSection';
import FeaturedServicesSection from './FeaturedServicesSection';
import GoalsSection from './GoalsSection';
import SpecialOffersSection from './SpecialOffersSection';
import ClientTestimonials from './ClientTestimonials';
import Footer from './Footer';

const WholesalePage = () => {
  return (
    <div className="bg-blue-100 font-sans py-10 md:py-16">
      <main className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content Section */}
          <div className="space-y-6 md:space-y-8 order-2 md:order-1">
            {/* Title Section */}
            <div>
              <div className="inline-block bg-black text-white text-3xl sm:text-4xl md:text-5xl font-extrabold px-5 py-2 md:px-8 md:py-3 rounded-xl mb-4">
                Finest Wholesale
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Food
              </h2>
            </div>

            {/* Description Paragraph */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-full md:max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper dolor lacus, nec ornare velit cursus sed. Cras in molestie elit. Sed purus orci, sodales non metus vel, cursus bibendum turpis. Nam sit amet congue orci.
            </p>

            {/* Mission and Vision Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Our Mission */}
              <motion.div
                className="bg-white text-black rounded-xl shadow-lg p-6 space-y-3 w-[268px] h-[295px]"
                whileHover={{
                  backgroundColor: '#16a34a', // bg-green-600
                  color: '#ffffff', // text-white for all card text
                  scale: 1.1, // hover:scale-110
                  x: -6, // hover:-translate-x-6 (leftward lift)
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)', // Enhanced shadow
                }}
                whileTap={{
                  backgroundColor: '#16a34a', // bg-green-600
                  color: '#ffffff', // text-white for all card text
                  scale: 1.1, // tap:scale-110
                  x: -6, // tap:-translate-x-6 (leftward lift)
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)', // Enhanced shadow
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="/images/your-mission-icon.png"
                    alt="Our Mission Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">
                  Our <motion.span className="text-black" whileHover={{ color: '#ffffff' }}>Mission</motion.span>
                </h3>
                <p className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas nunc eget.
                </p>
              </motion.div>

              {/* Our Vision */}
              <motion.div
                className="bg-white text-black rounded-xl shadow-lg p-6 space-y-3 w-[268px] h-[295px]"
                whileHover={{
                  backgroundColor: '#16a34a', // bg-green-600
                  color: '#ffffff', // text-white for all card text
                  scale: 1.1, // hover:scale-110
                  x: -6, // hover:-translate-x-6 (leftward lift)
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)', // Enhanced shadow
                }}
                whileTap={{
                  backgroundColor: '#16a34a', // bg-green-600
                  color: '#ffffff', // text-white for all card text
                  scale: 1.1, // tap:scale-110
                  x: -6, // tap:-translate-x-6 (leftward lift)
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)', // Enhanced shadow
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className="text-green-700">
                  <RefreshCcw className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">
                  Our <motion.span className="text-black" whileHover={{ color: '#ffffff' }}>Vision</motion.span>
                </h3>
                <p className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas nunc eget.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="order-1 md:order-2 relative pt-8 pb-32 md:pb-0">
            <img
              src="/images/wholesale-food-market.png"
              alt="Wholesale Food Market"
              className="w-full h-auto max-h-96 md:h-[550px] object-cover rounded-xl shadow-xl"
            />

            {/* Floating Customer Sign-up Card */}
            <div className="absolute bottom-10 sm:bottom-12 md:-bottom-12 right-1/2 translate-x-1/2 md:translate-x-0 md:right-8 bg-white rounded-xl shadow-2xl p-4 md:p-6 w-[323px] h-[223px]">
              <p className="text-gray-800 text-sm md:text-base font-semibold mb-3">
                How many current customers sign up
              </p>
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="/images/customer1.png"
                    alt="Customer 1"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="/images/customer2.png"
                    alt="Customer 2"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="/images/customer3.png"
                    alt="Customer 3"
                  />
                </div>
                <span className="text-xl md:text-2xl font-bold text-green-900">50K+</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bulk Services Section */}
      <BulkServicesSection />

      {/* Featured Services Section */}
      <FeaturedServicesSection />

      {/* Goals Section */}
      <GoalsSection />

      {/* Special Offers Section */}
      <SpecialOffersSection />

      {/* Client Testimonials Section */}
      <ClientTestimonials />

      <Footer />
    </div>
  );
};

export default WholesalePage;