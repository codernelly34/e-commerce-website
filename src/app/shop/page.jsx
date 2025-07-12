"use client";

import ProductsList from "@/utils/productsList.js";
import Image from "next/image.js";
import Link from "next/link.js";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { ChevronDown, Plus, ShoppingCart } from "lucide-react";
import roboto from "@/utils/fonts.js";

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

  const calculateTotalPrice = useMemo(() => {
    return productsToShop.reduce((total, product) => {
      const quantity = quantities[product.id] || 0;
      return total + product.price * quantity;
    }, 0);
  }, [productsToShop, quantities]);

  const calculateTotalQuantity = useMemo(() => {
    return productsToShop.reduce((total, product) => {
      const quantity = quantities[product.id] || 0;
      return total + quantity;
    }, 0);
  }, [productsToShop, quantities]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-16 md:gap-2 p-1">
        <section
          id="shopping-list"
          className="overflow-auto scrollbar-thin w-full md:w-1/2 shadow-md p-1 h-[95vh] rounded bg-gray-200 relative"
        >
          {productsToShop.length > 0 ? (
            <>
              <article
                className={`${roboto.className} font-light text-xl shadow p-1 rounded bg-white mb-8 sticky z-50 top-0`}
              >
                <h3 className=" opacity-85 text-center text-2xl font-bold py-2 [word-spacing:8px] mb-2 shadow">
                  Shopping List{" "}
                  <ShoppingCart
                    size={28}
                    strokeWidth={2.5}
                    className="inline-block"
                  />
                </h3>
                <span className="flex items-center gap-8 pl-8 py-2">
                  <p>Total products:</p>
                  <b className="font-semibold">{productsToShop.length}</b>
                </span>
                <span className="flex items-center gap-9.5 pl-8 py-1">
                  <p>Total quantity:</p>
                  <b className="font-semibold">{calculateTotalQuantity}</b>
                </span>
                <span className="flex items-center gap-14.5 pl-8 py-2">
                  <p>Total prices:</p>
                  <b className="font-semibold">
                    XAF {calculateTotalPrice.toFixed(2)}
                    <span className=" inline-block font-light pl-0.5">frs</span>
                  </b>
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
                  className="shadow p-1 rounded bg-white mb-8"
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
                        height: "100%",
                      }}
                      className="border border-gray-700 rounded"
                    />
                    <div className="content-center">
                      <h2
                        onClick={() => toggleItem(product.id)}
                        className="text-lg font-medium underline cursor-pointer"
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
                      <p className="py-2 font-semibold">
                        Price XAF {product.price}frs
                      </p>
                      <div className="flex items-center gap-4">
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
              <Link
                href="#shopping-list"
                className=" inline-block px-3 py-1 bg-gray-100 rounded mt-2 content-center text-center cursor-pointer"
              >
                Add more product to shopping list
              </Link>
            </>
          ) : (
            <div className="flex flex-col justify-center items-center h-full">
              <p>You have not Add any product to shopping list yet</p>
              <Link
                href="#quickShoppingProducts"
                className=" inline-block px-3 py-1 bg-gray-100 rounded mt-2 content-center text-center cursor-pointer"
              >
                Add product to shopping list
              </Link>
            </div>
          )}
        </section>

        <section
          id="quickShoppingProducts"
          className="overflow-auto scrollbar-thin h-[95vh] w-full md:w-1/2 p-1 bg-gray-200 rounded shadow-lg relative"
        >
          <h3
            className={`${roboto.className} bg-white rounded-xs text-center text-2xl font-bold py-2 [word-spacing:8px] mb-2 shadow sticky top-0`}
          >
            Shop more Products{" "}
            <ShoppingCart
              size={28}
              strokeWidth={2.5}
              className="inline-block"
            />
          </h3>
          {ProductsList.map((product) => (
            <article
              key={product.id}
              className="shadow rounded p-2 mb-8 bg-white"
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
                    height: "100%",
                  }}
                  className="border border-gray-700 rounded"
                />
                <div className="content-center">
                  <h2
                    onClick={() => toggleItem(product.id)}
                    className="text-lg font-medium underline cursor-pointer"
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
                  <p className="py-2 font-semibold">
                    Price XAF {product.price}frs
                  </p>
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque ut, quos perspiciatis sapiente minima optio dolor
                  facilis est vel atque, deleniti obcaecati eligendi deserunt
                  sunt iste, blanditiis quaerat dicta illum?
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  );
};

export default Shop;
