import Dashboard from "./_components/dashboard";
import Diary from "./_components/diary";

const ReadingPage = () => {
  return (
    <div>
      <section>
        <div className="w-full bg-foreground rounded-[30px] pt-5 px-5 pb-10 md:flex md:pt-8 md:pl-8 md:pb-4 lg:flex-col lg:w-[353px]">
          <Dashboard />
          <Diary />
        </div>
      </section>
    </div>
  );
};

export default ReadingPage;
