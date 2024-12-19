import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import QuickView from '../QuickView/QuickView';

const ProductGrid = ({ category }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Sample product data - you should replace this with your actual data
  const products = Array(9).fill(null).map((_, index) => ({
    id: index + 1,
    name: `${category} ${index + 1}`,
    price: Math.floor(Math.random() * 2000) + 999,
    image: `/images/${category}/${category}${index + 1}.jpg`,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Blue']
  }));

  return (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        padding: '2rem'
      }}>
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            onQuickView={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <QuickView 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductGrid;