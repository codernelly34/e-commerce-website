import Image from "next/image.js";
import Link from "next/link.js";

const Card = ({ title, imageUrl, currency, price }) => {
  return (
    <div
      id="card"
      className="z-auto w-[20.5rem] md:w-[17.5rem] rounded-lg shadow-[0px_0px_4px_#d4d4d4] "
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
        <div className="flex items-center gap-4 p-2">
          <button
            type="button"
            className="inline-block border border-gray-400 rounded font-medium transition-all duration-300 ease-linear w-2/4 py-1 cursor-pointer"
          >
            Details
          </button>
          <Link
            href="#"
            className="inline-block border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white rounded font-semibold transition-all duration-300 ease-linear w-2/4 py-1"
          >
            Buy now
          </Link>
        </div>
      </span>
    </div>
  );
};

export default Card;
