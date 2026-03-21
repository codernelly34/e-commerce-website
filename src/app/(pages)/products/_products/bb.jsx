import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductsList from "@/utils/productsList.js";
import ProductCard from "@/components/ProductCard.jsx";

const Battery = () => {
  return (
    <div className="m-2 rounded-lg border border-gray-300">
      <div className="flex flex-row items-center justify-between bg-[#f0e4e4] shadow px-1 rounded-tl-lg rounded-tr-lg">
        <h2 className="font-semibold">Battery</h2>
        <span className="flex flex-row items-center justify-center gap-1">
          <ChevronLeft />
          <ChevronRight />
        </span>
      </div>
      <div className="h-120 flex flex-row overflow-x-auto gap-10 p-3">
        {/* Hide scrollbar in WebKit */}
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>
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
    </div>
  );
};

export default Battery;
