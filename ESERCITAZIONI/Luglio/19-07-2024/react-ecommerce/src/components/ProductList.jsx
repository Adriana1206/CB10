import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onOpenModal }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <ProductItem key={product.id} product={product} onOpenModal={onOpenModal} />
      ))}
    </div>
  );
};

export default ProductList;
