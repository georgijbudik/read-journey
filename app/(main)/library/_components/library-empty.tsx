const LibraryEmpty = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-2.5 md:gap-5">
      <div className=" w-[100px] h-[100px] md:w-[130px] md:h-[130px] bg-neutral-800 rounded-full flex items-center justify-center self-center"></div>
      <p className="text-center max-w-[200px] md:max-w-[270px] text-stone-50 text-sm font-medium leading-none ">
        To start training, add{" "}
        <span className="text-stone-500">some of your books</span> or from the
        recommended ones
      </p>
    </div>
  );
};

export default LibraryEmpty;
