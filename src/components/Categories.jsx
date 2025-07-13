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
  "battery chargers",
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
      className="bg-white sticky top-0 py-3 shadow-lg px-3 w-full z-50 mb-6 border-b border-gray-200"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 text-center tracking-tight">
        Browse by Product Type
      </h2>

      <section className="flex items-center gap-4">
        {/* Scroll control button */}
        <div
          id="icon"
          className="transition-all duration-300 active:scale-90 flex items-center justify-center cursor-pointer shadow border border-gray-300 py-2 px-3 rounded-full hover:bg-gray-100"
          onClick={handleScroll}
        >
          <LayoutDashboard size={22} strokeWidth={2.2} />
          <ArrowRightFromLine
            size={22}
            strokeWidth={2.2}
            className={`ml-1 ${
              !scrollForward ? "rotate-180" : ""
            } transition-transform duration-300`}
          />
        </div>

        {/* Search input */}
        <ul
          ref={navRef}
          className="w-full overflow-x-auto whitespace-nowrap flex gap-3 p-1 scrollbar-thin"
        >
          <li
            id="search"
            className="transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center relative">
              <input
                type="text"
                name="search-item"
                id="search-item"
                placeholder="Search products..."
                className="shadow border border-gray-300 rounded-full py-1.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <label
                htmlFor="search-item"
                className="absolute right-2 cursor-pointer"
              >
                <Search size={18} color="#333" />
              </label>
            </span>
          </li>

          {/* Category nav links */}
          {categories.map((value, index) => (
            <li
              key={index}
              className="transition-all duration-300 text-sm md:text-base font-semibold rounded-full hover:scale-105 shadow border border-gray-300 bg-white"
            >
              <Link
                href={`/${value.replace(" ", "_")}`}
                className="inline-block px-3 py-1 capitalize text-gray-800 hover:text-gray-900"
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
