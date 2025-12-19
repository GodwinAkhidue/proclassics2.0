"use client";
import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

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

export default function Product_Detail({ otherInfo }: { otherInfo: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-[14px] lg:text-base">
      <button
        className="w-full flex items-center justify-between py-7"
        onClick={() => setOpen(!open)}
      >
        <div
          className={`${plusJakartaSans.className} ${
            open ? "font-semibold" : "font-medium"
          }`}
        >
          {otherInfo?.title}
        </div>
        <div className="text-[26px]">{open ? <IoRemove /> : <IoAdd />}</div>
      </button>
      <div
        className={`w-full h-[1px] bg-black ${open ? "hidden" : "block"}`}
      ></div>
      <div className={`${open ? "block" : "hidden"} whitespace-pre-line`}>
        <div>{otherInfo?.description}</div>
      </div>
    </div>
  );
}
