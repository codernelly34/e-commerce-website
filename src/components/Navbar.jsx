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
            <h1 className="text-xl font-semibold">Electro Tech</h1>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/products" className="hover:underline">
            Shop Products
          </Link>
          <Link href="/shop" className="hover:underline">
            My Cart
          </Link>

          <div className="flex items-center gap-3">
            <ShoppingCart size={24} />
            <span className="text-sm">
              {totalQuantity} item{totalQuantity === 1 ? "" : "s"} | XAF{" "}
              {totalPrice.toFixed(2)} frs
            </span>
          </div>

          <button
            onClick={() => setShowSummary(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-4 py-2 rounded shadow transition duration-300"
          >
            Confirm & Pay
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
