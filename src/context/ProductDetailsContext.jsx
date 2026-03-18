"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ProductDetailsContext = createContext();

export const useProductDetails = () => useContext(ProductDetailsContext);

export const ProductDetailsProvider = ({ children }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [productID, setProductID] = useState(null);

  useEffect(() => {
    document.body.style.overflow = showDetails ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    }; // cleanup
  }, [showDetails]);

  return (
    <ProductDetailsContext.Provider
      value={{ showDetails, setShowDetails, productID, setProductID }}
    >
      {children}
    </ProductDetailsContext.Provider>
  );
};
