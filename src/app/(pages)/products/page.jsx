"use client";

import Categories from "@/components/Categories.jsx";
import CategoryUI from "./_products/CategoryUI.jsx";

const Products = () => {
  const CategoriesArray = [
    "Charge Controller",
    "Solar Panel",
    "Inverter",
    "Battery",
    "Solar Kit",
    "Accessory",
    "Cable",
  ];

  return (
    <div id="product_page">
      <Categories />
      {CategoriesArray.map((category, index) => (
        <CategoryUI key={index} category={category} />
      ))}

      {/* <div className="flex justify-center items-center flex-row flex-wrap gap-x-6 gap-y-6 sm:gap-y-12 max-w-315 mx-auto">
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
      </div> */}
    </div>
  );
};

export default Products;
