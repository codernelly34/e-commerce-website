"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductsList from "@/utils/productsList.js";
import ProductCard from "@/components/ProductCard.jsx";
import Link from "next/link.js";

const SCROLL_AMOUNT = 400; // px per button click

const CategoryUI = ({ category = "all" }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update arrow visibility based on scroll position
  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    // Also re-check on resize
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [updateScrollState]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <div className="mx-2 my-16 rounded-lg border border-gray-300">
      <div className="flex flex-row items-center justify-between bg-[#f0e4e4] shadow px-1 rounded-tl-lg rounded-tr-lg">
        <h2 className="font-bold">
          <Link
            href={`/products?category=${category.toLowerCase().replace(" ", "_")}`}
          >
            {category}
          </Link>
        </h2>
        <span className="flex flex-row items-center justify-center gap-1">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`
              p-1 rounded transition-all duration-200
              ${
                canScrollLeft
                  ? "text-gray-700 hover:bg-white/60 hover:shadow-sm active:scale-90 cursor-pointer"
                  : "text-gray-300 cursor-not-allowed"
              }
            `}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`
              p-1 rounded transition-all duration-200
              ${
                canScrollRight
                  ? "text-gray-700 hover:bg-white/60 hover:shadow-sm active:scale-90 cursor-pointer"
                  : "text-gray-300 cursor-not-allowed"
              }
            `}
          >
            <ChevronRight />
          </button>
        </span>
      </div>
      <div
        ref={scrollRef}
        className="grid grid-rows-[repeat(2,auto)] grid-flow-col [scroll-snap-type:x_mandatory] sm:flex flex-row overflow-x-auto hide-scrollbar gap-4 p-3"
        style={{ scrollbarWidth: "none" }} // hide scrollbar in Firefox
      >
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>
        {ProductsList.filter((product) => product.category === category).map(
          (product, index) => (
            <ProductCard
              key={product.id || index}
              id={product.id}
              title={product.title}
              imageUrl={product.imageUrl}
              currency={product.currency}
              price={product.price}
              value={false}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default CategoryUI;
