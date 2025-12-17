"use client";
import Images from "./images";
import Other_Information from "./otherInformation";
import Image from "next/image";
import Product_Card from "@/components/product_card";
import {
  Inter,
  Lora,
  Nunito,
  Playfair_Display,
  Poppins,
  Raleway,
  Prompt,
  Plus_Jakarta_Sans,
} from "next/font/google";
import Link from "next/link";
import { phonenumber } from "@/lib/constants";
import { useEffect, useState } from "react";
import api from "@/utils/api";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "600", // or your desired weight
});
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"], // or your desired weight
});
export const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"], // or your desired weight
});
export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "700", "800"], // or your desired weight
});
export const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800"], // or your desired weight
});
export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // or your desired weight
});
export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // or your desired weight
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // or your desired weight
});

export default function ProductPage({ product }: { product: any }) {
  const [products, setProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    const res = await api.post(`/api/product/get-some-from-one-category`, {
      slug: product?.slug,
      category: product?.category,
    });
    const data = res.data.products;
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center pb-[40px] lg:pb-[80px]">
      <section
        className={`bg-[#1E1E1E] w-full py-[40px] px-[20px] ${plusJakartaSans.className} text-center text-white`}
      >
        <div className="font-semibold text-[18px] lg:text-[30px]">
          We Are Here To Make You New
        </div>
      </section>

      <section className="mt-[40px] lg:mt-[80px] flex flex-col lg:flex-row lg:items-start lg:w-full items-center justify-center px-4 lg:px-[60px] gap-[40px] lg:gap-[70px] max-w-[1400px]">
        <Images images={product?.images} />
        <div className="flex flex-col items-center justify-center lg:items-start">
          <div className={`${lora.className} font-medium text-[28px]`}>
            {product?.name}
          </div>
          <div className={`mt-4 ${nunito} font-bold text-[#433740]`}>
            {product?.description}
          </div>
          <Other_Information product={product} />
          <Link
            target="_blank"
            href={`https://wa.me/${phonenumber}?text=${encodeURIComponent(
              `I would love to make enquiry about the ${product?.name}. 
              https://proclassics.co/product/${product?.slug}`
            )}`}
            className={`mt-10 lg:mt-20 w-full flex items-center justify-center ${inter.className} bg-[#2B9D84] rounded-full text-white font-semibold py-4 text-[15px]`}
          >
            TALK NOW ON WHATSAPP
          </Link>
        </div>
      </section>

      <section className="mt-10 lg:mt-20 w-full px-4 lg:px-[60px] lg:max-w-[1400px]">
        <div className={`${raleway.className} font-bold text-[12px]`}>
          JEWELRY TESTING
        </div>
        <div className="mt-[10px]">
          <div className="w-full h-[75vw] max-h-[300px] relative">
            <Image
              src={`/shop_page_banner.jpg`}
              alt="banner"
              fill
              className="object-cover z-0"
            />
            <div className="flex flex-col items-start justify-end p-4 bg-[#00000080] z-10 relative w-full h-full">
              <div
                className={`${raleway.className} text-[14px] lg:text-[24px] font-bold w-[200px] lg:w-[400px] text-white`}
              >
                QUALITY YOU CAN FEEL AUTHENTICITY YOU CAN TRUST
              </div>
              <button
                className={`mt-4 bg-white px-[20px] py-[5px] rounded-full text-[14px] ${inter.className}`}
              >
                Shop
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-[60px] lg:max-w-[1400px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px] lg:gap-[24px] mt-6 lg:mt-8">
          {products?.length > 0 &&
            products?.map((item: any, index: any) => (
              <Product_Card key={index} product={item} />
            ))}
        </div>
      </section>
    </main>
  );
}
