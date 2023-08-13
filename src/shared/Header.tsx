"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgChevronDownO } from "react-icons/cg";
import { useRouter } from "next/navigation";
import Loading from "./Loading";

const Header: React.FC = () => {
  const [mobile, SetMobile] = useState<boolean>(false);
  const [color, setColor] = useState<boolean>(false);
  const [dashboard, setDashboard] = useState<boolean>(false);
  const router = useRouter();

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
    }
    router.refresh();
  };

  const user = typeof window !== "undefined" && localStorage.getItem("user");

  // menu

  const menu: JSX.Element = (
    <>
      <li className="mr-[10px] p-[10px] text-primary">
        <Link href={"/"}>Home </Link>
      </li>
      <li className="mr-[10px] p-[10px] text-primary">
        <Link href={"/product"}>Products</Link>
      </li>
      <li className="mr-[10px] p-[10px] text-primary">
        <Link href={"/cart"}>Cart</Link>
      </li>

      {user ? (
        <div className="relative flex justify-center items-center ">
          <div
            onClick={() => setDashboard(!dashboard)}
            className="cursor-pointer flex gap-2 items-center  online "
          >
            <CgChevronDownO className="cursor-pointer " />
          </div>
          <div
            className={`${
              dashboard ? "block" : "hidden"
            } cursor-pointer flex flex-col mr-[10px] p-[15px] shadow-2xl bg-white absolute top-[110%] right-0 `}
          >
            <li className="mt-[10px]">
              <Link href={"/dashboard"}>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="mt-[10px]" onClick={logout}>
              <span>Log Out</span>
            </li>
          </div>
        </div>
      ) : (
        <Link href={"/login"} className="flex items-center">
          <button className="cursor-pointer hover:translate-y-[-5px] ease-in-out duration-300 hover:shadow-[0px_4px_80px_rgba(0,0,0,0.1)] bg-[#fb2e86] rounded-[5px] mr-[10px] xss:text-center xss:px-[15px] md:px-[47px] py-[2px] text-white bg-primary  hover:bg-secondary">
            Login
          </button>
        </Link>
      )}
    </>
  );

  const changeBg = () => {
    if (typeof window !== "undefined") {
      // Access window here
      if (window.scrollY >= 70) {
        return setColor(true);
      } else {
        return setColor(false);
      }
    }
  };
  if (typeof window !== "undefined")
    window.addEventListener("scroll", changeBg);

  return (
    <header
      className={`xss:px-[20px] sm:p-[0px] z-50   ${
        color
          ? "bg-white shadow-[0px_4px_80px_rgba(0,0,0,0.1)] fixed left-0 right-0 top-0"
          : "bg-transparent  absolute left-0 right-0 top-0 "
      }`}
    >
      <div className="max-w-[1200px] mx-auto bg-transparent">
        <div>
          <div className="sm:p-[10px] lg:p-[20px] grid grid-cols-4">
            <div className="col-span-1 relative flex items-center">
              <Link href={"/"}>
                <span className="font-bold sm:w-[150px] text-2xl p-5">
                  commerce
                </span>
              </Link>
            </div>
            {/* mobile responsive start */}
            <div
              className="xss:col-span-3 md:hidden flex justify-end transition"
              onClick={() => SetMobile(!mobile)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>

            <div className="hidden md:block md:col-span-3 ">
              <ul
                onClick={() => SetMobile(!mobile)}
                className={` md:flex justify-end  ${
                  mobile ? "block" : "hidden"
                }`}
              >
                {menu}
              </ul>
            </div>
          </div>
          {/* mobile responsive code  */}
          <div className="xss:w-full xss:absolute xss:left-0 xss:top-[67px]  md:hidden ">
            <ul
              onClick={() => SetMobile(!mobile)}
              className={`xss:p-[20px]  xss:bg-white  md:bg-transparent ${
                mobile ? "block" : "hidden"
              }`}
            >
              {menu}
            </ul>
          </div>
          {/* mobile responsive code  */}
        </div>
      </div>
    </header>
  );
};
export default Header;
