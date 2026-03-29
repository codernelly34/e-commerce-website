"use client";

import ProductsList from "@/utils/productsList.js";
import Image from "next/image.js";
import Link from "next/link.js";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Plus, ShoppingCart } from "lucide-react";
import roboto from "@/utils/fonts.js";
import { useShopping } from "@/context/ShoppingContext";

const Shop = () => {
  const {
    cartItems,
    quantities,
    addProduct,
    increaseQuantity,
    decreaseQuantity,
    totalQuantity,
    totalPrice,
    setShowSummary,
  } = useShopping();
  const searchParams = useSearchParams();
  const [openItems, setOpenItems] = useState({});

  const productParam = searchParams.get("product");

  useEffect(() => {
    if (!productParam) return;

    addProduct(productParam);
  }, [productParam]);

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div id="shopping card" className="flex flex-col md:flex-row gap-10 p-4">
      <section
        id="shopping-list"
        className={`overflow-auto scrollbar-thin shadow-md h-[85vh] rounded bg-gray-100 relative w-full md:w-1/2`}
      >
        {cartItems.length > 0 ? (
          <>
            <article
              className={`${roboto.className} shadow bg-white sticky z-auto top-0`}
            >
              <h3 className="text-gray-800 text-center text-xl font-bold py-2 [word-spacing:8px] shadow">
                Shopping List <ShopIcon />
              </h3>
              <div className="flex flex-row gap-3 py-3">
                <span className="block px-3">
                  <p>Total products:</p>
                  <p>Total quantity:</p>
                  <p>Total prices:</p>
                </span>
                <span className="block">
                  <p className="font-semibold">{cartItems.length}</p>
                  <p className="font-semibold">{totalQuantity}</p>
                  <p className="font-semibold">
                    XAF {totalPrice.toFixed(2)}
                    <span className=" inline-block font-light pl-0.5">frs</span>
                  </p>
                </span>
              </div>
              <span className="block text-end">
                <button
                  onClick={() => setShowSummary(true)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-50 py-2 rounded shadow transition duration-300 cursor-pointer m-1"
                >
                  Confirm & Pay
                </button>
              </span>
            </article>
            {cartItems.map((product) => (
              <article
                key={product.id}
                className="shadow p-1 rounded bg-white mx-1 my-3"
              >
                <span className="flex flex-row gap-2">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={320}
                    height={320}
                    className="w-37.5 h-37.5 object-contain"
                    sizes="150px"
                  />
                  <div className="content-center">
                    <Ppp
                      product={product}
                      openItems={openItems}
                      toggleItem={toggleItem}
                    />
                    <div className="flex items-center gap-3 text-sm sm:text-base">
                      <p>Quantity</p>
                      <button
                        onClick={() => decreaseQuantity(product.id)}
                        className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
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
                        className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
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
                    openItems[product.id] ? "h-40" : "h-0"
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
            <Link
              href="#shopping-list"
              className=" inline-block px-3 py-1 rounded mt-2 content-center text-center cursor-pointer bg-gray-300 hover:bg-gray-500 ease-linear duration-200"
            >
              Add more product to shopping list
            </Link>
          </>
        ) : (
          <div className="text-center">
            <p>You have not Add any product to shopping list yet</p>
            <Link
              href="#quickShoppingProducts"
              className=" inline-block px-3 py-1 rounded mt-2 content-center text-center cursor-pointer bg-gray-300 hover:bg-gray-500 ease-linear duration-200"
            >
              Add product to shopping list
            </Link>
          </div>
        )}
      </section>

      <section
        id="quickShoppingProducts"
        className="overflow-auto scrollbar-thin h-[85vh] bg-gray-100 rounded shadow-lg relative w-full md:w-1/2"
      >
        <h3
          className={`${roboto.className} bg-white text-gray-800 rounded-xs text-center text-xl font-bold py-2 shadow sticky top-0`}
        >
          Shop more Products <ShopIcon />
        </h3>
        {ProductsList.map((product) => (
          <article
            key={product.id}
            className="shadow rounded p-2 mx-1 my-3 bg-white"
          >
            <span className="flex flex-row gap-2">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={320}
                height={320}
                className="w-37.5 h-37.5 object-contain"
                sizes="150px"
              />
              <div className="content-center">
                <Ppp
                  product={product}
                  openItems={openItems}
                  toggleItem={toggleItem}
                />
                <button
                  onClick={() => addProduct(product.id)}
                  className="px-2 py-1 bg-gray-300 hover:bg-gray-500 ease-linear duration-200 rounded mt-2 content-center cursor-pointer whitespace-nowrap"
                >
                  Add to List{" "}
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
                openItems[product.id] ? "h-40" : "h-0"
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
      </section>
    </div>
  );
};

export default Shop;

function ShopIcon() {
  return <ShoppingCart size={30} strokeWidth={2.5} className="inline-block" />;
}

function Ppp({ product, openItems, toggleItem }) {
  return (
    <span>
      <h2
        onClick={() => toggleItem(product.id)}
        className="underline cursor-pointer"
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
      <p className="py-2 font-semibold">Price XAF {product.price}frs</p>
    </span>
  );
}
