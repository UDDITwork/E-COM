import React from 'react';
import { useShop } from '../../context/ShopContext';
import './Cart.css';

const Cart = ({ onClose }) => {
  const { cart, setCart } = useShop();

  const updateQuantity = (productId, size, newQuantity) => {
    if (newQuantity === 0) {
      setCart(cart.filter(item => !(item.id === productId && item.size === size)));
    } else {
      setCart(cart.map(item => 
        item.id === productId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <h2>Shopping Cart ({cart.length})</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={`${item.id}-${item.size}`} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>Size: {item.size}</p>
                  <p>₹{item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>+</button>
                  </div>
                </div>
              </div>
            ))}

            <div className="cart-total">
              <strong>Total:</strong>
              <strong>₹{total}</strong>
            </div>
            <button className="checkout-button" onClick={() => alert('Checkout functionality coming soon!')}>
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;