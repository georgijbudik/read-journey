import MyReading from "./_components/my-reading";

const ReadingPage = ({
  searchParams,
}: {
  searchParams?: {
    id?: string;
  };
}) => {
  const bookId = searchParams?.id || "";
  return (
    <div className="lg:flex lg:w-full flex-grow">
      <MyReading bookId={bookId} />
    </div>
  );
};

export default ReadingPage;
