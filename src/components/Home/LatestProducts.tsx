"use client";

import Image from "next/image";
import React from "react";
import { useGetAllProductQuery } from "../../../Redux/features/product/productApi";
import Loading from "@/shared/Loading";
import { ApiResponse, Item } from "@/shared/interface/interface";
import Link from "next/link";

interface LatestProductsProps {
  error?: ApiResponse;
  isLoading: boolean;
  data?: {
    data: Item[];
  };
  isError?: boolean;
}

const LatestProducts: React.FC<LatestProductsProps> = () => {
  const { error, isError, isLoading, data } = useGetAllProductQuery(
    {},
    {}
  ) as LatestProductsProps;

  let product;

  if (isLoading) {
    product = <Loading />;
  }
  if (isError) {
    product = (
      <div className="text-red-500 text-center pt-6">
        {error && error?.data?.message}
      </div>
    );
  }

  /*   console.log(
      !isLoading && !error && data && data.data.map((item: Item) => item.image)
    ); */

  // all products
  if (!isLoading && !error && data && data.data.length > 0) {
    product = data.data.slice().map((item: Item) => (
      <div
        key={item._id}
        className="w-full shadow-[0px_4px_80px_rgba(0,0,0,0.2)]  rounded-lg bg-[#ffffff"
      >
        <div className="block relative h-48 rounded overflow-hidden ">
          <Image
            alt="ecommerce"
            className="p-5"
            src={item.image}
            width={360} // Placeholder width
            height={360} // Placeholder height
          />
        </div>
        <div className="mt-4 p-5 bg-[#f7f7f7]">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {item.category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {item.name}
          </h2>
          <div className="flex justify-between items-center my-2">
            <p className="mt-1 text-[#1a0b5b]">${item.price}</p>
            <Link href={`product/${item._id}`}>
              <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                buy
              </button>
            </Link>
          </div>
        </div>
      </div>
    ));
  }
  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-5 pb-24 ">
        <div>
          <h3 className="text-[#1A0B5B] text-4xl font-bold text-center my-5">
            Latest Products
          </h3>
          <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-5">
            {product}
          </div>
        </div>
      </div>
    </section>
  );
};
export default LatestProducts;
