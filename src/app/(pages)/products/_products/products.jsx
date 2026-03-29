"use client";

import Categories from "@/components/Categories.jsx";
import CategoryUI from "./CategoryUI.jsx";
import { useSearchParams } from "next/navigation";
import ProductsList from "@/utils/productsList.js";
import ProductCard from "@/components/ProductCard.jsx";

const Products = () => {
  const CategoriesArray = [
    "Charge Controller",
    "Solar Panels",
    "Inverters",
    "Batteries",
    "Solar Kits",
    "Accessory",
    "Cable",
  ];
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category")?.replace("_", " ");

  const filteredProducts = categoryParam
    ? ProductsList.filter(
        (product) => product.category.toLowerCase() === categoryParam,
      )
    : [];

  return (
    <div id="product_page">
      <Categories />
      {categoryParam ? (
        <>
          <h2 className="text-center pb-8 capitalize text-3xl font-medium">
            {categoryParam}
          </h2>
          <div className="flex justify-center items-center flex-row flex-wrap gap-x-6 gap-y-6 sm:gap-y-12 max-w-315 mx-auto">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.imageUrl}
                currency={product.currency}
                price={product.price}
                value={false}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-center capitalize text-3xl font-medium">
            All Products
          </h2>
          {CategoriesArray.map((category, index) => (
            <CategoryUI key={index} category={category} />
          ))}
        </>
      )}
    </div>
  );
};

export default Products;
