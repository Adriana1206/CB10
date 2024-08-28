"use client";

import { useState, useEffect, useTransition } from "react";
import Card from './components/Card';

// Interfaccia che descrive la struttura dei dati del prodotto
interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]); 
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  // Funzione per ottenere i dati dei prodotti
  const fetchProducts = async () => {
    startTransition(async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=12'); 
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setProducts(data.products); 
      } catch (error: unknown) {
        const message =
          error instanceof Error
            ? error.message
            : "An error occurred while fetching product data.";
        setError(message);
      }
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      {error && <p>Error: {error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.length > 0 ? (
          products.map(product => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          !isPending && <p>No product data available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
