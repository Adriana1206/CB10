import React from 'react';

const ProductItem = ({ product, onOpenModal }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center">{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-50 object-cover mt-2 mb-4 cursor-pointer"
        onClick={() => onOpenModal(product)}
      />
      <div className="flex justify-between items-center mt-4">
        <p className="font-bold">Price ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
