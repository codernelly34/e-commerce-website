import ProductsList from "@/utils/productsList.js";
import { X, ShoppingCart } from "lucide-react";
import Image from "next/image.js";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export const ProductDetails = ({ setShowDetails, productID, showDetails }) => {
  const router = useRouter();
  const Link = () => {
    router.push(`/shop?product=${productID}`);
  };
  const product = ProductsList.filter((product) => product.id === productID);

  return (
    <AnimatePresence>
      {showDetails && (
        <motion.div
          className=" fixed inset-0 z-[9999] bg-black/50 grid place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            id="ProductCard"
            className="flex flex-col z-auto m-2 rounded-lg bg-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <span
              className="cursor-pointer p-1 border-b border-black text-red-500"
              onClick={() => setShowDetails(false)}
            >
              <X size={25} strokeWidth={2.3} className="float-end" />
              <b className="float-end">Close</b>
            </span>
            <h2 className="text-center font-semibold my-3">
              {product[0].title}
            </h2>
            <div className="w-[200px] h-[200px] relative mx-auto">
              <Image
                src={product[0].imageUrl}
                alt={product[0].title || "Product image"}
                fill
                className="object-contain"
                sizes="200px"
              />
            </div>
            <div id="detailsInfo" className="p-2 ">
              <p className="text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                autem harum omnis nihil, veritatis dolor?
              </p>
              <div className="mt-2 pl-6">
                <ul className="list-disc font-semibold text-base text-[#333] flex flex-col gap-1">
                  <li>texting to</li>
                  <li>texting to</li>
                  <li>texting to</li>
                </ul>
              </div>
              <button
                onClick={Link}
                className="w-1/2 md:w-2/5 flex items-center justify-center gap-3 border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white rounded font-semibold transition-[background-color_color] duration-300 ease-linear py-1.5 cursor-pointer mx-auto mt-4"
              >
                Buy now
                <ShoppingCart size={18} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
