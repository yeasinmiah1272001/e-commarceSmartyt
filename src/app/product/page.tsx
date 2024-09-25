// "use client"
import Container from "@/components/Container/Container";
import ProductsData from "@/components/ProductsData/ProductsData";
import SingleProduct from "@/components/SingleProduct/SingleProduct";

import { getTraningProducts, singleProduct } from "@/helper";
import React from "react";
import { Products } from "../../../type";

const ProductPage = async ({ searchParams }: any) => {
  const _idString = searchParams._id;
  const _id = Number(_idString);
  const product = await singleProduct(_id);
  // console.log("single product", product)

  const data = await getTraningProducts();

  return (
    <Container className="py-24">
      <SingleProduct product={product} />
      <div>
        <h1 className="text-xl font-serif">Tranding Product</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          {data.map((item: Products) => (
            <ProductsData key={item._id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
