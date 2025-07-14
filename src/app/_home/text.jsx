"use client";

import { motion } from "framer-motion";
import Link from "next/link.js";

const Text = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="heroContent text-white pr-2"
    >
      <div className="hover:bg-gray-600 active:bg-gray-600 p-2">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Your One-Stop Shop for Electrical & Solar Solutions
        </h2>
        <p className="font-medium text-lg">
          Shop quality Electrical and Solar equipment, and hire experts for
          installation and maintenance services — all in one place
        </p>
      </div>
      <div className="flex items-center justify-normal gap-4 mt-6">
        <Link
          href="#quickShow"
          className="inline-block bg-white text-black px-7 py-2 font-semibold transition-all duration-300 hover:bg-black hover:text-white decoration-transparent hover:underline hover:decoration-green-600 whitespace-nowrap"
        >
          Shop Now
        </Link>
        <Link
          href="#"
          className=" inline-block bg-white text-black px-7 py-2 font-semibold transition-all duration-300 hover:bg-black hover:text-white decoration-transparent hover:underline hover:decoration-green-600 whitespace-nowrap"
        >
          Book a Service
        </Link>
      </div>
    </motion.div>
  );
};

export default Text;
