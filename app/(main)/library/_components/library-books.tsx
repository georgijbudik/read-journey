import LibrarySelect from "./library-select";
import LibraryList from "./library-list";

interface ILibraryBooksProps {
  status: string;
}

const LibraryBooks = ({ status }: ILibraryBooksProps) => {
  return (
    <section className="lg:flex-grow bg-foreground rounded-3xl py-[40px] px-[20px] md:px-[40px]">
      <div className="flex justify-between items-start mb-[14px]">
        <h3 className="text-stone-50 text-xl md:text-3xl font-bold leading-tight md:tracking-wide">
          My library
        </h3>

        <LibrarySelect />
      </div>

      <LibraryList status={status} />
    </section>
  );
};

export default LibraryBooks;
