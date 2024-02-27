import Image from "next/image";

const ImageBlock = () => {
  return (
    <section className="lg:h-auto w-full bg-foreground rounded-3xl pt-5 px-10 lg:pt-20 lg:px-[64px] overflow-hidden md:hidden lg:flex lg:items-end lg:justify-center">
      <div className="flex justify-center lg:items-end">
        <Image
          src="/iphone-15-black.png"
          alt="Iphone 15"
          width={405}
          height={656}
          priority
        />
      </div>
    </section>
  );
};

export default ImageBlock;
