import React, { useEffect, useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (product) => {
    let newCart = cart.filter(item => item.id !== product.id);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cart.map(product => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <img src={product.images[0]} alt={product.title} className="w-full mb-2" />
            <p className="text-gray-800">${product.price}</p>
            <button className="bg-red-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-red-600" onClick={() => removeFromCart(product)}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
