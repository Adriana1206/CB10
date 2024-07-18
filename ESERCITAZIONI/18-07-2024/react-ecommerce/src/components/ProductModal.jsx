import React from 'react';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md relative">
        <h2 className="text-xl font-semibold mb-4">{product.title}</h2>
        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-4" />
        <p className="mb-4">{product.description}</p>
        <p className="font-bold mb-4">${product.price}</p>
        <div className="flex justify-between mt-4">
          <button onClick={handleAddToCart} className="px-4 py-2 bg-blue-500 text-white rounded">
            Add to Cart
          </button>
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
