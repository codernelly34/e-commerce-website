"use client";

import { createContext, use, useState, useEffect } from "react";

const ProductDetailsContext = createContext();

export const useProductDetails = () => use(ProductDetailsContext);

export const ProductDetailsProvider = ({ children }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [productID, setProductID] = useState(null);

  useEffect(() => {
    if (showDetails) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showDetails]);

  return (
    <ProductDetailsContext
      value={{ showDetails, setShowDetails, productID, setProductID }}
    >
      {children}
    </ProductDetailsContext>
  );
};
