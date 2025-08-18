import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ minHeight: "300px" }}
    >
      <div className="container mx-auto flex flex-col items-center space-y-10">
        {" "}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex items-center w-full max-w-md">
            <span className="mr-4 text-sm text-gray-400">Newsletter</span>
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 pl-4 pr-20 rounded-md text-black border border-gray-300 focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <img
            src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755533816/logo1_x9fufs.png"
            alt="EasyEats Logo"
            className="h-8"
          />
          <nav className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About Us
            </a>
            <a href="#" className="hover:text-gray-300">
              Service
            </a>
            <a href="#" className="hover:text-gray-300">
              Testimonial
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact Us
            </a>
          </nav>
        </motion.div>
        <motion.div
          className="flex items-center space-x-4 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <span>hello@website.com</span>
          <span>|</span>
          <span>123, Abuja, NIG</span>
          <span>|</span>
          <span>+0123456789</span>
          <div className="flex space-x-2 ml-4">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755533851/youtube_rmgpt9.png"
                alt="YouTube"
                className="h-5 cursor-pointer"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755533878/twitter_txr947.png"
                alt="Twitter"
                className="h-5 cursor-pointer"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755533905/instagram_dtz396.png"
                alt="Instagram"
                className="h-5 cursor-pointer"
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755533933/facebook_jgh75c.png"
                alt="Facebook"
                className="h-5 cursor-pointer"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
