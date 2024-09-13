"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import Container from "../Container/Container";
import { SiSmart } from "react-icons/si";
import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "@/Redux/shoppingSlice";
import { Products } from "../../../type";

const Header = () => {
  const { data: session } = useSession();
// @ts-ignore
  const selector = useSelector((state) => state.shopping.productData);
  const disPatch = useDispatch()




  const [amount, setAmount] = useState(0);

  useEffect(() => {
    let amt = 0;
    selector.map((item:Products) => {
      amt += item.price * item.quantity;
      return;
    });
    setAmount(amt)
  }, [selector]); 


  useEffect(() => {
    if (session) {
      disPatch(
        addUser({
          name: session.user?.name,
          email: session.user?.email,
          image: session.user?.image,
        })
      );
    } else {
      disPatch(deleteUser());
    }
  }, [session, disPatch]);




  return (
  
      <div className="sticky px-20  top-0 w-full z-50 p-4 bg-gray-100 shadow-md text-gray-800">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center">
            <Link href={"/"}>
              <h1 className="text-2xl flex items-center gap-1 font-extrabold text-green-500 hover:text-blue-700 cursor-pointer transition duration-300">
                <SiSmart />
                Smart
              </h1>
            </Link>
          </div>
          <div className="flex-grow mx-4 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-10 rounded-full border border-orange-600 focus:outline-none focus:shadow-md focus:border-blue-600 transition duration-300"
            />
            <span className="absolute top-2.5 left-4 text-gray-500">
              <FaSearch />
            </span>
          </div>

          {session?.user ? (
            <div className="flex items-center space-x-4">
              <Image
                className="w-12 h-12 rounded-full border-2 border-blue-600"
                src={session?.user?.image!}
                alt="profileImage"
                height={200}
                width={200}
              />
              <div>
                <h1 className="text-sm text-gray-600">{session.user.name}</h1>
                <h1 className="text-lg hover:text-blue-600 cursor-pointer transition duration-300">
                  {session.user.email}
                </h1>
              </div>
              <h1
                onClick={() => signOut()}
                className="text-lg text-blue-600 hover:text-white hover:bg-blue-600 cursor-pointer px-3 py-1 rounded-full transition duration-300"
              >
                Log Out
              </h1>
            </div>
          ) : (
            <div
              onClick={() => signIn()}
              className="flex items-center space-x-4 hover:text-blue-600 cursor-pointer transition duration-300"
            >
              <FaUser className="w-10 h-10 text-gray-600 hover:text-blue-600 cursor-pointer transition duration-300" />
              <h1 className="text-lg">Login/Register</h1>
            </div>
          )}
          <Link href={"/cart"}>
            <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
              <IoMdCart className="text-xl" />
              <p className="text-sm font-semibold">{amount}</p>
              <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
                {selector.length ? selector.length : "0"}
              </span>
            </div>
          </Link>
        </div>
      </div>

  );
};

export default Header;
