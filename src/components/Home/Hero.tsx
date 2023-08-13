import Image from "next/image";
import React from "react";

import heroProduct from "../../images/hero/hero product .svg";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="bg-[#f2f0ff] p-10">
      <div className="max-w-[1200px] mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <span className="text-base text-[#fb2e86]">
            Best Furniture For Your Castle....
          </span>
          <h1 className="title-font sm:text-4xl text-3xl my-4 font-medium text-gray-900">
            New Furniture Collection Trends in 2020
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <div className="flex justify-center">
            <button className="cursor-pointer hover:translate-y-[-5px] ease-in-out duration-300 hover:shadow-[0px_4px_80px_rgba(0,0,0,0.1)] bg-[#fb2e86] rounded-[5px] mr-[10px] xss:text-center xss:px-[15px] md:px-[47px] py-[8px] text-white bg-primary  hover:bg-secondary">
              Shop Now
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={heroProduct}
            style={{
              maxWidth: "100%", // Make the image scale within its container
              height: "auto", // Maintain aspect ratio
            }}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
