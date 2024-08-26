import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import shoppingImage from '../assets/shopping.png';
import { useContext } from 'react';
import { ProductContext } from '../providers/ProductContext';

const DefaultLayout = () => {
  const { cartItems } = useContext(ProductContext);
  const cartItemCount = cartItems.length;

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Home</Link>
          <Link to="/cart" className="text-xl font-bold flex items-center relative">
            <img src={shoppingImage} alt="Shopping Cart" className="h-9 mr-2" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
