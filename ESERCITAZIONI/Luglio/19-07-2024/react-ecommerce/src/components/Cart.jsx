import React, { useContext } from 'react';
import { ProductContext, SetProductContext } from '../providers/ProductContext';

const Cart = () => {
  const { cartItems } = useContext(ProductContext);
  const { setCartItems } = useContext(SetProductContext);

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
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
