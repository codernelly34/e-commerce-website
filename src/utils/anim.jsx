"use client";

import { motion } from "framer-motion";

const boxVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Products = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Hello Framer Motion</h1>
      </motion.div>{" "}
      <motion.div
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        className="p-6 bg-blue-500 text-white rounded-lg"
      >
        Animated Box
      </motion.div>
    </div>
  );
};

export default Products;
