"use client";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PaymentForm = () => {
  // @ts-ignore
  const selector = useSelector((state) => state.shopping.productData);
 // @ts-ignore
  const userInfo = useSelector((state) => state.shopping.userInfo);

  const [amount, setAmount] = useState(0);

  useEffect(() => {
    let amt = 0;
    // @ts-ignore
    selector.map((item) => {
      amt += item.price * item.quantity;
      return;
    });
    setAmount(amt);
  }, [selector]);

  return (
    <section className="bg-white p-6 rounded-lg shadow-md lg:w-full mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Cart Totals</h1>
        <div className="flex justify-between items-center border-b pb-3 mb-3">
          <h1 className="text-gray-600">Subtotal</h1>
          <p className="text-gray-800 font-bold text-xl">$ {amount}</p>
        </div>
        <div className="flex justify-between items-center border-b pb-3 mb-3">
          <h1 className="text-gray-600">Shipping</h1>
          <p className="text-gray-800 font-bold text-xl">$20.00</p>
        </div>
        <div className="flex justify-between items-center border-b pb-3 mb-3">
          <h1 className="text-gray-600">Total</h1>
          <p className="text-gray-800 font-bold text-xl">$ {amount + 20}</p>
        </div>
      </div>
      <div className="mt-6 text-center">
        {userInfo ? (
          <>
            {" "}
            <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 shadow-md">
              Proceed to Payment
            </button>
          </>
        ) : (
          <>
            {" "}
            <button onClick={() => signIn()} className="w-full animate-bounce px-6 py-3 bg-red-500 text-white rounded-md hover:bg-blue-600 transition duration-300 shadow-md">
             Pleace Login
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default PaymentForm;
