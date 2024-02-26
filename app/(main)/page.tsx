import DashboardPlan from "./_components/dashboard-plan";
import DashboardQuote from "./_components/dashboard-quote";
import FilterForm from "./_components/filter-form";
import RecommendedSection from "./_components/recommended-section";

const RecommendedPage = ({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    title?: string;
    author?: string;
  };
}) => {
  const title = searchParams?.title || "";
  const author = searchParams?.author || "";
  const page = Number(searchParams?.page) || 1;

  return (
    <div className="flex flex-col lg:flex-row gap-2.5 md:gap-4">
      <section className="bg-foreground rounded-[30px] p-5 md:p-8 flex flex-col md:flex-row lg:flex-col gap-5 md:gap-8">
        <div className="md:flex-grow-[3] lg:min-w-[330px]">
          <FilterForm />
        </div>

        <div className="md:flex-grow-[1]">
          <DashboardPlan />
        </div>

        <div className="hidden lg:block">
          <DashboardQuote />
        </div>
      </section>

      <div className="lg:flex-grow py-[40px] px-[20px] md:px-[40px] bg-foreground rounded-[30px]">
        <RecommendedSection page={page} title={title} author={author} />
      </div>
    </div>
  );
};

export default RecommendedPage;
