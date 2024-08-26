import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import shoppingImage from '../assets/shopping.png';

function DefaultLayout() {
  return (
    <div className="container mx-auto p-4">
      <nav className="flex justify-between items-center bg-gray-200 p-4">
        <NavLink to="/" exact className="text-blue-600 hover:underline">Home</NavLink>
        <NavLink to="/cart" className="flex items-center text-blue-600 hover:underline">
          <img src={shoppingImage} alt="Shopping Cart" className="w-8 h-8 mr-2" />
        </NavLink>
      </nav>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;
