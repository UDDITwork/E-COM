import React, { createContext, useState, useContext } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const addToWishlist = (product) => {
    const isInWishlist = wishlist.find(item => item.id === product.id);
    if (!isInWishlist) {
      setWishlist([...wishlist, product]);
      alert('Added to Wishlist!');
    } else {
      setWishlist(wishlist.filter(item => item.id !== product.id));
      alert('Removed from Wishlist!');
    }
  };

  const addToCart = (product, size) => {
    const existingItem = cart.find(item => item.id === product.id && item.size === size);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, size, quantity: 1 }]);
    }
    alert('Added to Cart!');
  };

  return (
    <ShopContext.Provider value={{
      wishlist,
      cart,
      addToWishlist,
      addToCart,
      setCart
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);