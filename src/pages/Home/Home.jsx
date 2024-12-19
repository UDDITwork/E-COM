import React from 'react';
import PromoSlider from '../../components/PromoSlider/PromoSlider';
import ProductGrid from '../../components/ProductGrid/ProductGrid';

const Home = () => {
  const categories = ['shopping', 'jeans', 'shirt', 'tshirt', 'jackets', 'lower'];

  return (
    <div>
      <PromoSlider />
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {categories.map((category) => (
          <div id={category} key={category}>
            <ProductGrid category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;