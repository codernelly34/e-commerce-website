import React from "react";
import Image from "next/image.js";
import Link from "next/link.js";

const Testimonial = () => {
  return (
    <div id="testimonial" className="p-2 my-20">
      <h2 className="text-center text-2xl font-semibold my-4">
        Customer Success Stories
      </h2>
      <p className="m-3 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ad! Lorem
        ipsum dolor sit amet.
      </p>
      <section className="pt-10 flex justify-center items-center flex-wrap gap-8">
        <CustomerTestimonial />
        <CustomerTestimonial />
        <CustomerTestimonial />
      </section>
      <p className="ml-4 mt-4">
        See more testimonial{" "}
        <Link href="#" className="A">
          here
        </Link>
      </p>
    </div>
  );
};

const CustomerTestimonial = () => {
  return (
    <span
      className="inline-block w-64 text-center p-2 rounded"
      style={{ boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.3)" }}
    >
      <div className="flex justify-center items-center">
        <Image
          src="/imgs/charge-1.jpg"
          className=" object-contain rounded-full w-25 h-25"
          alt="Customer"
          width={400}
          height={300}
        />
      </div>
      <h2 className="font-bold">Ambu Nelly</h2>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque quam
        illum, sit laboriosam porro, esse
      </p>
    </span>
  );
};

export default Testimonial;
