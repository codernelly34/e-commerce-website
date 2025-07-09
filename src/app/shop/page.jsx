"use client";

import ProductsList from "@/utils/productsList.js";
import Image from "next/image.js";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Shop = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [productsToShop, setProductsToShop] = useState([]);
  const [crow, setCrow] = useState(false);
  const [openItems, setOpenItems] = useState({});

  const productParam = searchParams.get("product");

  useEffect(() => {
    if (!productParam) return router.push("/");

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
    }
  }, [productParam]);

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 p-2">
      {productsToShop.length > 0 && (
        <div className="w-[22.5rem] lg:w-[40rem] h-[25rem] m-auto md:m-0 ">
          {productsToShop.map((product) => (
            <article
              key={product.id}
              className="shadow-[0px_0px_4px_#d4d4d4] rounded mb-4"
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
                  className="border border-gray-700 m-1 rounded"
                />
                <h2
                  // onClick={() => setCrow((prev) => !prev)}
                  onClick={() => toggleItem(product.id)}
                  className="text-lg font-semibold underline cursor-pointer content-center"
                >
                  {product.title}{" "}
                  <ChevronDown
                    size={30}
                    strokeWidth={2.5}
                    className={`inline-block ${
                      crow ? "rotate-180" : "rotate-0"
                    } transition-all duration-300 ease-linear`}
                  />
                </h2>
              </span>
              <div
                id="details"
                // className={`${
                //   crow ? "h-[10rem]" : "h-0"
                // } overflow-hidden transition-all duration-300 ease-linear`}
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
        </div>
      )}
      <div className="h-[40vh] w-[40vw] border border-amber-600"></div>
    </div>
  );
};

export default Shop;
