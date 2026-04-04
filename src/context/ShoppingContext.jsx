"use client";

import { createContext, useContext, useState, useMemo } from "react";
import ProductsList from "@/utils/productsList.js";
import { useNotify } from "./notifyContext.jsx";

const ShoppingContext = createContext();

export const useShopping = () => useContext(ShoppingContext);

export const ShoppingProvider = ({ children }) => {
  const [quantities, setQuantities] = useState({});
  const [showSummary, setShowSummary] = useState(false);
  const [cartOrder, setCartOrder] = useState([]);

  const { setNotifyText, setNotify } = useNotify();

  // const cartItems = useMemo(() => {
  //   return ProductsList.filter((product) => quantities[product.id]).map(
  //     (product) => ({
  //       ...product,
  //       quantity: quantities[product.id],
  //       total: product.price * quantities[product.id],
  //     }),
  //   );
  // }, [quantities]);

  const cartItems = useMemo(() => {
    return cartOrder
      .filter((id) => id in quantities)
      .map((id) => {
        const product = ProductsList.find((p) => p.id === id);
        return {
          ...product,
          quantity: quantities[id],
          total: product.price * quantities[id],
        };
      });
  }, [quantities, cartOrder]);

  const addProduct = (id) => {
    let message = "";
    setQuantities((prev) => {
      if (prev[id] !== undefined) {
        message = "Product already in list";
        return prev;
      }
      message = "Product added";
      return { ...prev, [id]: 1 };
    });
    setNotify(true);
    setNotifyText(message);

    setCartOrder((prev) => {
      if (prev.includes(id)) return prev;
      return [id, ...prev]; // ✅ new items go to the front
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
