"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useShopping } from "@/context/ShoppingContext";

const SummaryModal = () => {
  const {
    quantities,
    productsToShop,
    totalQuantity,
    totalPrice,
    showSummary,
    setShowSummary,
  } = useShopping();

  return (
    <AnimatePresence>
      {showSummary && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-[90%] max-w-lg rounded-lg shadow-lg p-6 relative overflow-auto max-h-[80vh]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button
              onClick={() => setShowSummary(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black transition"
            >
              <X size={26} />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">
              Order Summary
            </h2>

            {productsToShop.length === 0 ? (
              <p className="text-center text-gray-500">
                Your shopping list is empty.
              </p>
            ) : (
              <>
                <ul className="space-y-4 overflow-y-auto max-h-[50vh] pr-2">
                  {productsToShop.map((product) => (
                    <li
                      key={product.id}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <div>
                        <p className="font-medium">{product.title}</p>
                        <p className="text-sm text-gray-500">
                          XAF {product.price} × {quantities[product.id]}
                        </p>
                      </div>
                      <p className="font-semibold">
                        XAF {product.price * quantities[product.id]}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Total Quantity</span>
                    <span>{totalQuantity}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Total Price</span>
                    <span className="font-semibold">
                      XAF {totalPrice.toFixed(2)} frs
                    </span>
                  </div>

                  <button
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded transition"
                    onClick={() => {
                      showSummary(false);
                      alert("Proceeding to payment...");
                    }}
                  >
                    Proceed to Payment
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SummaryModal;
