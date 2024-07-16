import React, { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const userLocalStorage = localStorage.getItem('user');
    if (userLocalStorage) {
      console.log('Dati utente localStorage:', JSON.parse(userLocalStorage));
      setUser(JSON.parse(userLocalStorage));
    }
  }, []);

  const handleLogin = () => {
    const userLogin = { name, email };
    console.log('Dati utente inseriti:', userLogin);
    setUser(userLogin);
    localStorage.setItem('user', JSON.stringify(userLogin));
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {user ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Benvenuto, {user.name}!</h2>
            <p className="mb-6">Email: {user.email}</p>
            <button
              onClick={handleLogout}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
