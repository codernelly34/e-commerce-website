import Image from "next/image.js";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

const Card = ({ title, imageUrl, currency, price, onClick, id }) => {
  const router = useRouter();

  const Link = () => {
    router.push(`/shop?product=${id}`);
  };

  return (
    <div
      id="ProductCard"
      className="flex py-1.5 w-full md:w-2/5 z-auto shadow-[0px_0px_4px_#918f8f] "
    >
      <div
        style={{
          width: "220px",
          height: "190px",
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
      <span className="block px-1.5">
        <p className="py-1 w-[8rem] md:w-[14rem]">{title}</p>
        <h2 className="pb-4 font-bold text-[#333] text-lg md:text-xl mt-2">
          {currency} {price}frs
        </h2>

        <button
          type="button"
          className="inline-block border border-gray-400 rounded font-medium w-full py-1 cursor-pointer transition-[scale] duration-300 ease-linear hover:scale-95 mb-1.5"
          title="click this button to see more info about this product"
          onClick={() => onClick(id)}
        >
          Details
        </button>
        <button
          onClick={Link}
          className="flex items-center justify-center gap-1.5 border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white rounded font-semibold transition-[background-color_color] duration-300 ease-linear w-full py-1 px-1 cursor-pointer"
        >
          Buy now
          <ShoppingCart size={18} />
        </button>
      </span>
    </div>
  );
};

export default Card;
