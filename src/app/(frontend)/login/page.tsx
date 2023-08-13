"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useUserLoginMutation } from "../../../../Redux/features/user/userApi";
import {
  ApiResponse,
  IUser,
  IUserState,
  User,
} from "@/shared/interface/interface";
import { useRouter } from "next/navigation";

import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { setUser } from "../../../../Redux/features/user/userSlice";

interface ILogin {
  error?: ApiResponse;
  isLoading: boolean;
  isSuccess?: boolean;
  data?: {
    data: User;
  };
  userLogin?: () => void;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [userLogin, { error, data, isLoading }] =
    useUserLoginMutation() as unknown as ILogin[] | any;

  const router = useRouter();

  const [password, setPassword] = useState(false);

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
    toast.success("Login Successfully");

    const newData: IUser = {
      email: data.data.email,
      role: data.data.role,
      token: data.token,
    };

    dispatch(setUser(newData));

    typeof window !== "undefined" &&
      localStorage.setItem("user", JSON.stringify(newData));

    const navigateTo = router.back() === undefined ? "/" : router.back();

    navigateTo && router.push(navigateTo);
  }

  const loginHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget; // Access the currentTarget of the event

    const email = form.email.value;
    const password = form.password.value;

    if (email && password) {
      userLogin({ email, password });
    }
  };
  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className=" ">
          <div className={`px-5 pt-[42px]   pb-10 `}>
            {" "}
            <div className="w-full flex items-center h-[80vh]">
              <div className="mt-[35px] w-1/2 mx-auto">
                <form onSubmit={loginHandler} className="px-5">
                  <p>Login your account</p>
                  <h2 className="text-2xl lg:text-[40px] leading-[56px] text-black font-bold mb-10">
                    eCommerce store
                  </h2>

                  <div className="mb-6">
                    <input
                      className="appearance-none border border-[#C4C4C4] rounded w-full p-[19px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="mb-6 relative">
                    <input
                      className="appearance-none border border-[#C4C4C4] rounded w-full p-[19px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
                      id="paymentEmail"
                      type={password ? "text" : "password"}
                      placeholder="Password*"
                      name="password"
                    />
                    <span
                      onClick={() => setPassword(!password)}
                      className="absolute top-1/2 right-[0%] transform -translate-x-full -translate-y-1/2 cursor-pointer"
                    >
                      {password ? <BsEyeSlashFill /> : <BsEyeFill />}
                    </span>
                  </div>
                  <div className="mt-[48px]">
                    <button
                      className="cursor-pointer hover:translate-y-[-5px] ease-in-out duration-300 hover:shadow-[0px_4px_80px_rgba(0,0,0,0.1)] bg-[#fb2e86] rounded-[5px] mr-[10px] xss:text-center xss:px-[15px] md:px-[47px] py-[8px] text-white bg-primary  hover:bg-secondary w-full"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <div className="mt-[20px]">
                    <p className="text-[#5D7183] text-center">
                      Don&apos;t have an account?{" "}
                      <Link className="text-[#FB2E86]" href="/register">
                        Register
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
