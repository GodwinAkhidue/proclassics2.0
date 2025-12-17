"use client";
import Product_Detail from "./otherInformation/productDetail";

export default function Other_Information({ product }: { product: any }) {
  return (
    <div className="mt-7 w-full max-w-[450px] lg:max-w-[500px]">
      {product?.other_info?.map((otherInfo: any, index: any) => (
        <Product_Detail otherInfo={otherInfo} key={index} />
      ))}
    </div>
  );
}
