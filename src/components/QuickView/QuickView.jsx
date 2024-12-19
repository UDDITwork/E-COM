import React from 'react';

const QuickView = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '8px',
        maxWidth: '800px',
        width: '90%',
        maxHeight: '90vh',
        overflow: 'auto',
        position: 'relative'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          ×
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem'
        }}>
          <img 
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '4px'
            }}
          />

          <div>
            <h2 style={{ marginBottom: '1rem' }}>{product.name}</h2>
            <p style={{ 
              fontSize: '1.5rem', 
              color: '#4a1625',
              marginBottom: '1rem'
            }}>
              ₹{product.price}
            </p>

            {/* Size Selection */}
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Select Size</h3>
              <div style={{
                display: 'flex',
                gap: '0.5rem'
              }}>
                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <button 
                    key={size}
                    style={{
                      padding: '0.5rem 1rem',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      background: 'white',
                      cursor: 'pointer'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button style={{
              width: '100%',
              padding: '1rem',
              background: '#4a1625',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '1rem'
            }}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;