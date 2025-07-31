import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Header from "./Header";
import Footer from "./Footer";
import Typing from "./Typing";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const retryFetch = async (url, options, retries = 3, delay = 1000) => {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url, options);
        return response;
      } catch (error) {
        if (i === retries - 1) throw error;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  };

  const handleContinue = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      toast.error("Please enter an email or mobile number");
      return;
    }

    const email = input.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const response = await retryFetch(
        `http://localhost:5000/api/users/${email}`
      );
      const data = await response.json();

      if (!response.ok) {
        toast.error("Error checking email. Please try again.");
        return;
      }

      if (data.exists) {
        navigate("/enter-password", { state: { email } });
      } else {
        navigate("/create-account", { state: { email } });
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
      navigate("/create-account", { state: { email } });
    }
  };

  const handleSocialLogin = (provider) => {
    login();
    toast.success(`Logged in with ${provider}!`);
    navigate("/account");
  };

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
        <Header />
        <motion.div
          className="flex flex-col items-center w-full max-w-md mx-auto px-4 sm:px-6 py-12 text-center"
          variants={sectionVariants}
        >
          <img
            src="/images/logo.png"
            alt="EasyEats Logo"
            className="h-12 md:h-16 object-contain mb-8"
          />
          <h2 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-2 mb-4">
            <span className="text-white bg-black px-3 py-1 rounded">
              Welcome
            </span>
            <span className="text-green-300">
              <Typing text=" to EasyEats" />
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8">
            Type your e-mail or phone number to log in or create an EasyEats
            account.
          </p>
          <form onSubmit={handleContinue} className="w-full mb-8">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Email or Mobile Number"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 placeholder-gray-400"
            />
            <button
              type="submit"
              className="mt-4 w-full bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors font-medium"
            >
              Continue
            </button>
          </form>
          <p className="text-gray-600 text-sm mb-8">
            By continuing you agree to EasyEat's{" "}
            <a
              href="/terms"
              className="text-blue-600 underline hover:text-blue-700"
            >
              Terms and Conditions
            </a>
          </p>
          <div className="w-full flex flex-col gap-4">
            <button
              onClick={() => handleSocialLogin("Facebook")}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <img
                src="/images/facebook-logo.png"
                alt="Facebook Logo"
                className="h-5 w-5 object-contain"
              />
              Login with Facebook
            </button>
            <button
              onClick={() => handleSocialLogin("Google")}
              className="w-full bg-white text-gray-800 px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <img
                src="/images/google-logo.png"
                alt="Google Logo"
                className="h-5 w-5 object-contain"
              />
              Login with Google
            </button>
          </div>
        </motion.div>
        <div className="flex-grow" />
        <Footer />
      </div>
    </motion.div>
  );
};

export default LoginPage;
