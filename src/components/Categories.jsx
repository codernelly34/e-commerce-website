"use client";

import { useRef, useState } from "react";
import Link from "next/link.js";
import { LayoutDashboard, ArrowRightFromLine, Search } from "lucide-react";

const categories = [
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
    <nav id="nav" className="bg-white sticky top-0 w-full z-50">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
        Shop by Product Type:
      </h2>
      <section className="flex items-center gap-4">
        <div
          id="icon"
          className="transition-all duration-300 active:scale-90 flex items-center justify-center cursor-pointer shadow-[0px_0px_2px_#989797] py-2.5 px-4 rounded-[20px]"
          onClick={handleScroll}
        >
          <LayoutDashboard size={22} strokeWidth={2.3} />
          <ArrowRightFromLine
            size={22}
            strokeWidth={2.3}
            className={`${
              !scrollForward && "rotate-180"
            } transition-all duration-300`}
          />
        </div>
        <ul
          ref={navRef}
          className="w-full overflow-auto whitespace-nowrap flex gap-4 p-2"
        >
          <li
            id="search"
            className="p-0 shadow-none transition-all duration-300 ease-linear hover:scale-105"
          >
            <span className="flex items-center relative">
              <input
                type="text"
                name="search-item"
                id="search-item"
                placeholder="Search..."
                className="shadow-[0px_0px_1px_#333] rounded-[20px] px-2.5 py-1.5"
              />
              <label
                htmlFor="search-item"
                className="absolute right-1.5 p-0 m-0"
              >
                <Search color="#333" />
              </label>
            </span>
          </li>
          {categories.map((value, index) => (
            <li
              key={index}
              className="shadow-[0px_0px_1px_#333] transition-all duration-300 ease-linear text-sm md:text-base font-semibold rounded-[20px] hover:scale-105"
            >
              <Link
                href={`/${value.replace(" ", "_")}`}
                className="inline-block px-2.5 pt-2 capitalize"
              >
                {value}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default Categories;
