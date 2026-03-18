"use client";

import Categories from "@/components/Categories.jsx";
import ProductsList from "@/utils/productsList.js";
import ProductCard from "@/components/ProductCard.jsx";

const Products = () => {
  return (
    <>
      <Categories />
      <div className="flex justify-center items-center flex-row flex-wrap gap-x-6 gap-y-6 sm:gap-y-12 max-w-[1260px] mx-auto">
        {ProductsList.map((product, index) => (
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
  );
};

export default Products;
