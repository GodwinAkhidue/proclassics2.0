import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800"], // or your desired weight
});

export default function Blog_Details({ blog }: { blog: any }) {
  const formatDate = (date: any) => {
    const newDate = new Date(date);
    const formatted = new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
    }).format(newDate);

    return formatted;
  };

  return (
    <div className="w-full flex items-center justify-center py-16 lg:py-24 px-4 lg:px-16">
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        {blog?.created_at && (
          <div className={`${inter.className} font-semibold text-center`}>
            {formatDate(blog?.created_at)}
          </div>
        )}
        <div
          className={`${inter.className} font-semibold text-[36px] lg:text-[48px] text-center mt-3 w-full max-w-[768px]`}
        >
          {blog?.title}
        </div>
        {blog?.thumbnail?.url && (
          <div className="relative w-full h-[50vw] max-h-[660px] overflow-hidden mt-12 lg:mt-16">
            <Image
              src={blog?.thumbnail?.url}
              alt="blog"
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className={`${inter.className} mt-12 lg:mt-16 w-full`}>
          {blog?.sections?.map((section: any, index: any) => (
            <div key={index}>
              <div className="text-[#475467] mt-4">{section?.text}</div>
              {section?.image?.url && (
                <div className="relative w-full h-[50vw] max-h-[660px] overflow-hidden mt-12 lg:mt-16 rounded-xl">
                  <Image
                    src={section?.image?.url}
                    alt="blog"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
