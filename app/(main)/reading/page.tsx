import Dashboard from "./_components/dashboard";
import Diary from "./_components/diary";

const ReadingPage = () => {
  return (
    <div>
      <section>
        <Dashboard>
          <Diary />
        </Dashboard>
      </section>
    </div>
  );
};

export default ReadingPage;
