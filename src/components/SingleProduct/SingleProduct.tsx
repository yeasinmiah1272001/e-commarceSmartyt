"use client"
import Image from "next/image";
import { IoMdCart } from "react-icons/io";
import { Products } from "../../../type";
import { addTocart } from "@/Redux/shoppingSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const SingleProduct = ({ product }:any) => {
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col md:flex-row justify-between items-start mx-4 py-12 gap-6">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg dark:bg-gray-800 transition-transform duration-300 transform hover:scale-105">
        <div className="relative w-full md:w-1/2 lg:w-[400px] flex justify-center items-center">
          <Image
            className="object-cover p-2 w-full h-full bg-contain md:h-80 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            src={product.image}
            alt="image"
            height={200}
            width={300}
          />
        </div>
        <div className="flex-auto p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-50">
              {product.title}
            </h1>
            <div className="text-xl font-semibold text-gray-600 dark:text-gray-300">
              $110.00
            </div>
          </div>
          <div className="text-sm lg:w-3/4 font-medium text-gray-500 dark:text-gray-300">
            {product.description}
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            SKU: {product._id}
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Category: {product.category}
          </div>

          <div className="flex items-center mt-4">
            <button onClick={() => dispatch(addTocart(product), toast.success("product added"))} className="bg-darkText text-slate-100 px-6 py-3 text-sm uppercase flex items-center border-r-[1px] border-r-slate-500">
              Add to Cart
            </button>
            <span className="bg-darkText text-xl text-slate-100 w-12 flex items-center justify-center py-3">
              <IoMdCart />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
