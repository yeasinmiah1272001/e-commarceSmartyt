import { productData } from "@/cconstant/data";

export const getProducts = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/smart");
  return res.json();
};

export const getTraningProducts = async () => {
  const res = await fetch(
    "https://fakestoreapiserver.reactbd.com/smarttrending"
  );
  return res.json();
};

export const singleProduct = (_id: number) => {
  const item = productData.find((product) => product._id === _id);
  return item;
};
