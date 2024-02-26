import AddBookForm from "./_components/add-book-form";
import RecommendedSection from "./_components/recommended-section";
import LibraryBooks from "./_components/library-books";

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
    <div className="flex flex-col lg:flex-row gap-2.5 md:gap-4">
      <section className="bg-foreground rounded-3xl p-5 md:p-8 flex flex-col md:flex-row lg:flex-col gap-5 md:gap-8">
        <div className="md:flex-grow-[3]">
          <AddBookForm />
        </div>

        <div className="md:flex-grow-[1]">
          <RecommendedSection page={page} />
        </div>
      </section>

      <LibraryBooks status={status} />
    </div>
  );
};

export default LibraryPage;
