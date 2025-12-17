"use client";
import { phonenumber } from "@/lib/constants";
import api from "@/utils/api";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Form() {
  const [categories, setCategories] = useState<any[]>([]);

  const fetchCategories = async () => {
    await api
      .get("/api/category/get-all")
      .then((res) => setCategories(res.data.categories));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const whatsappMessage = `CUSTOM PIECE REQUEST
FULL NAME: ${name}
EMAIL: ${email}
PHONE: ${phone}
CATEGORY: ${category}
MESSAGE: ${message}
  `;

  const SendMessage = () => {
    window.open(
      `https://wa.me/${phonenumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <div className="flex items-center justify-center lg:gap-28 w-full">
      <div className="w-full max-w-[500px] shrink-0">
        <div
          className={`${inter.className} font-semibold text-center lg:text-start text-[36px]`}
        >
          Get in touch
        </div>
        <div
          className={`mt-4 text-[#475467] text-[18px] text-center lg:text-start ${inter.className}`}
        >
          We&apos;d love to hear from you. Please fill out this form.
        </div>
        <div className={`mt-16 text-[#344054] text-[14px] font-medium`}>
          Full name
        </div>
        <input
          className="w-full h-[44px] border border-[#D0D5DD] rounded-[8px] mt-1.5 px-4 py-2.5"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className={`mt-6 text-[#344054] text-[14px] font-medium`}>
          Email
        </div>
        <input
          className="w-full h-[44px] border border-[#D0D5DD] rounded-[8px] mt-1.5 px-4 py-2.5"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={`mt-6 text-[#344054] text-[14px] font-medium`}>
          Phone Number
        </div>
        <input
          className="w-full h-[44px] border border-[#D0D5DD] rounded-[8px] mt-1.5 px-4 py-2.5"
          placeholder="+1 (555) 000-0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className={`mt-6 text-[#344054] text-[14px] font-medium`}>
          Category
        </div>
        <div className="w-full h-[44px] border border-[#D0D5DD] rounded-[8px] mt-1.5 px-4 py-2.5">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full outline-none"
          >
            <option value={``}>Select Category</option>
            {categories.map((category, index) => (
              <option value={category.name} key={index}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="w-full h-32 p-4 border border-[#EAECF0] rounded-xl mt-6 flex flex-col items-center justify-center">
                    <div className="border border-[#EAECF0] rounded-lg w-[40px] h-[40px] flex items-center justify-center">
                        <IoCloudUploadOutline />
                    </div>
                    <div className={`mt-3 ${inter.className} text-[14px] text-[#475467]`}>
                        <span className="text-[#6941C6] font-semibold">Click to upload</span> or drag and drop
                    </div>
                    <div className={`mt-1 ${inter.className} text-[14px] text-[#475467]`}>
                        SVG, PNG, JPG or GIF (max. 2MB)
                    </div>
                </div> */}
        <div className={`mt-6 text-[#344054] text-[14px] font-medium`}>
          Message
        </div>
        <textarea
          className="w-full h-32 border border-[#D0D5DD] rounded-[8px] mt-1.5 px-4 py-2.5"
          placeholder="Leave us a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {/* <div className="flex items-center gap-3 mt-6">
                    <input type="checkbox" className="w-5 h-5 rounded-md" />
                    <div className={`${inter.className} text-[#475467]`}>
                        You agree to our <span className="underline">privacy policy</span>.
                    </div>
                </div> */}
        <button
          onClick={() => SendMessage()}
          className={`${inter.className} bg-[#121212] text-white w-full py-3 font-semibold mt-8 rounded-lg cursor-pointer`}
        >
          Send Message
        </button>
      </div>
      <div className="hidden lg:block w-full h-[800px] relative">
        <Image
          src={`/anotherbanner.jpg`}
          alt="banner"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
