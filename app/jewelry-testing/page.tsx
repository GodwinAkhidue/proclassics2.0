import Image from "next/image";
import { Playfair_Display, Raleway, Inter } from "next/font/google";
import Video_Scroll from "./video_scroll";
import { PiDiamondsFourThin, PiPeaceLight } from "react-icons/pi";
import { BsSafe } from "react-icons/bs";
import { AiOutlineInsurance } from "react-icons/ai";
import Testimonials from "./testimonials";
import Newsletter from "./newsletter";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
});
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"], // or your desired weight
});
export const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"], // or your desired weight
});

export default function Jewelry_Testing() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[1200px]">
        <section className="w-full relative h-[60vw] max-h-[770px]">
          <Image
            src={"/jewelry_testing.png"}
            alt="pro"
            fill
            className="object-cover"
          />
          <div className="relative w-full h-full z-10 bg-gradient-to-b from-transparent to-[#000000E5] flex flex-col items-center justify-center p-5">
            <div
              className={`${playfairDisplay.className} font-semibold text-white text-center text-[18px] lg:text-[48px]`}
            >
              Test Your Jewelry at ProClassics
            </div>
            <div
              className={`${raleway.className} text-[14px] text-white text-center mt-3 lg:text-[20px] lg:mt-6`}
            >
              Do you really know what your jewelry is made of?
            </div>
            <div
              className={`bg-white ${raleway.className} font-medium text-[12px] lg:text-[14px] p-[10px] rounded-[6px] mt-5 lg:mt-14 cursor-pointer`}
            >
              TEST YOUR JEWEWLRY
            </div>
          </div>
        </section>
        <section
          className={`${raleway.className} font-bold text-[18px] text-center mt-10 lg:mt-28 px-4 lg:text-[48px]`}
        >
          WHAT MAKES PROCLASSICS JEWELRY TESTING DIFFERENT?
        </section>
        <section className="mt-6 lg:mt-12 px-4 flex flex-wrap items-center justify-center gap-4 lg:gap-8">
          <div className="text-center">
            <div className={`${inter.className} font-semibold`}>
              CLEAN, NO-DAMAGE TESTING
            </div>
            <div className={`${inter.className} text-[#475467] mt-2`}>
              Safe for all jewelry types.
            </div>
          </div>
          <div className="text-center">
            <div className={`${inter.className} font-semibold`}>
              YOU GET A PRINTED REPORT
            </div>
            <div className={`${inter.className} text-[#475467] mt-2`}>
              Walk away with certified, easy-to-read results.
            </div>
          </div>
          <div className="text-center">
            <div className={`${inter.className} font-semibold`}>
              WE USE A PROFESSIONAL JEWELRY SCANNER
            </div>
            <div className={`${inter.className} text-[#475467] mt-2`}>
              Not a cheap diamond pen tester. Our scanner deeply analyzes the
              material structure.
            </div>
          </div>
          <div className="text-center">
            <div className={`${inter.className} font-semibold`}>
              WE DETECT EVERYTHING
            </div>
            <div className={`${inter.className} text-[#475467] mt-2`}>
              From natural diamonds and moissanite to gold karats and gemstones.
            </div>
          </div>
          <div className="text-center">
            <div className={`${inter.className} font-semibold`}>
              TRUSTED IN LAGOS & BEYOND
            </div>
            <div className={`${inter.className} text-[#475467] mt-2`}>
              We&apos;ve helped individuals, collectors, and jewelers across
              Nigeria get the clarity they need.
            </div>
          </div>
        </section>

        <Video_Scroll />

        <section className="mt-[40px] lg:mt-[80px] px-4">
          <div
            className={`${raleway.className} font-bold text-center text-[18px] lg:text-[48px]`}
          >
            WHY SHOULD I TEST MY JEWELRY?
          </div>
          <div
            className={`${raleway.className} mt-3 lg:mt-6 text-center lg:text-[20px]`}
          >
            Every week in Lagos, people walk into our office with rings, chains,
            or earrings they thought were gold or diamond—only to discover
            otherwise. That&apos;s why testing your jewelry is so important.
          </div>
          <div className="mt-3 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="flex flex-col items-center gap-3 bg-[#FAFAFA] p-6 lg:p-8">
              <PiDiamondsFourThin className="text-[28px]" />
              <div
                className={`${raleway.className} text-[20px] font-medium text-center`}
              >
                Check If It&apos;s Real
              </div>
              <div className={`${raleway.className} font-light text-center`}>
                Is it a natural diamond, lab diamond, moissanite, or cubic
                zirconia? Our scan test tells you instantly.
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 bg-[#FAFAFA] p-6 lg:p-8">
              <BsSafe className="text-[28px]" />
              <div
                className={`${raleway.className} text-[20px] font-medium text-center`}
              >
                Protect Your Money
              </div>
              <div className={`${raleway.className} font-light text-center`}>
                Don&apos;t get scammed. Testing helps you avoid overpaying or selling
                for less.
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 bg-[#FAFAFA] p-6 lg:p-8">
              <AiOutlineInsurance className="text-[28px]" />
              <div
                className={`${raleway.className} text-[20px] font-medium text-center`}
              >
                For Insurance or Resale
              </div>
              <div className={`${raleway.className} font-light text-center`}>
                If you&apos;re insuring or reselling your jewelry, you need verified
                proof of what it really is.
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 bg-[#FAFAFA] p-6 lg:p-8">
              <PiPeaceLight className="text-[28px]" />
              <div
                className={`${raleway.className} text-[20px] font-medium text-center`}
              >
                Peace of Mind
              </div>
              <div className={`${raleway.className} font-light text-center`}>
                Know exactly what you&apos;re wearing or gifting — no guesswork.
                Testing available in Lagos, Accra, and Dubai. Searching &quot;where
                to test jewelry in Lagos&quot;? You&apos;re in the right place.
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
      </div>
      {/* <Newsletter /> */}
    </div>
  );
}
