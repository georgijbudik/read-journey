import Image from "next/image";

const ImageBlock = () => {
  return (
    <div className="w-full bg-foreground rounded-[30px] px-10 pt-5 h-[351px] overflow-hidden md:hidden lg:block lg:relative lg:h-[720px] lg:object-cover">
      <Image
        src="/iphone-15-black.png"
        alt="Iphone 15"
        width={255}
        height={518}
        className="lg:w-[405px] lg:h-[834px] lg:absolute lg:top-[80px] lg:left-1/4"
      />
    </div>
  );
};

export default ImageBlock;
