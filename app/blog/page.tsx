"use client";
import { Inter, Raleway, Playfair_Display } from "next/font/google";
import Blog_Item from "./blog_item";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);

  const fetchBlogs = async () => {
    const response = await api.get(`/api/blog/get-all`);
    const data = response.data.blogs;
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const formatDate = (date: any) => {
    const newDate = new Date(date);
    const formatted = new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
    }).format(newDate);

    return formatted;
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 lg:px-[60px]">
      <div className="w-full max-w-[1200px] pb-12 lg:pb-16">
        <div
          className={`${raleway.className} font-semibold text-[14px] mt-16 lg:mt-24 text-center`}
        >
          Our Blog
        </div>
        <div
          className={`${playfairDisplay.className} font-semibold text-[36px] mt-3 text-center`}
        >
          Making you new
        </div>
        <div
          className={`${inter.className} text-[18px] my-4 text-[#475467] text-center`}
        >
          The latest industry news, interviews, technologies, and resources.
        </div>
        {blogs?.length > 0 && (
          <Link
            href={`/blog/${blogs[0]?.slug}`}
            className="w-full mt-12 lg:mt-24"
          >
            <div className="relative w-full h-[50vw] max-h-[660px] rounded-[15px] overflow-hidden">
              <Image
                src={blogs[0]?.thumbnail?.url}
                alt="blog"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-[20px]">
              <div className={`${raleway.className} text-[14px] font-semibold`}>
                {formatDate(blogs[0]?.created_at)}
              </div>
              <div
                className={`${raleway.className} font-semibold text-2xl lg:text-3xl flex items-center gap-[15px] justify-between mt-[10px]`}
              >
                <div>{blogs[0]?.title}</div>
                <MdArrowOutward className="shrink-0" />
              </div>
              {/* <div className={`${raleway.className} text-[#475467] mt-[10px]`}>
                Test Your Diamonds with 99.9% Accuracy
              </div> */}
            </div>
          </Link>
        )}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs?.length > 0 &&
            blogs
              ?.slice(1)
              .map((blog: any, index: any) => (
                <Blog_Item key={index} blog={blog} />
              ))}
        </div>
      </div>
    </div>
  );
}
