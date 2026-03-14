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
      <div className="flex justify-center items-center flex-wrap flex-col md:flex-row md:gap-x-10 gap-y-6">
        {ProductsList.slice(0, 8).map((product, index) => (
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
      </div>

      <ProductDetails
        productID={productID}
        setShowDetails={setShowDetails}
        showDetails={showDetails}
      />
    </>
  );
};

export default Products;
