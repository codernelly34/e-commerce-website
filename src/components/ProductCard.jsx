import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const ProductCard = ({ title, imageUrl, currency, price, onClick, id }) => {
  const router = useRouter();

  const handleNavigate = useCallback(() => {
    if (id == null) return;
    router.push(`/shop?product=${id}`);
  }, [router, id]);

  return (
    <div className="flex py-1.5 z-auto shadow-[0px_0px_4px_#918f8f]">
      <div className="w-[220px] h-[190px] relative">
        <Image
          src={imageUrl}
          alt={title || "Product image"}
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>
      <span className="block px-1.5 m-auto">
        <p className="py-1 w-[8rem] md:w-[9rem] lg:w-[14rem]">{title}</p>
        <h2 className="pb-4 font-bold text-[#333] text-lg md:text-xl mt-2">
          {currency} {price}frs
        </h2>

        <button
          type="button"
          className="inline-block border border-gray-400 rounded font-medium w-full py-1 cursor-pointer transition-[scale] duration-300 ease-linear hover:scale-95 mb-1.5"
          title={`See details for ${title}`}
          aria-label={`Details for ${title}`}
          onClick={() => onClick?.(id)}
        >
          Details
        </button>
        <button
          onClick={handleNavigate}
          className="flex items-center justify-center gap-1.5 border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white rounded font-semibold transition-[background-color_color] duration-300 ease-linear w-full py-1 px-1 cursor-pointer"
          aria-label={`Buy ${title}`}
        >
          Buy now
          <ShoppingCart size={18} />
        </button>
      </span>
    </div>
  );
};

export default ProductCard;
