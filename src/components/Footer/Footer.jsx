import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(to right, #1a1a1a, #4a1625)',
      color: 'white',
      padding: '3rem 0',
      marginTop: '3rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        padding: '0 2rem'
      }}>
        {/* Company Info */}
        <div>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>YADUANSHI BRAND OUTLET</h3>
          <p>Surplus Store Of Original Brands 👔👖👕</p>
          <p style={{ marginTop: '1rem' }}>
            Address: SINGHANA ROAD, OPP. SUBHASH PARK, NARNAUL
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Quick Links</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
            <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Contact Us</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <p>📞 Phone: 8804778800</p>
            <p>⏰ Hours: 10:00 AM - 9:00 PM</p>
            <p>📍 Location: Narnaul, Haryana</p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Follow Us</h3>
          <div style={{
            display: 'flex',
            gap: '1rem'
          }}>
            {/* Social media icons/links here */}
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Facebook</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Instagram</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        textAlign: 'center',
        marginTop: '2rem',
        padding: '1rem 0',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <p>© 2024 YADUVANSHI BRAND OUTLET. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;