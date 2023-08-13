"use client";

import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { useCreateOrderMutation } from "../../../../../Redux/features/order/orderApiSlice";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface CartItem {
  id: string; // Change the type of id to string
  name: string;
  price: number;
  image: string;
  quantity: number;
}
const Cart: React.FC = () => {
  const router = useRouter();
  const [createOrder, { isLoading, data, error }] =
    useCreateOrderMutation() as unknown as any;
  const cart = useSelector((state: any) => state.cart);
  if (isLoading) {
    toast.loading("Loading...", {
      id: "loading",
    });
  }

  if (!isLoading && error) {
    toast.remove("loading");
    toast.error(error.data?.message as string);
  }

  if (data) {
    toast.remove("loading");
    toast.success(data.message);

    router.push("/");
  }

  const user = typeof window !== "undefined" && localStorage.getItem("user");

  const totalPrice = cart.reduce(
    (acc: number, item: CartItem) => acc + item.price * item.quantity,
    0
  );

  const total = (totalPrice + totalPrice * 0.05).toFixed(2);

  const orderHandler = () => {
    const allOrder = cart.map((item: CartItem) => {
      return {
        productId: item.id,
      };
    });
    const data = {
      email: user && JSON.parse(user).email,
      totalPrice: total,
      products: allOrder,
    };

    console.log(data);
    // createOrder(data);
  };

  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-5 py-24 ">
        <div>
          <div className="bg-[#f6f5ff] p-5 mb-10 rounded-2xl">
            <h3 className="text-[#1A0B5B] text-4xl font-bold my-5 ">Cart</h3>
            <span>Home {">"} Cart</span>
          </div>
          <div className="">
            <div className="justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                {cart.map((item: CartItem) => (
                  <div
                    key={item.id}
                    className="justify-between mb-6 bg-white p-6 sm:flex sm:justify-start shadow-[0px_4px_80px_rgba(0,0,0,0.1)]  rounded-lg"
                  >
                    <Image
                      src={item.image}
                      width={160}
                      height={160}
                      alt="product-image"
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {item.name}
                        </h2>
                        <p className="mt-1 text-xl text-gray-700">
                          ${item.price}
                        </p>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <p className="mt-1 text-sm text-[#1a0b5b] w-[30px] h-[30px] rounded-full bg-[#fb2e86] flex items-center justify-center">
                            <span>{item.quantity}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Sub total */}
              <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-[0px_4px_80px_rgba(0,0,0,0.1)] md:mt-0  md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">${totalPrice}</p>
                </div>

                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold text-right">
                      ${total}
                    </p>
                    <p className="text-sm text-gray-700">5% VAT including </p>
                  </div>
                </div>
                <button
                  onClick={orderHandler}
                  className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cart;
