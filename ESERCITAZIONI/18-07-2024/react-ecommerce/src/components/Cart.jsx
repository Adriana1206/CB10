import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedItems);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cartItems.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-xl font-semibold text-center">{item.title}</h2>
          <img src={item.thumbnail} alt={item.title} className="w-32 h-32 object-cover mt-2 mb-4" />
          <p className="text-center flex-1">{item.description}</p>
          <div className="flex flex-col items-center mt-4 w-full">
            <p className="font-bold mb-2">${item.price}</p>
            <button onClick={() => removeFromCart(item.id)} className="px-4 py-2 bg-red-500 text-white rounded">
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
