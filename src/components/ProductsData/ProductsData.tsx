"use client";

import Image from "next/image";
import { ItemProps } from "../../../type";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addTocart } from "@/Redux/shoppingSlice";
import toast from "react-hot-toast";

const ProductsData = ({ item }: ItemProps) => {

  const startArray = Array.from({ length: item?.rating }, (_, index) => (
    <span key={index} className="text-yellow-400">
      <IoIosStar />
    </span>
  ));

  const disPatch = useDispatch()
  console.log(disPatch)

  const discount = Math.round(
    ((item.oldPrice - item.price) / item.oldPrice) * 100
  );

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white text-black p-3 flex flex-col gap-3 rounded-lg hover:shadow-lg hover:shadow-black duration-500 relative">
      {/* Image Section */} 
      <Link href={{pathname:"/product", query:{_id: item._id}}}>
      <div className="relative h-48 w-full overflow-hidden rounded-lg">
        <Image
          className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
          src={item.image}
          alt="Product Image"
          height={192}
          width={240}
        />
        <span className="absolute top-2 left-2 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-bold">
          {discount}% off
        </span>
      </div>
      </Link>

      {/* Product Details */}
      <div className="flex flex-col gap-2 mt-2">
        <p className="text-sm sm:text-base md:text-lg font-semibold truncate">
          {item.title}
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 sm:gap-3">
          <div className="flex flex-col sm:flex-row gap-1 sm:space-x-3 items-start sm:items-center">
            <span className="font-bold text-red-600 text-xl">
              ${item.price}.00
            </span>
            <span className="font-bold text-red-600 text-sm line-through">
              ${item.oldPrice}.00
            </span>
          </div>
          <div className="flex items-center gap-1 mt-2 sm:mt-0">
            {startArray}
          </div>
        </div>
        <button onClick={() =>disPatch(addTocart(item), toast.success("added success"))} className="bg-sky-800 w-full text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors duration-300 mt-2">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductsData;
