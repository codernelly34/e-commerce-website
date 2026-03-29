"use client";

import { useRef, useState } from "react";
import Link from "next/link.js";
import { LayoutDashboard, ArrowRightFromLine, Search } from "lucide-react";

const categories = [
  "products",
  "solar panels",
  "batteries",
  "charge controller",
  "inverters",
  "accessory",
  "solar kits",
];

const Categories = () => {
  const navRef = useRef(null); // create a ref for the scrollable container
  const [scrollForward, setScrollForward] = useState(true);

  const scrollAmount = 150; // pixels per scroll

  // Scroll handler function
  const handleScroll = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;

      if (scrollForward) {
        // Scroll forward
        navRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });

        // If reached or passed the end, reverse direction
        if (scrollLeft + clientWidth + scrollAmount >= scrollWidth) {
          setScrollForward(false);
        }
      } else {
        // Scroll backward
        navRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });

        // If back at start, switch to forward again
        if (scrollLeft - scrollAmount <= 0) {
          setScrollForward(true);
        }
      }
    }
  };

  return (
    <nav
      id="nav"
      className="bg-white sticky top-0 p-2 shadow w-full z-50 mb-6 border-b border-gray-200"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
        Shop By Category:
      </h2>

      <section className="flex items-center gap-2">
        {/* Scroll control button */}
        <div
          id="icon"
          className="transition-all duration-300 active:scale-90 flex items-center justify-center cursor-pointer shadow border border-gray-300 py-2 px-3 rounded-full hover:bg-gray-100"
          onClick={handleScroll}
        >
          <LayoutDashboard size={20} strokeWidth={2.2} />
          <ArrowRightFromLine
            size={20}
            strokeWidth={2.2}
            className={`ml-1 ${
              !scrollForward ? "rotate-180" : ""
            } transition-transform duration-300`}
          />
        </div>

        {/* Search input */}
        <ul
          ref={navRef}
          className="w-full overflow-x-auto whitespace-nowrap flex py-2 items-center gap-3 hide-scrollbar"
        >
          <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>
          <li
            id="search"
            className="transition-all duration-300 hover:scale-95 flex items-center relative"
          >
            <input
              type="text"
              name="search-item"
              id="search-item"
              placeholder="Search products..."
              className="shadow border border-gray-300 rounded-full py-1.5 px-3 text-base max-sm:w-40 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:rounded-md transition-all ease-linear duration-300"
            />
            <label
              htmlFor="search-item"
              className="absolute right-2 cursor-pointer"
            >
              <Search
                size={20}
                strokeWidth={3}
                color="#333"
                className="bg-white"
              />
            </label>
          </li>

          {/* Category nav links */}
          {categories.map((value, index) => (
            <li
              key={index}
              className="m-0 p-0 transition-all duration-300 hover:scale-105 ease-linear"
            >
              <Link
                href={
                  value === "products"
                    ? "/products"
                    : `/products?category=${value.replace(" ", "_")}`
                }
                className="text-sm md:text-base font-semibold rounded-full shadow border border-gray-300 bg-white px-4 py-2 capitalize text-gray-800"
              >
                {value === "products" ? "All" : value}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default Categories;
