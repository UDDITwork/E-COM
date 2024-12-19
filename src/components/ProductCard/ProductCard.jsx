import React, { useState } from 'react';

const ProductCard = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        border: '1px solid #eee',
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'translateY(-5px)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover'
        }}
      />
      
      {/* Overlay buttons on hover */}
      {isHovered && (
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          padding: '1rem',
          background: 'rgba(255,255,255,0.9)',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '0.5rem'
        }}>
          <button 
            onClick={() => onQuickView(product)}
            style={{
              padding: '0.5rem 1rem',
              background: '#4a1625',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              flex: 1
            }}
          >
            Quick View
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              // Add to wishlist logic
            }}
            style={{
              padding: '0.5rem',
              background: 'white',
              border: '1px solid #4a1625',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ❤️
          </button>
        </div>
      )}

      {/* Product info */}
      <div style={{ padding: '1rem' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>{product.name}</h3>
        <p style={{ color: '#4a1625', fontWeight: 'bold' }}>₹{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;