"use client";

import { createContext, useContext, useState, useMemo } from "react";
import ProductsList from "@/utils/productsList.js";

const ShoppingContext = createContext();

export const useShopping = () => useContext(ShoppingContext);

export const ShoppingProvider = ({ children }) => {
  const [quantities, setQuantities] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  const cartItems = useMemo(() => {
    return ProductsList.filter((product) => quantities[product.id])
      .map((product) => ({
        ...product,
        quantity: quantities[product.id],
        total: product.price * quantities[product.id],
      }))
      .reverse();
  }, [quantities]);

  const addProduct = (id) => {
    setQuantities((prev) => {
      if (prev[id] !== undefined) return prev;
      return {
        [id]: 1,
        ...prev,
      };
    });
  };

  const increaseQuantity = (productId) => {
    setQuantities((prev) => ({
      [productId]: (prev[productId] || 1) + 1,
      ...prev,
    }));
  };

  const decreaseQuantity = (productId) => {
    setQuantities((prev) => ({
      [productId]: Math.max((prev[productId] || 1) - 1, 1),
      ...prev,
    }));
  };

  const totalQuantity = useMemo(
    () =>
      cartItems.reduce(
        (total, product) => total + (quantities[product.id] || 0),
        0,
      ),
    [cartItems, quantities],
  );

  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (total, product) =>
          total + product.price * (quantities[product.id] || 0),
        0,
      ),
    [cartItems, quantities],
  );

  return (
    <ShoppingContext.Provider
      value={{
        cartItems,
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
