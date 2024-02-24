import LibraryList from "./library-list";

const LibraryBooks = () => {
  return (
    <section className="lg:flex-grow bg-foreground rounded-3xl py-[40px] px-[20px] md:px-[40px]">
      <div className="flex justify-between items-start mb-[14px]">
        <h3 className="text-stone-50 text-xl md:text-3xl font-bold leading-tight md:tracking-wide">
          My library
        </h3>

        <div className="w-28 h-10 px-3.5 py-3 rounded-xl border border-neutral-700 justify-center items-center gap-7 inline-flex">
          <div className="text-center text-stone-50 text-xs font-medium leading-none">
            All books
          </div>
        </div>
      </div>

      <div>
        <LibraryList />
      </div>
    </section>
  );
};

export default LibraryBooks;
