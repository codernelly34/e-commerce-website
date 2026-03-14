"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import roboto from "@/utils/fonts";
import Image from "next/image.js";
import { useShopping } from "@/context/ShoppingContext";

const Navbar = () => {
  const { totalQuantity, totalPrice, setShowSummary } = useShopping();

  return (
    <>
      <nav
        className={`flex items-center justify-between p-4 bg-gray-900 text-white shadow ${roboto.className}`}
      >
        <div className="">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/favicon.png"
              width={800}
              height={500}
              alt="App icon"
              className="h-14 w-14 p-0 transition-all duration-300 hover:scale-125"
            />
            <h1 className="hidden md:block text-xl font-semibold">
              Electro Tech
            </h1>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <Link
              href="/products"
              className="hover:scale-110 transition-all duration-300 underline text-blue-300"
            >
              Shop Products
            </Link>

            <Link
              href={"/shop"}
              className="flex items-center gap-1 hover:scale-110 transition-all duration-300 underline text-blue-300"
            >
              <ShoppingCart size={24} />
              <span className="text-sm">
                {totalQuantity} item{totalQuantity === 1 ? "" : "s"} | XAF{" "}
                {totalPrice.toFixed(2)} frs
              </span>
            </Link>
          </div>

          <button
            onClick={() => setShowSummary(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-4 py-2 rounded shadow transition duration-300 cursor-pointer"
          >
            Confirm & Pay
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
