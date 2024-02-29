import Image from "next/image";

const LibraryEmpty = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-2.5 md:gap-5">
      <div className=" w-[100px] h-[100px] md:w-[130px] md:h-[130px] bg-neutral-800 rounded-full flex items-center justify-center self-center">
        <Image
          src="/book.png"
          alt="Book"
          width={70}
          height={70}
          className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
        />
      </div>
      <p className="text-center max-w-[200px] md:max-w-[270px] text-primary text-sm font-medium leading-none ">
        To start training, add{" "}
        <span className="text-secondary">some of your books</span> or from the
        recommended ones
      </p>
    </div>
  );
};

export default LibraryEmpty;
