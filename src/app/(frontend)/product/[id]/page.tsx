"use client";
import Image from "next/image";
import React from "react";
import { useGetSingleProductQuery } from "../../../../../Redux/features/product/productApi";
import Link from "next/link";
import Loading from "@/shared/Loading";
import { ApiResponse, Item } from "@/shared/interface/interface";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../../Redux/features/cart/cartSlice";

type ProductProps = {
  params: {
    id: string;
    slug: string;
  };
};

const ProductDetails: React.FC<ProductProps> = ({ params }) => {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useGetSingleProductQuery(
    params.id,
    {}
  ) as unknown as any;

  let product;

  if (isLoading) {
    product = <Loading />;
  }
  if (error) {
    product = (
      <div className="text-red-500 text-center pt-6">
        {error?.data?.message}
      </div>
    );
  }

  if (!isLoading && !error && data && data.data) {
    const item: Item = data.data;
    product = (
      <>
        <div className=" flex flex-wrap items-center">
          <Image
            alt="ecommerce"
            src={item.image}
            width={500} // Placeholder width
            height={500} // Placeholder height
            className="p-5 lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          />
          <div className="lg:w-1/2 w-full lg:p-12 rounded-lg lg:py-6 mt-6 lg:mt-0 shadow-[0px_4px_80px_rgba(0,0,0,0.2)] ">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {item.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-3">
              {item.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{item.description}</p>

            <div className="flex mt-10 items-center justify-between">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${item.price}
              </span>
              <button
                onClick={() =>
                  dispatch(
                    addItem({
                      id: item._id,
                      name: item.name,
                      image: item.image,
                      price: Number(item.price),
                      quantity: 1,
                    })
                  )
                }
                className="cursor-pointer hover:translate-y-[-5px] ease-in-out duration-300 hover:shadow-[0px_4px_80px_rgba(0,0,0,0.1)] bg-[#fb2e86] rounded-[5px] mr-[10px] xss:text-center xss:px-[15px] md:px-[47px] py-[8px] text-white bg-primary  hover:bg-secondary"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 py-24 ">{product}</div>
    </section>
  );
};
export default ProductDetails;
