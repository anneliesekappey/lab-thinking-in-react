import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ filteredProducts }) => {
  return (
    <table>
      <thead className="table-title">
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((product) => {
          return <ProductRow key={product.id} product={product} />;
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
