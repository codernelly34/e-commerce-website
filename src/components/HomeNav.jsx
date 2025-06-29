"use client";

import Image from "next/image.js";
import Link from "next/link.js";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const HomeNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(false);

  function switchMenu() {
    setShow((prev) => !prev);
    const timer = setTimeout(() => {
      setIsMenuOpen((prev) => !prev);
      setShow((prev) => !prev);
    }, 300);

    // Cleanup in case the component unmounts before the timeout completes
    return () => clearTimeout(timer);
  }

  return (
    <nav
      id="HeroNav"
      className="flex items-center justify-between w-full p-1.5"
    >
      <div id="logoDiv">
        <Link href="/">
          <Image
            src="/favicon.png"
            width={800}
            height={500}
            alt="App icon"
            className="h-14 w-14 p-0 transition-all duration-300 hover:scale-125"
          />
        </Link>
      </div>

      <ul
        className={`flex items-center justify-between gap-14 mr-11 text-white font-semibold text-lg z-50 mobile ${
          isMenuOpen
            ? "right-[-42px] opacity-100"
            : "right-[1000px] opacity-0 md:opacity-100"
        } transition-all duration-300`}
      >
        {["shop_now", "Account", "About", "Contact_Us"].map((value, index) => (
          <li
            key={index}
            className="transition-all duration-300 hover:scale-110"
          >
            <Link
              href={`${value === "shop_now" ? "#quickShow" : `/${value}`}`}
              className="transition-all duration-300 inline-block hover:underline hover:decoration-white decoration-transparent capitalize"
            >
              {value.replace("_", " ")}
            </Link>
          </li>
        ))}
      </ul>
      <div
        id="MenuSwitch"
        onClick={switchMenu}
        className="mr-1 hidden cursor-pointer text-white rounded"
      >
        {!isMenuOpen ? (
          <Menu
            size={35}
            strokeWidth={2.75}
            className={`transition-all duration-300 ${show && "rotate-180"}`}
          />
        ) : (
          <X
            size={35}
            color="#ffffff"
            strokeWidth={2.75}
            className={`transition-all duration-300 ${show && "rotate-180"}`}
          />
        )}
        <p className="font-semibold text-lg ml-0.5">Account</p>
      </div>
    </nav>
  );
};

export default HomeNav;
