import Image from "next/image";
import { Playfair_Display, Raleway, Inter } from "next/font/google";
import Form from "./form";
import Newsletter from "./newsletter";
import Link from "next/link";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
});
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});
export const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
});

export default function Custom_Jewelry() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[1200px]">
        <section className="w-full relative h-[60vw] max-h-[770px]">
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
          <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-[#000000E5] flex flex-col items-center justify-center p-5">
            <div
              className={`${playfairDisplay.className} font-semibold text-white text-center text-[18px] lg:text-[48px]`}
            >
              Order Your Custom Made Jewelry
            </div>
            <div
              className={`${raleway.className} text-[14px] text-white text-center mt-3 lg:text-[20px] lg:mt-6`}
            >
              Best Custom Jewelry Pieces in Nigeria — Straight from Dubai
            </div>
            <Link
              href={"/custom-jewelry/#request"}
              className={`bg-white ${raleway.className} font-medium text-[12px] lg:text-[14px] p-[10px] rounded-[6px] mt-5 lg:mt-14 cursor-pointer`}
            >
              REQUEST A CUSTOM PIECE
            </Link>
          </div>
        </section>
        <section className="mt-6 lg:mt-36 px-4">
          <div
            className={`${inter.className} font-bold text-[24px] text-center`}
          >
            CUSTOM PIECES
          </div>
          <div className={`${inter.className} text-[14px] text-center mt-2`}>
            A lattice of diamonds creates a shimmering, woven pattern in this
            exquisite platinum necklace
          </div>
          <div className="mt-4 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="w-full h-[calc(100vw-32px)] max-h-[570px] relative lg:col-span-2">
              <Image
                src={"/anotherbanner.jpg"}
                alt="custom jewelry"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-[calc(100vw-32px)] max-h-[570px] relative">
              <Image
                src={"/custom1.jpg"}
                alt="custom jewelry"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-[calc(100vw-32px)] max-h-[570px] relative">
              <Image
                src={"/custom2.jpg"}
                alt="custom jewelry"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-[calc(100vw-32px)] max-h-[570px] relative">
              <Image
                src={"/custom3.jpg"}
                alt="custom jewelry"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-[calc(100vw-32px)] max-h-[570px] relative">
              <Image
                src={"/custom4.jpg"}
                alt="custom jewelry"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
        <section id="request" className="mt-16 px-4">
          <Form />
        </section>
        <section
          className={`${raleway.className} mt-16 lg:mt-20 text-[20px] text-[#475467] px-4`}
        >
          Looking for the best custom jewelry in Nigeria? At Pro Classics, we
          design and deliver luxury custom pieces straight from Dubai — crafted
          with precision, brilliance, and 100% authenticity.
          <br />
          <br />
          From custom gold chains, engraved pendants, to iced-out diamond
          pieces, we bring your idea to life with premium materials and expert
          finishing.
          <br />
          <br />
          Whether you&apos;re in Lagos, Abuja, or anywhere in Nigeria, your
          dream custom piece is just one order away.
        </section>

        <section className="flex justify-center">
          <section className="mt-4 lg:mt-16 px-4 grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1050px]">
            <div className="feature-card flex flex-col items-center justify-center gap-3 bg-[#fafafa] p-6 lg:p-16 rounded text-center">
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
                Nationwide Delivery
              </div>
            </div>
            <div className="feature-card flex flex-col items-center justify-center gap-3 bg-[#fafafa] p-6 lg:p-16 rounded text-center">
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
                100% Authentic Dubai Gold & Stones
              </div>
            </div>
            <div className="feature-card flex flex-col items-center justify-center gap-3 bg-[#fafafa] p-6 lg:p-16 rounded text-center">
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
                Secure Packaging
              </div>
            </div>
          </section>
        </section>
      </div>
      <section className="w-full lg:mt-10">{/* <Newsletter /> */}</section>
    </div>
  );
}
