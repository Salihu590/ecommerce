import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./components/Homepage";
import ShopAllPage from "./components/ShopAllPage";
import FruitsVegetablesPage from "./components/FruitsVegetablesPage";
import PantryStaplesPage from "./components/PantryStaplesPage";
import CartPage from "./components/CartPage";
import LoginPage from "./components/LoginPage";
import AboutPage from "./components/AboutPage";
import CreateAccountPage from "./components/CreateAccountPage";
import EnterPasswordPage from "./components/EnterPasswordPage";
import ScrollToTop from "./components/ScrollToTop";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CheckoutPage from "./components/CheckoutPage";
import PaymentSuccess from "./components/PaymentSuccess";
import AccountPage from "./components/AccountPage";

const TermsPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5 }}
  >
    <div className="min-h-screen bg-blue-100 flex flex-col">
      <Header isLoggedIn={false} />
      <motion.div
        className="flex flex-col items-center justify-center flex-grow px-4 sm:px-6 py-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Terms and Conditions
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
          Our terms and conditions will be added here. (This is a placeholder
          page. Add your content here.)
        </p>
      </motion.div>
      <Footer />
    </div>
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopAllPage />} />
        <Route path="/fruits-vegetables" element={<FruitsVegetablesPage />} />
        <Route path="/pantry-staples" element={<PantryStaplesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/account" element={<AccountPage />} />{" "}
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/enter-password" element={<EnterPasswordPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <AuthProvider>
      <Toaster position="bottom-center" />
      <CartProvider>
        <Router>
          <ScrollToTop />
          <AnimatedRoutes />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
