"use client";

import ProductCard from "@/components/ProductCard.jsx";
import ProductsList from "@/utils/productsList.js";
import { useEffect, useState } from "react";
import { ProductDetails } from "./ProductDetails.jsx";

const Products = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [productID, setProductID] = useState(null);

  function onClick(id) {
    setShowDetails(true);
    setProductID(id);
  }

  useEffect(() => {
    if (showDetails) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showDetails]);

  return (
    <>
      <div className="pt-12 flex items-center justify-center gap-6 flex-wrap overflow-auto">
        {ProductsList.slice(0, 7).map((product, index) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.imageUrl}
            currency={product.currency}
            price={product.price}
            onClick={onClick}
          />
        ))}
        <div
          id="ProductCard"
          className="flex flex-col z-auto w-[20.5rem] md:w-[17.5rem] h-[25rem] rounded-lg shadow-[0px_0px_4px_#d4d4d4] "
        ></div>
      </div>
      {showDetails && (
        <ProductDetails productID={productID} setShowDetails={setShowDetails} />
      )}
    </>
  );
};

export default Products;
