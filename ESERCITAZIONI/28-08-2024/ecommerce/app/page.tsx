"use client";

import { useState, useEffect, useTransition } from "react";
import Card from './components/Card';

// Interfaccia che descrive la struttura dei dati del prodotto
interface IProduct {
  title: string;
  description: string;
  price: number;
  images: string;
}

const Home = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  
  const fetchProduct = async () => {
    startTransition(async () => {
      try {
        const res = await fetch('/api/route'); 
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: IProduct = await res.json();
        setProduct(data);
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
    fetchProduct();
  }, []);

  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      {error && <p>Error: {error}</p>}
      {product ? (
        <Card product={product} />
      ) : (
        !isPending && <p>No product data available</p>
      )}
    </div>
  );
};

export default Home;
