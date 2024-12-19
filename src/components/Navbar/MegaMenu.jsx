import React from 'react';
import './MegaMenu.css';

const MegaMenu = ({ onCategoryClick }) => {
  const categories = ['TROUSERS', 'JEANS', 'T-SHIRTS', 'SHIRTS', 'JACKETS', 'LOWERS'];

  return (
    <div className="mega-menu">
      <div className="mega-menu-categories">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryClick(category.toLowerCase())}
            className="mega-menu-button"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mega-menu-image">
        <img src="images/hero/hero.jpg" alt="Hero" />
      </div>
    </div>
  );
};

export default MegaMenu;
