import { productData } from "@/cconstant/data";

export const getProducts = async () => {
    const res = await fetch("https://fakestoreapiserver.reactbd.com/smart");
    // const res = await fetch("http://localhost:3000/api/products");
    return res.json();
  };

export const getTraningProducts = async () => {
    const res = await fetch("https://fakestoreapiserver.reactbd.com/smarttrending");
    return res.json();
  };


  export const singleProduct = (_id:number) =>{
    const item = productData.find((product) => product._id === _id)
    return item
  }