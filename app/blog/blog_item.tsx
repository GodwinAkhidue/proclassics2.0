import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { Raleway } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const formatDate = (date: any) => {
  const newDate = new Date(date);
  const formatted = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(newDate);

  return formatted;
};

export default function Blog_Item({ blog }: { blog: any }) {
  return (
    <Link href={`/blog/${encodeURIComponent(blog?.slug)}`} className="w-full">
      <div className="relative w-full h-[60vw] max-h-[230px] rounded-[15px] overflow-hidden">
        <Image
          src={blog?.thumbnail?.url}
          alt="blog"
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-[20px]">
        <div className={`${raleway.className} text-[14px] font-semibold`}>
          {formatDate(blog?.created_at)}
        </div>
        <div
          className={`${raleway.className} font-semibold text-2xl lg:text-3xl flex items-center gap-[15px] justify-between mt-[10px]`}
        >
          <div>{blog?.title}</div>
          <MdArrowOutward className="shrink-0" />
        </div>
      </div>
    </Link>
  );
}
