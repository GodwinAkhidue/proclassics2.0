import Image from "next/image";

export default function Images({ images }: { images: any }) {
  return (
    <section className="w-full max-w-[400px] lg:max-w-[750px] shrink-0">
      <div className="w-full h-[90vw] max-h-[400px] lg:max-h-[900px] relative rounded-[12px] overflow-hidden shadow-sm shadow-[#00000033]">
        <Image
          src={images[0]?.url}
          alt="product"
          fill
          className="object-contain"
        />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-[10px]">
        {images?.length > 1 &&
          images?.slice(1).map((image: any) => (
            <div
              key={image?.id}
              className="w-full max-w-[100px] lg:max-w-[180px] h-[20vw] max-h-[100px] lg:max-h-[220px] relative rounded-[12px] overflow-hidden shadow-sm shadow-[#00000033]"
            >
              <Image
                src={image?.url}
                alt="product"
                fill
                className="object-contain"
              />
            </div>
          ))}
      </div>
    </section>
  );
}
