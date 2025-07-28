import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    toast.success(`${product.name} added to cart`);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast.success('Item removed from cart');
  };

  // Update quantity
  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // ✅ Clear entire cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems'); // optional if you're storing cart in localStorage
    toast.success('Cart cleared');
  };

  // Calculate total items for nav bar
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart, // ✅ added here
        totalItems,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);