import { Outlet, Link } from 'react-router-dom';
import shoppingImage from '../assets/shopping.png';

const DefaultLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto p-4 flex justify-between">
          <Link to="/" className="text-xl font-bold">Home</Link>
          <Link to="/cart" className="text-xl font-bold flex items-center">
            <img src={shoppingImage} alt="Shopping Cart" className="h-9 mr-2" />
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
