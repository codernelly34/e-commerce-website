import Image from "next/image.js";

const services = [
  {
    name: "Solar Installation",
    imgUlr: "/imgs/Shape1.png",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing  elit. Error veniam velit accusamus, exercitationem vitae vel    aliquid magni possimus deserunt ea odit rem aperiam quisquam, ab    debitis eaque asperiores non in.`,
  },
  {
    name: "Electrical Installation",
    imgUlr: "/imgs/Shape1.png",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing  elit. Error veniam velit accusamus, exercitationem vitae vel    aliquid magni possimus deserunt ea odit rem aperiam quisquam, ab    debitis eaque asperiores non in.`,
  },
  {
    name: "Maintenance / Fault Finding",
    imgUlr: "/imgs/Shape1.png",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing  elit. Error veniam velit accusamus, exercitationem vitae vel    aliquid magni possimus deserunt ea odit rem aperiam quisquam, ab    debitis eaque asperiores non in.`,
  },
  {
    name: "Supply of Equipment",
    imgUlr: "/imgs/Shape1.png",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing  elit. Error veniam velit accusamus, exercitationem vitae vel    aliquid magni possimus deserunt ea odit rem aperiam quisquam, ab    debitis eaque asperiores non in.`,
  },
];

const ServiceArea = () => {
  return (
    <section id="ServiceArea" className="pt-16 mb-8">
      <h1 className="text-2xl font-bold my-8 text-center">Our Services</h1>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center justify-items-center sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-72 md:w-96 p-2"
            style={{
              borderBottom: "8px solid orange",
              borderBottomLeftRadius: "14px",
              borderTopLeftRadius: "4px",
              borderBottomRightRadius: "14px",
              borderTopRightRadius: "4px",
              boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Image
              src={service.imgUlr}
              className="object-contain"
              alt="Customer"
              width={400}
              height={300}
            />
            <h2 className="py-2 font-semibold text-lg  md:text-xl">
              {service.name}
            </h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceArea;
