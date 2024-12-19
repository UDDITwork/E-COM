import React, { useState } from 'react';

const SearchAndFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    price: 'all',
    size: 'all',
    category: 'all'
  });

  const handleFilterChange = (type, value) => {
    const newFilters = { ...filters, [type]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div style={{
      padding: '2rem',
      background: '#f8f9fa',
      borderRadius: '8px',
      marginBottom: '2rem'
    }}>
      {/* Search Bar */}
      <div style={{ marginBottom: '1.5rem' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          style={{
            width: '100%',
            padding: '0.8rem',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />
      </div>

      {/* Filters */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {/* Price Filter */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Price Range</label>
          <select
            value={filters.price}
            onChange={(e) => handleFilterChange('price', e.target.value)}
            style={{
              width: '100%',
              padding: '0.8rem',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          >
            <option value="all">All Prices</option>
            <option value="0-500">₹0 - ₹500</option>
            <option value="501-1000">₹501 - ₹1000</option>
            <option value="1001-2000">₹1001 - ₹2000</option>
            <option value="2001+">₹2001+</option>
          </select>
        </div>

        {/* Size Filter */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Size</label>
          <select
            value={filters.size}
            onChange={(e) => handleFilterChange('size', e.target.value)}
            style={{
              width: '100%',
              padding: '0.8rem',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          >
            <option value="all">All Sizes</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">X-Large</option>
            <option value="XXL">XX-Large</option>
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Category</label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            style={{
              width: '100%',
              padding: '0.8rem',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          >
            <option value="all">All Categories</option>
            <option value="trousers">Trousers</option>
            <option value="jeans">Jeans</option>
            <option value="shirts">Shirts</option>
            <option value="t-shirts">T-Shirts</option>
            <option value="jackets">Jackets</option>
            <option value="lowers">Lowers</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;