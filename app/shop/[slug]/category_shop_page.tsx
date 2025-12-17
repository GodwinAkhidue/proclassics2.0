"use client";
import Product_Card from "@/components/product_card";
// import Category_Switch from "./categories_switch";
// import Filters from "./filters";
import Image from "next/image";
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
import { useEffect, useRef, useState } from "react";
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

export default function CategoryShopPage({ category }: { category: any }) {
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef(null);

  const fetchProducts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    const res = await api.post(`/api/product/get-some-from-one-category`, {
      page,
      slug: category,
    });
    const data = res.data.products;

    if (data.length === 0) {
      setHasMore(false);
    } else {
      setProducts((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
    }

    setLoading(false);
  };

  useEffect(() => {
    setProducts([]);
    fetchProducts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchProducts();
        }
      },
      {
        threshold: 1,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [loaderRef.current]);

  return (
    <div className="mb-20 flex flex-col items-center overflow-hidden w-full">
      <div
        className={`bg-[#1E1E1E] w-full py-[40px] px-[20px] ${plusJakartaSans.className} text-center text-white`}
      >
        <div className="font-semibold text-[18px] lg:text-[30px]">
          BLACK FRIDAY SALE | UP TO 40% OFF
        </div>
        <div className={`lg:text-[24px] font-light ${inter.className}`}>
          Lorem ipsum dolor sit amet consectetur
        </div>
      </div>
      <section className="text-black w-full lg:flex lg:gap-[30px] lg:px-[60px] mt-[60px] lg:mt-[80px] lg:w-full lg:max-w-[1400px]">
        <div className="hidden lg:block">{/* <Filters /> */}</div>
        <section className="px-4 w-full">
          <div className={`${lora.className} text-[24px] font-semibold`}>
            All Available Products
          </div>
          {/* <div className="flex items-center justify-between mt-4 lg:hidden">
            <Filters />
            <Category_Switch />
          </div> */}
          <section className="w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[24px] mt-4 lg:mt-6">
              {products?.slice(0, 4).map((product) => (
                <Product_Card product={product} key={product?.slug} />
              ))}
            </div>
          </section>
          <section className="mt-[40px] w-full">
            <div className={`${raleway.className} font-bold text-[12px]`}>
              CUSTOM JEWELRY
            </div>
            <div className="mt-[10px] w-full">
              <div className="anotherbanner w-full h-[75vw] max-h-[470px] flex flex-col items-start justify-end p-4">
                <div
                  className={`${raleway.className} text-[18px] lg:text-[24px] font-bold w-[200px] lg:w-[400px] text-white`}
                >
                  Jewelry as unique as you are—crafted to tell your story
                </div>
                <button
                  className={`mt-4 bg-white px-[20px] py-[5px] rounded-full text-[14px] ${inter.className}`}
                >
                  Shop
                </button>
              </div>
            </div>
          </section>
          <section>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[24px] mt-6 lg:mt-8">
              {products?.slice(4, 8).map((product) => (
                <Product_Card product={product} key={product?.slug} />
              ))}
            </div>
          </section>
          <section className="mt-[40px]">
            <div className="w-full h-[75vw] max-h-[300px] relative">
              <Image
                src={`/shop_page_banner.jpg`}
                alt="banner"
                fill
                className="object-cover z-0"
              />
              <div className="flex flex-col items-center justify-center p-4 bg-[#00000080] z-10 relative w-full h-full">
                <div
                  className={`${playfairDisplay.className} text-[18px] lg:text-[27px] font-bold text-white text-center w-[200px] lg:w-[300px]`}
                >
                  Looking for something one-of-a-kind?
                </div>
                <div
                  className={`mt-4 ${poppins.className} text-[#D1D5DB] text-[12px] lg:text-[14px] text-center font-medium max-w-[520px]`}
                >
                  Design your custom bracelet with Proclassic. Our master
                  craftsmen bring your vision to life with precision and
                  artistry.
                </div>
                <button
                  className={`mt-4 lg:mt-6 px-[20px] py-[10px] bg-white ${inter.className} text-[10px] lg:text-[12px] font-medium`}
                >
                  START A CUSTOM ORDER
                </button>
              </div>
            </div>
          </section>
          <section>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[24px] mt-6 lg:mt-8">
              {products?.slice(8, 12).map((product) => (
                <Product_Card product={product} key={product?.slug} />
              ))}
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}
