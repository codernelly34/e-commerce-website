"use client";

import { createContext, use, useState, useMemo } from "react";

const ShoppingContext = createContext();

export const useShopping = () => use(ShoppingContext);

export const ShoppingProvider = ({ children }) => {
  const [productsToShop, setProductsToShop] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  const addProduct = (product) => {
    setProductsToShop((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });

    setQuantities((prev) => {
      if (prev[product.id] !== undefined) return prev;
      return {
        ...prev,
        [product.id]: 1,
      };
    });
  };

  const increaseQuantity = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1,
    }));
  };

  const decreaseQuantity = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 1) - 1, 1),
    }));
  };

  const totalQuantity = useMemo(
    () =>
      productsToShop.reduce(
        (total, product) => total + (quantities[product.id] || 0),
        0
      ),
    [productsToShop, quantities]
  );

  const totalPrice = useMemo(
    () =>
      productsToShop.reduce(
        (total, product) =>
          total + product.price * (quantities[product.id] || 0),
        0
      ),
    [productsToShop, quantities]
  );

  return (
    <ShoppingContext
      value={{
        productsToShop,
        quantities,
        addProduct,
        increaseQuantity,
        decreaseQuantity,
        totalQuantity,
        totalPrice,
        showSummary,
        setShowSummary,
      }}
    >
      {children}
    </ShoppingContext>
  );
};
