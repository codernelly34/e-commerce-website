import Image from "next/image.js";
import Link from "next/link.js";

const Card = () => {
  return (
    <div
      id="card"
      className="z-auto w-[20.5rem] md:w-[17.5rem] rounded-lg shadow-[0px_0px_50px_#d4d4d4] scale-95"
    >
      <span
        className="block"
        style={{ width: "300px", height: "200px", position: "relative" }}
      >
        <Image
          src="/imgs/charge-1.jpg"
          alt="example"
          fill
          style={{ objectFit: "contain" }}
        />
      </span>
      <span className="block text-center p-1.5">
        <p className="font-medium">40amps MPPT Solar Charge Controller</p>
        <h2 className="font-semibold text-[#333] text-xl md:text-2xl pt-2 pb-2">
          XAF 20,000frs
        </h2>
        <Link
          href="#"
          className="block border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white  py-2 m-2 rounded font-medium transition-all duration-300 ease-linear"
        >
          Buy now
        </Link>
      </span>
    </div>
  );
};

export default Card;
