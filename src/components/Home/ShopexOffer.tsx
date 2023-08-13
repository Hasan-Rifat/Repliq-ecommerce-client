import React from "react";
import offer1 from "../../images/offer/offer 1.svg";
import offer2 from "../../images/offer/offer 2.svg";
import offer3 from "../../images/offer/offer 3.svg";
import offer4 from "../../images/offer/offer 4.svg";
import Image from "next/image";

type ShopeOfferProps = {};

const ShopeOffer: React.FC<ShopeOfferProps> = () => {
  const data = [
    {
      id: 1,
      img: offer1,
      title: "Free Shipping ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 2,
      img: offer2,
      title: "100% Money Back",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 3,
      img: offer3,
      title: "Online Shopping ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 4,
      img: offer4,
      title: "24/7 Support ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ];

  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-5 py-24 ">
        <div>
          <div className="flex flex-col text-center w-full ">
            <h1 className="text-[#1A0B5B] text-4xl font-bold text-center my-10">
              What Shopex Offer!
            </h1>
          </div>
          <div className=" grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-5 grid  ">
            {data.map((item) => (
              <div
                key={item.id}
                className="p-5 bg-white cursor-pointer  text-center pt-[34px] pb-[39px] px-[50px] rounded-[10px] hover:translate-y-[-5px] ease-in-out duration-300  shadow-[0px_4px_80px_rgba(0,0,0,0.1)]  "
              >
                <div>
                  <Image
                    src={item.img}
                    alt={item.img}
                    height={65}
                    width={65}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-lg font-semibold my-5 text-center text-[#151874]">
                  {item.title}
                </h3>
                <p className="text-center text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShopeOffer;
