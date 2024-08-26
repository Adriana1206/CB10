import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import ProductModal from './ProductModal';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products/search?q=phone')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  const openModal = (product) => {
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  const addToCart = (product) => {
    const updatedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    updatedCartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setProducts(prevProducts =>
      prevProducts.map(prevProduct =>
        prevProduct.id === product.id ? { ...prevProduct, inCart: true } : prevProduct
      )
    );
  };

  return (
    <div>
      <ProductList products={products} onOpenModal={openModal} />
      {modalProduct && (
        <ProductModal product={modalProduct} onClose={closeModal} onAddToCart={addToCart} />
      )}
    </div>
  );
};

export default Home;
