import { useEffect, useState } from 'react';
import jsonData from '../data.json';
import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // useEffect(() => {
  //   filterProducts();
  // }, [products]);

  const filterProducts = (entry = '') => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(entry.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const filterStockProducts = (checkedBox = '') => {
    const filteredStock = products.filter((product) =>
      product.inStock ? 'checkedBox' : ''
    );
    setFilteredProducts(filteredStock);
  };

  return (
    <div className="products-page">
      <h1>IronStore</h1>
      <SearchBar
        filterProducts={filterProducts}
        filterStockProducts={filterStockProducts}
      />
      <ProductTable filteredProducts={filteredProducts} />
    </div>
  );
};

export default ProductsPage;
