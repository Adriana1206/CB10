import React, { useEffect, useState, useContext } from 'react';
import ProductList from './ProductList';
import ProductModal from './ProductModal';
import { ProductContext, SetProductContext } from '../providers/ProductContext';

const Home = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const { products } = useContext(ProductContext);
  const { setProducts, setCartItems } = useContext(SetProductContext);

  useEffect(() => {
    fetch('https://dummyjson.com/products/search?q=phone')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, [setProducts]);

  const openModal = (product) => {
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    closeModal();
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
