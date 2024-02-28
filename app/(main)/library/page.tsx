import AddBookForm from "./_components/add-book-form";
import HintSection from "./_components/hint-section";
import LibrarySection from "./_components/library-section";

const LibraryPage = ({
  searchParams,
}: {
  searchParams?: {
    status?: string;
    page?: string;
  };
}) => {
  const status = searchParams?.status || "";
  const page = Number(searchParams?.page) || 1;

  return (
    <div className="flex-grow flex flex-col lg:flex-row gap-2.5 md:gap-4">
      <section className="bg-foreground rounded-[30px] p-5 md:p-8 flex flex-col md:flex-row lg:flex-col gap-5 md:gap-8">
        <div className="md:flex-grow-[3] lg:min-w-[330px]">
          <AddBookForm />
        </div>

        <div className="md:flex-grow-[1] lg:flex-grow-0">
          <HintSection page={page} />
        </div>
      </section>

      <LibrarySection status={status} />
    </div>
  );
};

export default LibraryPage;
