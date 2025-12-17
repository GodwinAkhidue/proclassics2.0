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

const faqs = [
  {
    icon: "/faq1.svg",
    topic: "Do you sell real gold and silver jewelry?",
    subtext:
      "Yes, we offer authentic gold, sterling silver, and other precious metals, with certifications available for verification.",
  },
  {
    icon: "/faq2.svg",
    topic: "Can I request custom-made jewelry?",
    subtext:
      "Absolutely! We specialize in custom designs—from personalized rings to unique statement pieces—crafted to match your vision.",
  },
  {
    icon: "/faq3.svg",
    topic: "Can I return or exchange an item?",
    subtext:
      "Yes, items can be returned or exchanged within our return policy timeframe, provided they are in original condition. (Custom items may be excluded.)",
  },
  {
    icon: "/faq4.svg",
    topic: "Do you offer warranties or guarantees on your jewelry?",
    subtext:
      "Yes, our pieces come with a warranty covering manufacturing defects. Extended care plans are also available.",
  },
  {
    icon: "/faq5.svg",
    topic: "Do you provide resizing or repair services?",
    subtext:
      "Yes, we offer resizing, cleaning, polishing, and repair services to keep your jewelry looking as good as new.",
  },
  {
    icon: "/faq6.svg",
    topic: "Do you provide international shipping?",
    subtext:
      "Yes, we ship worldwide with secure packaging and tracking to ensure your jewelry arrives safely.",
  },
];

export default function FaqPage() {
  return (
    <div className="">
      <section className="hero px-4 bg-black text-white text-center w-full mx-auto rounded-lg py-12 my-4 mb-24">
        <div
          className={`${plusJakartaSans.className} text-lg font-semibold uppercase tracking-wide`}
        >
          Black Friday Sale | Up to 40% Off
        </div>
        <div className={`${inter.className} text-sm font-extralight`}>
          {" "}
          Lorem ipsum dolor sit amet
        </div>
      </section>

      <section className={`support text-center w-full mx-auto mb-24 px-4`}>
        <div
          className={`${raleway.className} text-sm font-semibold mb-4 text-[#121212]`}
        >
          Support
        </div>
        <div
          className={`${playfairDisplay.className} text-4xl font-semibold mb-4 text-[#101828] md:hidden`}
        >
          FAQ
        </div>
        <div
          className={`${playfairDisplay.className} text-4xl font-semibold mb-4 text-[#101828] hidden md:block`}
        >
          Frequently Asked Questions
        </div>
        <div
          className={`${inter.className} text-lg font-light text-[#475467] mb-8`}
        >
          Have questions? We’re here to help.
        </div>
        {/* <div className="input w-[80%] mx-auto flex justify-between items-center border-1 rounded border-[#D0D5DD] mb-20 md:max-w-md">
                    <div className=" flex items-center justify-center w-[10%] ml-4"><Image className="w-[20px] h-[20px]" width={15} height={15} alt="search" src={'/Icon.svg'}/></div>
                    <input className={` ${inter.className} text-base w-[85%] p-4 appearance-none focus:outline-none `} type="text" placeholder="Search"/>
                </div> */}
        <div
          className={`faq-cards ${inter.className} w-full mx-auto text-center grid grid-cols-1 gap-5 justify-items-center my-20 md:grid-cols-3 md:max-w-6xl`}
        >
          {faqs.map(
            (faq: { icon: string; topic: string; subtext: string }, i) => (
              <div
                key={i}
                className="faq-card flex flex-col justify-center gap-4 items-center max-w-xs border-[#fafafa] shadow-xl border-1 rounded p-6"
              >
                <div className="icon w-[64px]">
                  <Image
                    className="w-full h-full object-cover"
                    src={`${faq.icon}`}
                    height={100}
                    width={100}
                    alt="faqpic"
                  />
                </div>
                <h3 className="font-semibold text-[#101828] text-xl uppercase">
                  {faq.topic}
                </h3>
                <p className="font-[400] text-[#475467] ">{faq.subtext}</p>
              </div>
            )
          )}
        </div>
        <div className="still-have-questions flex flex-col justify-center items-center gap-5">
          <div className="quest-icon w-[148px]">
            <Image
              className="w-full h-full object-cover"
              src={"/avatarsvg.svg"}
              width={100}
              height={100}
              alt="piczz"
            />
          </div>
          <h3
            className={`${inter.className} text-[#101828] font-semibold text-xl`}
          >
            Still Have Questions?
          </h3>
          <p
            className={`${inter.className} text-[#475467] text-lg font-normal`}
          >
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <Link
            href={`https://wa.me/${phonenumber}`}
            target="_blank"
            className={`${inter.className} font-semibold text-base  bg-[#121212] text-white p-5 rounded px-6 cursor-pointer`}
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
