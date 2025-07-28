import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems } = useCart();
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest('.mobile-menu') &&
        !event.target.closest('button')
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <header className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 bg-blue-100 relative z-30">
        <div>
          <img
            src="/images/logo.png"
            alt="Company Logo"
            className="h-10 md:h-12 object-contain"
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 relative z-40"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-4 flex-wrap gap-y-2 text-gray-700 font-medium text-base lg:text-lg">
          <Link
            to="/"
            className={`px-3 py-1 rounded-md transition hover:bg-gray-200 ${
              location.pathname === '/' ? 'bg-black text-white' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={`px-3 py-1 rounded-md transition hover:bg-gray-200 font-semibold ${
              location.pathname === '/shop' ? 'bg-black text-white' : ''
            }`}
          >
            Shop All
          </Link>
          <Link
            to="/fruits-vegetables"
            className={`px-3 py-1 rounded-md transition hover:bg-gray-200 ${
              location.pathname === '/fruits-vegetables' ? 'bg-black text-white' : ''
            }`}
          >
            Fruits & Vegetables
          </Link>
          <Link
            to="/pantry-staples"
            className={`px-3 py-1 rounded-md transition hover:bg-gray-200 ${
              location.pathname === '/pantry-staples' ? 'bg-black text-white' : ''
            }`}
          >
            Pantry Staples
          </Link>
          <Link
            to="/cart"
            className={`px-3 py-1 rounded-md transition hover:bg-gray-200 flex items-center gap-1 ${
              location.pathname === '/cart' ? 'bg-black text-white' : ''
            }`}
          >
            Cart
            <span className="bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          </Link>
          <Link
            to="/about"
            className={`px-3 py-1 rounded-md transition hover:bg-gray-200 ${
              location.pathname === '/about' ? 'bg-black text-white' : ''
            }`}
          >
            About Us
          </Link>
          {isAuthenticated ? (
            <>
              <Link
                to="/account"
                className={`px-3 py-1 rounded-md transition hover:bg-gray-200 ${
                  location.pathname === '/account' ? 'bg-black text-white' : ''
                }`}
              >
                My Account
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-md transition text-red-600 hover:bg-red-100"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className={`px-3 py-1 rounded-md transition hover:bg-gray-200 ${
                location.pathname === '/login' ? 'bg-black text-white' : ''
              }`}
            >
              Login
            </Link>
          )}
        </nav>
      </header>

      <motion.div
        className="fixed inset-y-0 left-0 bg-white w-64 shadow-lg z-30 md:hidden mobile-menu"
        initial={{ x: '-100%' }}
        animate={{ x: isMenuOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6 h-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Menu</h2>
          <nav className="flex flex-col space-y-4 text-gray-700 font-medium text-lg">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md transition hover:bg-gray-200 w-full text-left ${
                location.pathname === '/' ? 'bg-black text-white' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`px-4 py-2 rounded-md transition hover:bg-gray-200 w-full text-left font-semibold ${
                location.pathname === '/shop' ? 'bg-black text-white' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Shop All
            </Link>
            <Link
              to="/fruits-vegetables"
              className={`px-4 py-2 rounded-md transition hover:bg-gray-200 w-full text-left ${
                location.pathname === '/fruits-vegetables' ? 'bg-black text-white' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Fruits & Vegetables
            </Link>
            <Link
              to="/pantry-staples"
              className={`px-4 py-2 rounded-md transition hover:bg-gray-200 w-full text-left ${
                location.pathname === '/pantry-staples' ? 'bg-black text-white' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pantry Staples
            </Link>
            <Link
              to="/cart"
              className={`px-4 py-2 rounded-md transition hover:bg-gray-200 w-full flex items-center gap-2 ${
                location.pathname === '/cart' ? 'bg-black text-white' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
              <span className="bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-md transition hover:bg-gray-200 w-full text-left ${
                location.pathname === '/about' ? 'bg-black text-white' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/account"
                  className={`px-4 py-2 rounded-md transition hover:bg-gray-200 w-full text-left ${
                    location.pathname === '/account' ? 'bg-black text-white' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Account
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="px-4 py-2 rounded-md transition text-red-600 hover:bg-red-100 w-full text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className={`px-4 py-2 rounded-md transition hover:bg-gray-200 w-full text-left ${
                  location.pathname === '/login' ? 'bg-black text-white' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
