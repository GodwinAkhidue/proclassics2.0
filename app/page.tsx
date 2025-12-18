"use client";
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
import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import { phonenumber } from "@/lib/constants";

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

export default function Home() {
  const [colCards, setColCards] = useState<any[]>([]);

  const fetchCategories = async () => {
    await api
      .get("/api/category/get-all-with-images")
      .then((res) => setColCards(res.data.categories));
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="relative">
      <section className="hero hero-bg w-full h-[50vh] text-white text-center flex flex-col justify-center items-center gap-5">
        <h1
          className={`heading ${playfairDisplay.className} font-semibold text-2xl`}
        >
          Making you new
        </h1>
        <Link
          href={"/shop"}
          className={`${raleway.className} font-medium text-base text-black bg-white rounded py-2 px-3 cursor-pointer`}
        >
          Shop Now
        </Link>
      </section>

      <section className="my-12 grid grid-cols-2 lg:grid-cols-4 gap-3 px-3 max-w-[1200px] mx-auto">
        <div className="feature-card flex flex-col items-center justify-center gap-3 bg-[#fafafa] p-12 py-16 rounded text-center">
          <div className="svg1 w-[25px] ">
            <Image
              className="w-full h-full"
              width={100}
              height={100}
              alt="feature 1"
              src={"/svg1.svg"}
            />
          </div>
          <div
            className={`feature-card-text ${raleway.className} font-light text-sm`}
          >
            Very Fast Shipping
          </div>
        </div>
        <div className="feature-card flex flex-col items-center justify-center gap-3 bg-[#fafafa] p-12 py-16 rounded text-center">
          <div className="svg1 w-[25px] ">
            <Image
              className="w-full h-full"
              width={100}
              height={100}
              alt="feature 1"
              src={"/svg2.svg"}
            />
          </div>
          <div
            className={`feature-card-text ${raleway.className} font-light text-sm`}
          >
            Secure Payments
          </div>
        </div>
        <div className="feature-card flex flex-col items-center justify-center gap-3 bg-[#fafafa] p-12 py-16 rounded text-center">
          <div className="svg1 w-[25px] ">
            <Image
              className="w-full h-full"
              width={100}
              height={100}
              alt="feature 1"
              src={"/svg3.svg"}
            />
          </div>
          <div
            className={`feature-card-text ${raleway.className} font-light text-sm`}
          >
            Hassle-Free Returns
          </div>
        </div>
        <div className="feature-card flex flex-col items-center justify-center gap-3 bg-[#fafafa] p-12 py-16 rounded text-center">
          <div className="svg1 w-[25px] ">
            <Image
              className="w-full h-full"
              width={100}
              height={100}
              alt="feature 1"
              src={"/svg4.svg"}
            />
          </div>
          <div
            className={`feature-card-text ${raleway.className} font-light text-sm`}
          >
            Gift Ready Packaging
          </div>
        </div>
      </section>

      <section className="black-friday bf-bg text-white w-full h-[55vh] md:h-[66vh] lg:h-[70vh] px-12 flex flex-col items-end justify-center md:px-24">
        <div className="text-content flex flex-col items-end justify-center max-w-[220px] gap-y-1.5">
          <div
            className={`${plusJakartaSans.className} text-[0.62rem] md:text-[0.85rem] self-start font-bold text-start`}
          >
            25 - 30th December
          </div>
          <div
            className={`${prompt.className} font-bold text-[2.85rem] md:text-[3.99rem] lg:text-[4.2rem] md:leading-[1.2] leading-[0.9] text-start self-start`}
          >
            BLACK
          </div>
          <div
            className={`${prompt.className} font-bold text-[2.85rem] md:text-[3.99rem] lg:text-[4.2rem] md:leading-[0.65] leading-[0.45] text-start self-start`}
          >
            FRIDAY
          </div>
          <div
            className={`${prompt.className} text-start self-start font-semibold text-xl md:text-2xl`}
          >
            HASTA
          </div>
          <div
            className={`${prompt.className} font-bold text-[2.85rem] md:text-[3.99rem] lg:text-[4.2rem] leading-[0.9] text-start self-start`}
          >
            40%
          </div>
        </div>
      </section>

      <Link
        href={`https://wa.me/${phonenumber}`}
        target="_blank"
        className={`cta ${raleway.className} fixed bottom-14 right-8 text-white font-bold bg-[#2B9D84] mt-[100px] uppercase flex items-center justify-center text-lg p-5 gap-x-3 rounded-full`}
      >
        <span className="w-[36px]">
          <Image
            className="object-cover"
            width={100}
            height={100}
            alt="whatsapp"
            src={"/whatsappicon.png"}
          />
        </span>
        {/* Chat Now */}
      </Link>

      <section className="collection px-4 py-12 mx-auto flex flex-col items-center w-full ">
        <h2
          className={`collection-heading ${plusJakartaSans.className} text-xl font-bold text-center`}
        >
          OUR ICONIC CUSTOM COLLECTION
        </h2>
        <div className="collections flex flex-col md:flex-row items-center justify-start gap-[11px] overflow-x-auto md:gap-x-[20px] mt-10 hide-scrollbar">
          <Image
            className="w-[80%] md:w-[47%] rounded"
            width={160}
            height={334}
            alt="collection pic"
            src={"/collection1.png"}
          />
          <Image
            className="w-[100%] md:w-[47%] rounded"
            width={240}
            height={350}
            alt="collection pic"
            src={"/collection2.png"}
          />
          <Image
            className="w-[80%] md:w-[47%] rounded"
            width={150}
            height={320}
            alt="collection pic"
            src={"/collection3.png"}
          />
        </div>
        <Link
          href={"/shop"}
          className={`shop ${raleway.className} font-medium text-base px-5 py-3 bg-[#121212] text-white mt-10 rounded`}
        >
          Shop Now
        </Link>
      </section>

      <section className="px-4 py-12 w-full mx-auto flex flex-col items-center">
        <h2
          className={`collection-heading ${plusJakartaSans.className} font-bold text-xl text-center`}
        >
          OBSESSIVE ATTENTION.
          <br className="md:hidden" /> MAKING YOU NEW
        </h2>
        <div className="collection-grid grid grid-cols-2 md:grid-cols-4 gap-4">
          {colCards.map((card, index) => (
            <Link
              href={`/shop/${encodeURIComponent(card?.slug)}`}
              key={index}
              className="collection-card flex flex-col justify-start gap-y-3"
            >
              <div className="card-img overflow-hidden rounded">
                {card?.image?.url && (
                  <Image
                    className="rounded mt-8 w-full"
                    width={158}
                    height={198}
                    alt="collection card pic"
                    src={card?.image?.url}
                  />
                )}
              </div>
              <div
                className={` ${playfairDisplay.className} title font-semibold text-base`}
              >
                {card?.name.toUpperCase()}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="custom-pieces px-4 py-12 w-full mx-auto flex flex-col items-center">
        <h2
          className={`cp-heading  ${plusJakartaSans.className} font-bold text-xl text-center`}
        >
          CUSTOM PIECES
        </h2>
        <div className="scroll-container overflow-x-auto w-full h-full px-4 ">
          <div className="cp flex justify-center items-center gap-2 md:gap-x-6 w-full md:max-w-[787.09px] h-auto mt-10 mx-auto">
            <div className="vid-container rounded-lg overflow-hidden w-[30%] h-[50%] ">
              <video
                className="w-full h-full object-cover"
                width="320"
                height="240"
                autoPlay={true}
                loop={true}
                muted={true}
              >
                <source src={"../vid1.mp4"} type="video/mp4" />
              </video>
            </div>
            <div className="vid-container rounded-lg overflow-hidden w-[40%] h-[60%]">
              <video
                className="w-full h-full object-cover"
                width="320"
                height="240"
                autoPlay={true}
                loop={true}
                muted={true}
              >
                <source src={"../vid2.mp4"} type="video/mp4" />
              </video>
            </div>
            <div className="vid-container rounded-lg overflow-hidden w-[30%] h-[50%] ">
              <video
                className="w-full h-full object-cover"
                width="320"
                height="240"
                autoPlay={true}
                loop={true}
                muted={true}
              >
                <source src={"../vid3.mp4"} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <Link
          href={`https://wa.me/${phonenumber}`}
          className={`shop ${raleway.className} font-medium text-base px-5 py-3 bg-[#121212] text-white mt-10 rounded`}
        >
          Contact Us
        </Link>
      </section>

      <section className="jewelry-testing px-4 py-12 w-full mx-auto flex flex-col md:flex-row md:justify-between md:items-center md:gap-x-8 md:max-w-[85%]">
        <div className="group-text md:flex md:flex-col md:gap-y-6 md:items-start md:justify-center md:order-2 md:max-w-sm lg:max-w-md">
          <h2
            className={`cp-heading  ${plusJakartaSans.className} font-bold text-xl text-center`}
          >
            JEWELRY TESTING
          </h2>
          <p
            className={`${raleway.className} font-light text-xl subtext hidden md:block `}
          >
            Every week in Lagos, people walk into our office with rings, chains,
            or earrings they thought were gold or diamond—only to discover
            otherwise. That’s why testing your jewelry is so important.
          </p>
          <Link
            href={`https://wa.me/${phonenumber}`}
            className={`hidden md:block shop ${raleway.className} font-medium text-base px-5 py-3 bg-[#121212] text-white mt-10 rounded`}
          >
            Contact Us
          </Link>
        </div>
        <div className="banner-vid mt-8 md:order-1 w-full md:w-[50%] h-[610px] md:h-[444px]">
          <div className="vid-container w-full h-full rounded-lg overflow-hidden ">
            <video
              className="w-full h-full object-cover"
              width="320"
              height="240"
              autoPlay={true}
              loop={true}
              muted={true}
            >
              <source src={"../banner.mp4"} type="video/mp4" />
            </video>
          </div>
        </div>

        <button
          className={`shop md:hidden ${raleway.className} mx-auto font-medium text-base px-5 py-3 bg-[#121212] text-white mt-10 rounded`}
        >
          Contact Us
        </button>
      </section>
      <section className="custom-pieces px-4 py-12 w-full mx-auto flex flex-col items-center">
        <h2
          className={`cp-heading ${raleway.className} font-bold text-xl text-center`}
        >
          TIMELESS PIECES
        </h2>
        <div className="scroll-container overflow-x-auto w-full mt-10 px-4 mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2 w-full mx-auto lg:h-[600px]">
            <div className="vid-container rounded-lg overflow-hidden w-full h-full">
              <Image
                className="w-full h-full object-cover"
                width={76}
                height={191}
                alt="timeless"
                src={"/t1.jpg"}
              />
            </div>
            <div className="vid-container rounded-lg overflow-hidden w-full h-full">
              <Image
                className="w-full h-full object-cover"
                width={120}
                height={191}
                alt="timeless"
                src={"/t2.jpg"}
              />
            </div>
            <div className="vid-container rounded-lg overflow-hidden w-full h-full">
              <Image
                className="w-full h-full object-cover"
                width={76}
                height={191}
                alt="timeless"
                src={"/t3.jpg"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="h-[48vh] w-full">
        <video
          className="w-full h-full object-cover"
          width="320"
          height="240"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source src={"../drivingvid.mp4"} type="video/mp4" />
        </video>
      </section>

      <section className="mission py-16 mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-[34px] justify-items-center">
        <div className="mission-card mission-card-shadow rounded-[17px] py-8 px-5 max-w-[300px] flex flex-col justify-center gap-y-6 text-center border-[5px] border-[#fafafa]">
          <div
            className={`title flex justify-center gap-x-3 items-center  ${raleway.className} font-medium text-base `}
          >
            <span className="icon w-[48px] block">
              <Image
                className="w-full h-full"
                width={100}
                height={100}
                alt="pics"
                src={"/missionsvg.svg"}
              />{" "}
            </span>
            OUR STORY
          </div>
          <div
            className={`${raleway.className} font-light text-sm leading-relaxed `}
          >
            Our mission is to dispel every trace of self-doubt and diminished
            self-worth by adorning the modern millennial with accessories that
            are nothing short of exquisite. Through impeccable craftsmanship,
          </div>
        </div>
        <div className="mission-card mission-card-shadow rounded-[17px] py-8 px-5 max-w-[300px] flex flex-col justify-center gap-y-6 text-center border-[5px] border-[#fafafa]">
          <div
            className={`title flex justify-center gap-x-3 items-center  ${raleway.className} font-medium text-base `}
          >
            <span className="icon w-[48px] block">
              <Image
                className="w-full h-full"
                width={100}
                height={100}
                alt="pics"
                src={"/missionsvg.svg"}
              />{" "}
            </span>
            OUR MISSION
          </div>
          <div
            className={`${raleway.className} font-light text-sm leading-relaxed `}
          >
            Our mission is to dispel every trace of self-doubt and diminished
            self-worth by adorning the modern millennial with accessories that
            are nothing short of exquisite. Through impeccable craftsmanship,
            luxurious packaging, and a standard of customer service that is both
            attentive and discreet, we curate an experience that speaks to
            sophistication, success, and unapologetic elegance.
          </div>
        </div>
        <div className="mission-card mission-card-shadow rounded-[17px] py-8 px-5 max-w-[300px] flex flex-col justify-center gap-y-6 text-center border-[5px] border-[#fafafa]">
          <div
            className={`title flex justify-center gap-x-3 items-center  ${raleway.className} font-medium text-base `}
          >
            <span className="icon w-[48px] block">
              <Image
                className="w-full h-full"
                width={100}
                height={100}
                alt="pics"
                src={"/missionsvg.svg"}
              />{" "}
            </span>
            OUR VISION
          </div>
          <div
            className={`${raleway.className} font-light text-sm leading-relaxed `}
          >
            Our mission is to dispel every trace of self-doubt and diminished
            self-worth by adorning the modern millennial with accessories that
            are nothing short of exquisite. Through impeccable craftsmanship,
          </div>
        </div>
      </section>

      {/* <section className="newsletter bg-[#fafafa] w-full py-12 flex flex-col gap-y-5 text-center justify-center mx-auto">
        <div className="img w-[100px] mx-auto">
          <Image
            className="w-full"
            width={110}
            height={58}
            alt="ring"
            src={"/ring.png"}
          />
        </div>
        <h2
          className={` ${raleway.className} uppercase text-[28px] font-light`}
        >
          Newsletter
        </h2>
        <div className={`${raleway.className} font-light text-base`}>
          Insights, inspiration, and exclusives.
        </div>
        <div className="newsletter-form flex justify-center items-center w-[55vw] h-[6vh] md:w-[45vw] md:h-[10vh] mt-4 mx-auto">
          <input
            className="text-xs bg-[#E6E6E6] p-5 w-[70%] md:w-[80%] h-full"
            type="text"
            placeholder="www.proclassics.com"
          />
          <button
            className={`flex justify-center items-center text-center p-5 bg-[#000] text-xs md:text-sm text-white w-[30%] md:w-[20%]  h-full ${raleway.className} `}
          >
            Submit
          </button>
        </div>
      </section>
      <section className="come pt-12">
        <div className="anotherbanner px-4 w-full h-[48vh] relative">
          <div className="texts text-white absolute bottom-8 right-4 flex flex-col items-end text-end gap-2">
            <h3
              className={` ${playfairDisplay.className} text-[rgba(255,255,255,0.75)] font-medium text-3xl`}
            >
              Come to Us
            </h3>
            <p
              className={`${raleway.className} text-[rgba(255,255,255,0.75)] font-medium text-sm`}
            >
              Authentic jewelry tester in Lagos
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}
