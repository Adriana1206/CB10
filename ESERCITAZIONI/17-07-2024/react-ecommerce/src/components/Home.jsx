import React, { useEffect, useState } from 'react';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <img src={product.images[0]} alt={product.title} className="w-full mb-2" />
            <p className="text-gray-800">${product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
