import Image from "next/image";

const ImageBlock = () => {
  return (
    <div className="w-full bg-foreground rounded-[30px] px-10 pt-5 h-[351px] overflow-hidden md:hidden">
      <Image
        src="/Iphone 15 Black.png"
        alt="Iphone 15"
        width={255}
        height={518}
      />
    </div>
  );
};

export default ImageBlock;
