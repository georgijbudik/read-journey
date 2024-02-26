import RecommendedSection from "../_components/recommended-section";

const RecommendedPage = ({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) => {
  const page = Number(searchParams?.page) || 1;

  return (
    <div>
      <RecommendedSection page={page} />
    </div>
  );
};

export default RecommendedPage;
