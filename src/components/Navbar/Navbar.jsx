import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';

const MegaMenu = ({ onCategoryClick }) => {
  const categories = ['SHOPPING', 'JEANS', 'TSHIRT', 'SHIRT', 'JACKETS', 'LOWER'];
  
  return (
    <div style={{
      position: 'absolute',
      top: '100%',
      left: 0,
      width: '100%',
      background: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      display: 'flex',
      padding: '2rem',
      animation: 'slideDown 0.3s ease',
      zIndex: 1000
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        flex: '1'
      }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryClick(category.toLowerCase())}
            style={{
              background: '#e67e22',
              border: 'none',
              padding: '1rem 2rem',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'left',
              fontWeight: 'bold'
            }}
            onMouseOver={(e) => e.target.style.background = '#d35400'}
            onMouseOut={(e) => e.target.style.background = '#e67e22'}
          >
            {category}
          </button>
        ))}
      </div>
      <div style={{
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img 
          src="/images/hero/hero.png" 
          alt="Hero"
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </div>
    </div>
  );
};

const Navbar = () => {
  const { cart, wishlist } = useShop();
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const scrollToSection = (category) => {
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMegaMenu(false);
  };

  return (
    <nav style={{
      padding: '1rem',
      background: 'linear-gradient(to right, #1a1a1a, #4a1625)',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0.5rem 2rem'
      }}>
        <Link to="/" style={{
          textDecoration: 'none',
          color: '#ffffff',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>
          YADUANSHI BRAND OUTLET
        </Link>
        
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>HOME</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>ABOUT</Link>
          <div
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
            style={{ position: 'relative' }}
          >
            <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>
              PRODUCTS
            </Link>
            {showMegaMenu && <MegaMenu onCategoryClick={scrollToSection} />}
          </div>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>CONTACT US</Link>
          
          {/* Cart and Wishlist Icons */}
          <button 
            onClick={() => setShowWishlist(true)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            ❤️ {wishlist.length > 0 && <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: 'red',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px'
            }}>{wishlist.length}</span>}
          </button>
          
          <button 
            onClick={() => setShowCart(true)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            🛒 {cart.length > 0 && <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: 'red',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px'
            }}>{cart.length}</span>}
          </button>
        </div>
      </div>

      {/* Cart and Wishlist Sidebars */}
      {showCart && <Cart onClose={() => setShowCart(false)} />}
      {showWishlist && <Wishlist onClose={() => setShowWishlist(false)} />}
    </nav>
  );
};

export default Navbar;