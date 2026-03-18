"use client";

import ProductCard from "@/components/ProductCard.jsx";
import ProductsList from "@/utils/productsList.js";

const Products = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-row flex-wrap gap-x-6 gap-y-6 sm:gap-y-12 max-w-[1260px] mx-auto">
        {ProductsList.slice(0, 8).map((product, index) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.imageUrl}
            currency={product.currency}
            price={product.price}
            value={true}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
