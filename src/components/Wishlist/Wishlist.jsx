import React from 'react';
import { useShop } from '../../context/ShopContext';
import './Wishlist.css';

const Wishlist = ({ onClose }) => {
  const { wishlist, addToCart } = useShop();

  return (
    <div className="wishlist-overlay">
      <div className="wishlist-container">
        <div className="wishlist-header">
          <h2>Wishlist ({wishlist.length})</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        {wishlist.length === 0 ? (
          <p>Your wishlist is empty</p>
        ) : (
          wishlist.map(product => (
            <div key={product.id} className="wishlist-item">
              <img src={product.image} alt={product.name} className="wishlist-image" />
              <div className="wishlist-details">
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button className="add-to-cart-button" onClick={() => addToCart(product, 'M')}>
                  Move to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;