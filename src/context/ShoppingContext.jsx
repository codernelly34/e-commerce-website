"use client";

import { createContext, useContext, useState, useMemo } from "react";
import ProductsList from "@/utils/productsList.js";

const ShoppingContext = createContext();

export const useShopping = () => useContext(ShoppingContext);

export const ShoppingProvider = ({ children }) => {
  const [productsToShop, setProductsToShop] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  const addProduct = (id) => {
    const getProduct = ProductsList.find((product) => product.id === id);
    setProductsToShop((prev) => {
      if (prev.some((p) => p.id === getProduct.id)) return prev;
      return [getProduct, ...prev];
    });

    setQuantities((prev) => {
      if (prev[id] !== undefined) return prev;
      return {
        ...prev,
        [id]: 1,
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
        0,
      ),
    [productsToShop, quantities],
  );

  const totalPrice = useMemo(
    () =>
      productsToShop.reduce(
        (total, product) =>
          total + product.price * (quantities[product.id] || 0),
        0,
      ),
    [productsToShop, quantities],
  );

  return (
    <ShoppingContext.Provider
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
    </ShoppingContext.Provider>
  );
};
