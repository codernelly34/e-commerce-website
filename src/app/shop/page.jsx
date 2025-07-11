"use client";

import ProductsList from "@/utils/productsList.js";
import Image from "next/image.js";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Plus } from "lucide-react";

const Shop = () => {
  const searchParams = useSearchParams();
  const [productsToShop, setProductsToShop] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [openItems, setOpenItems] = useState({});

  const productParam = searchParams.get("product");

  useEffect(() => {
    if (!productParam) return;

    const getProduct = ProductsList.find(
      (product) => product.id === productParam
    );

    if (getProduct) {
      setProductsToShop((prev) => {
        // Avoid duplicates
        if (prev.some((product) => product.id === getProduct.id)) {
          return prev;
        }
        return [...prev, getProduct];
      });

      // Set default quantity to 1 if not already set
      setQuantities((prev) => {
        if (prev[getProduct.id] !== undefined) return prev;
        return {
          ...prev,
          [getProduct.id]: 1,
        };
      });
    }
  }, [productParam]);

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const increaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1), // Prevent negative quantity
    }));
  };

  const addProductToShoppingList = (productId) => {
    const getProduct = ProductsList.find((product) => product.id === productId);

    if (getProduct) {
      setProductsToShop((prev) => {
        // Avoid duplicates
        if (prev.some((product) => product.id === getProduct.id)) {
          return prev;
        }
        return [...prev, getProduct];
      });

      // Set default quantity to 1 if not already set
      setQuantities((prev) => {
        if (prev[getProduct.id] !== undefined) return prev;
        return {
          ...prev,
          [getProduct.id]: 1,
        };
      });
    }
  };

  const calculateTotalPrice = () => {
    return productsToShop.reduce((total, product) => {
      const quantity = quantities[product.id] || 0;
      return total + product.price * quantity;
    }, 0);
  };

  const calculateTotalQuantity = () => {
    return productsToShop.reduce((total, product) => {
      const quantity = quantities[product.id] || 0;
      return total + quantity;
    }, 0);
  };

  return (
    <div className="flex flex-col md:flex-row gap-16 md:gap-2 p-2">
      <div className="p-0 w-full md:w-1/2">
        <div className="overflow-auto scrollbar-thin w-full shadow-md p-1 h-[90vh] rounded bg-gray-200 relative">
          {productsToShop.length > 0 ? (
            <>
              <article className="shadow-[0px_0px_4px_#d4d4d4] p-1 rounded bg-white mb-8 sticky z-50 top-0">
                <span className="flex items-center gap-8 pl-8 py-2 text-xl">
                  <p>Total products:</p>
                  <b>{productsToShop.length}</b>
                </span>
                <span className="flex items-center gap-9.5 pl-8 py-1 text-xl">
                  <p>Total quantity:</p>
                  <b>{calculateTotalQuantity()}</b>
                </span>
                <span className="flex items-center gap-14.5 pl-8 py-2 text-xl">
                  <p>Total prices:</p>
                  <b>{calculateTotalPrice().toFixed(2)}</b>
                </span>
                <span className="block text-end pr-8 mt-2 pb-1">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-50 py-2 rounded shadow transition duration-300 cursor-pointer">
                    Confirm & Pay
                  </button>
                </span>
              </article>
              {productsToShop.map((product) => (
                <article
                  key={product.id}
                  className="shadow-[0px_0px_4px_#d4d4d4] p-1 rounded bg-white mb-8"
                >
                  <span className="flex flex-row gap-2">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      width={800}
                      height={600}
                      style={{
                        objectFit: "contain",
                        width: "150px",
                        height: "100px",
                      }}
                      className="border border-gray-700 rounded"
                    />
                    <div className="content-center">
                      <h2
                        onClick={() => toggleItem(product.id)}
                        className="text-lg font-semibold underline cursor-pointer"
                      >
                        {product.title}{" "}
                        <ChevronDown
                          size={30}
                          strokeWidth={2.5}
                          className={`inline-block ${
                            openItems[product.id] ? "rotate-180" : "rotate-0"
                          } transition-all duration-300 ease-linear`}
                        />
                      </h2>
                      <div className="flex items-center gap-4 mt-2">
                        <p>Quantity ➡️</p>
                        <button
                          onClick={() => decreaseQuantity(product.id)}
                          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
                          title="Decrease product Quantity"
                        >
                          −
                        </button>
                        <span
                          className="text-lg font-medium cursor-default"
                          title="Product quantity"
                        >
                          {quantities[product.id] || 0}
                        </span>
                        <button
                          onClick={() => increaseQuantity(product.id)}
                          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
                          title="Increase Product Quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </span>
                  <div
                    id="details"
                    className={`${
                      openItems[product.id] ? "h-[10rem]" : "h-0"
                    } overflow-hidden transition-all duration-300 ease-linear`}
                  >
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eaque ut, quos perspiciatis sapiente minima optio dolor
                      facilis est vel atque, deleniti obcaecati eligendi
                      deserunt sunt iste, blanditiis quaerat dicta illum?
                    </p>
                  </div>
                </article>
              ))}
            </>
          ) : (
            <div className="flex justify-center items-center h-full">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          )}
        </div>
      </div>

      <div className="overflow-auto scrollbar-thin h-[90vh] w-full md:w-1/2 p-2 bg-gray-200 rounded">
        {ProductsList.map((product) => (
          <article
            key={product.id}
            className="shadow-[0px_0px_4px_#d4d4d4] rounded p-2 mb-8 bg-white"
          >
            <span className="flex flex-row gap-2">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={800}
                height={600}
                style={{
                  objectFit: "contain",
                  width: "150px",
                  height: "100px",
                }}
                className="border border-gray-700 rounded"
              />
              <div className="content-center">
                <h2
                  onClick={() => toggleItem(product.id)}
                  className="text-lg font-semibold underline cursor-pointer"
                >
                  {product.title}{" "}
                  <ChevronDown
                    size={30}
                    strokeWidth={2.5}
                    className={`inline-block ${
                      openItems[product.id] ? "rotate-180" : "rotate-0"
                    } transition-all duration-300 ease-linear`}
                  />
                </h2>
                <button
                  onClick={() => addProductToShoppingList(product.id)}
                  className="px-3 py-1 bg-gray-100 rounded mt-2 content-center text-center cursor-pointer"
                >
                  Add to shopping List{" "}
                  <Plus
                    size={20}
                    strokeWidth={2.5}
                    className={`inline-block border rounded-full border-gray-700 -mt-0.5 ml-1`}
                  />
                </button>
              </div>
            </span>
            <div
              id="details"
              className={`${
                openItems[product.id] ? "h-[10rem]" : "h-0"
              } overflow-hidden transition-all duration-300 ease-linear`}
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                ut, quos perspiciatis sapiente minima optio dolor facilis est
                vel atque, deleniti obcaecati eligendi deserunt sunt iste,
                blanditiis quaerat dicta illum?
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Shop;
