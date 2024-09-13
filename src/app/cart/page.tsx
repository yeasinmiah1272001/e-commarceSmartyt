"use client"
import CartItem from "@/components/CartItem";
import Container from "@/components/Container/Container";
import PaymentForm from "@/components/PaymentForm";
import { resetData } from "@/Redux/shoppingSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  // @ts-ignore
  const selector = useSelector((state) => state.shopping.productData);

  const disPatch = useDispatch()

  return (
    <div>
      {
        selector.length > 0 ?<Container className="mt-4">
        <h1 className="text-xl font-semibold text-black">CartPage</h1>
        <div>
          <CartItem />
        </div>
        {
          selector.length > 0 ? <><div className="mt-3">
          <button onClick={() => disPatch(resetData())} className="w-full px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 shadow-md">
            All Delete
          </button>
        </div></> : <></>
        }
        <div className="mt-5">
          <PaymentForm />
        </div>
      </Container>
       : 
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <p className="text-2xl font-semibold text-gray-800 mb-4">Product Not Found</p>
      <Link href="/">
        <p className="text-blue-600 hover:underline text-lg flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11V7a1 1 0 012 0v2h3a1 1 0 110 2H9v2a1 1 0 01-2 0v-2H4a1 1 0 010-2h3V7z"
              clipRule="evenodd"
            />
          </svg>
          Back Home
        </p>
      </Link>
    </div>
      }
    </div>
  );
};

export default CartPage;
