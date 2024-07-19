import { useState, createContext } from "react";

export const ProductContext = createContext();
export const SetProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  return (
    <ProductContext.Provider value={{ products, cartItems }}>
      <SetProductContext.Provider value={{ setProducts, setCartItems }}>
        {children}
      </SetProductContext.Provider>
    </ProductContext.Provider>
  );
}

export default ProductProvider;
