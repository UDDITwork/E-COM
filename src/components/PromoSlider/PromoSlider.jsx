import React, { useState, useEffect } from 'react';

const PromoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [1, 2, 3, 4, 5];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: 'auto', // Adjust height dynamically based on image aspect ratio
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease',
          transform: `translateX(-${currentSlide * 100}%)`
        }}
      >
        {banners.map((num) => (
          <div
            key={num}
            style={{
              minWidth: '100%',
              height: 'auto',
              textAlign: 'center', // Center images horizontally
              background: '#f0f0f0' // Optional background for better visibility
            }}
          >
            <img
              src={`/images/promo/promobanner${num}.jpg`}
              alt={`Promo ${num}`}
              style={{
                width: '100%',
                height: '100%', // Ensures full container coverage
                objectFit: 'contain', // Ensures the entire image fits without trimming
                borderRadius: '30px'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoSlider;
