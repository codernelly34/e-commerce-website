import ProductsList from "@/utils/productsList.js";
import { X, ShoppingCart } from "lucide-react";
import Image from "next/image.js";

export const ProductDetails = ({ setShowDetails, productID }) => {
  const product = ProductsList.filter((product) => product.id === productID);

  return (
    <div
      id="ProductDetails"
      className="h-screen w-full left-0 overflow-hidden fixed top-0 z-50 flex justify-center items-center"
    >
      <div
        id="ProductCard"
        className="flex flex-col z-auto w-[21rem] rounded-lg shadow-[0px_0px_1px_#d4d4d4] bg-white"
      >
        <span
          className="cursor-pointer p-1 border-b border-black"
          onClick={() => setShowDetails(false)}
        >
          <X size={25} strokeWidth={2.3} className="float-end" />
        </span>
        <h2 className="text-center font-semibold my-3">{product[0].title}</h2>
        <div
          style={{
            width: "250px",
            height: "150px",
            position: "relative",
            margin: "0 auto",
          }}
          className="border border-[#333] rounded"
        >
          <Image
            src={product[0].imageUrl}
            alt="example"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div id="detailsInfo" className="p-2 ">
          <p className="text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde autem
            harum omnis nihil, veritatis dolor?
          </p>
          <div className="mt-2 pl-6">
            <ul className="list-disc font-semibold text-base text-[#333] flex flex-col gap-1">
              <li>texting to</li>
              <li>texting to</li>
              <li>texting to</li>
            </ul>
          </div>
          <button className="flex items-center justify-center gap-4 border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white rounded font-semibold transition-[background-color_color] duration-300 ease-linear w-full py-1.5 cursor-pointer mt-4">
            Buy now
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
