"use client";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/Redux/shoppingSlice";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/Redux/store";
import { Products } from "../../type";

const CartItem = () => {
  const products = useSelector(
    (state: RootState) => state.shopping.productData
  );

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center bg-white p-4 rounded-t-lg border-b">
        <h1 className="text-lg font-semibold">Product</h1>
        <h1 className="text-lg font-semibold">Quantity</h1>
        <h1 className="text-lg font-semibold">Subtotal</h1>
      </div>

      <div className="bg-white mt-4 space-y-4 rounded-b-lg">
        {products.map((item: Products, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-b last:border-b-0"
          >
            <div className="flex items-center justify-center space-x-4">
              <p
                onClick={() => dispatch(deleteProduct(item._id))}
                className="text-gray-500 text-2xl hover:text-red-400 duration-500"
              >
                <IoClose />
              </p>
              <Image
                src={item.image}
                alt="Product Image"
                height={80}
                width={80}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 border-2 mr-20 rounded-md px-3 py-1">
              <button
                onClick={() => dispatch(decreaseQuantity(item))}
                className="text-gray-600 hover:text-gray-800"
              >
                <FaChevronLeft />
              </button>
              <span className="mx-2 text-lg">{item.quantity}</span>
              <button
                onClick={() => dispatch(increaseQuantity(item))}
                className="text-gray-600 hover:text-gray-800"
              >
                <FaChevronRight />
              </button>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-500">
                ${item.price * item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
