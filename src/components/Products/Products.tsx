"use client";

import { getProducts } from "@/helper";
import Container from "../Container/Container";
import ProductsData from "../ProductsData/ProductsData";
import { Products as ProductType } from "../../../type";

const Products = async () => {
  const products = await getProducts();
  
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {products.map((item: ProductType) => (
          <ProductsData key={item._id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Products;
