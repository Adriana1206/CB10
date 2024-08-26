import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from './pages/ErrorPage';
import Home from './components/Home';
import Cart from './components/Cart';
import DefaultLayout from './components/DefaultLayout';
import ProductItem from './components/ProductItem'; 
import ProductProvider from "./providers/ProductContext.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'products/:id', 
        element: <ProductItem />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </React.StrictMode>
);
