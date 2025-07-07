import Image from "next/image.js";
import { ShoppingCart } from "lucide-react";

const Card = ({ title, imageUrl, currency, price }) => {
  return (
    <div
      id="card"
      className="flex flex-col z-auto w-[20.5rem] lg:w-[17.5rem] h-[25rem] rounded-lg shadow-[0px_0px_4px_#d4d4d4] "
    >
      <div
        style={{
          width: "300px",
          height: "200px",
          position: "relative",
          margin: "auto",
        }}
      >
        <Image
          src={imageUrl}
          alt="example"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <span className="block text-center p-1.5">
        <p className="font-medium pt-2">{title}</p>
        <h2 className="font-bold text-[#333] text-xl md:text-2xl mt-4 mb-4">
          {currency} {price}frs
        </h2>
      </span>
      <div className="flex items-center gap-2 p-2 mt-auto">
        <button
          type="button"
          className="inline-block border border-gray-400 rounded font-medium w-full py-1 cursor-pointer transition-[scale] duration-300 ease-linear hover:scale-95"
          title="click this button to see more info about this product"
        >
          Details
        </button>
        <button className="flex items-center justify-center gap-1.5 border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white rounded font-semibold transition-[background-color_color] duration-300 ease-linear w-full py-1 px-1 cursor-pointer">
          Buy now
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
};

export default Card;
