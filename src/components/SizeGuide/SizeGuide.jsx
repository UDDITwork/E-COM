import React from 'react';

const SizeGuide = ({ onClose }) => {
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
        overflow: 'auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <h2>Size Guide</h2>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            ×
          </button>
        </div>

        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginBottom: '2rem'
        }}>
          <thead>
            <tr style={{ background: '#f8f9fa' }}>
              <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Size</th>
              <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Chest (in)</th>
              <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Waist (in)</th>
              <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Length (in)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>S</td>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>36-38</td>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>30-32</td>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>27</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>M</td>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>38-40</td>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>32-34</td>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>28</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>L</td>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>40-42</td>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>34-36</td>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>29</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>XL</td>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>42-44</td>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>36-38</td>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>30</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>XXL</td>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>44-46</td>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>38-40</td>
              <td style={{ padding: '1rem', border: '1px solid #ddd' }}>31</td>
            </tr>
          </tbody>
        </table>

        <div style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: '1rem' }}>How to Measure:</p>
          <p style={{ marginBottom: '0.5rem' }}>• Chest: Measure around the fullest part of your chest</p>
          <p style={{ marginBottom: '0.5rem' }}>• Waist: Measure around your natural waistline</p>
          <p>• Length: Measure from shoulder to desired length</p>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;