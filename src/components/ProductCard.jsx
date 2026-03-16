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
    <div className="w-[360px] sm:w-[300px] shadow-[0px_0px_4px_#918f8f] rounded">
      <div className="flex flex-row sm:flex-col ">
        <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] relative sm:mx-auto">
          <Image
            src={imageUrl}
            alt={title || "Product image"}
            sizes="(min-width: 640px) 200px, 150px"
            priority
            fill
            className="object-contain"
          />
        </div>
        <div className="ml-2.5 mt-2.5">
          <p className="py-1 w-[230px] sm:w-full sm:h-[130px] text-sm sm:text-base">
            {title}
          </p>
          {/* w-[8rem] md:w-[9rem] lg:w-[14rem] */}
          <h2 className="font-bold text-[#333] text-lg md:text-xl mt-1">
            {currency} {price}frs
          </h2>
        </div>
      </div>
      <span className="flex flex-row gap-1.5 mx-1 mt-3">
        <button
          type="button"
          className="inline-block border border-gray-400 rounded font-medium w-full h-[40px] cursor-pointer transition-[scale] duration-300 ease-linear hover:scale-95 mb-1.5"
          title={`See details for ${title}`}
          aria-label={`Details for ${title}`}
          onClick={() => onClick?.(id)}
        >
          Details
        </button>
        <button
          onClick={handleNavigate}
          className="inline-flex items-center justify-center gap-1 border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white rounded font-medium transition-[background-color_color] duration-300 ease-linear w-full h-[40px] cursor-pointer"
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
