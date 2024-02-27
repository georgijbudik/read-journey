"use client";
import { useState } from "react";
import Dashboard from "./_components/dashboard";
import Progress from "./_components/progress";
import Statistics from "./_components/statistics";
import ReadingInfo from "./_components/reading-info";

const ReadingPage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const toggleIsStarted = () => {
    setIsStarted((prev) => !prev);
  };
  return (
    <div>
      <section>
        <div className="w-full bg-foreground rounded-[30px] pt-5 px-5 pb-10 md:flex md:pt-8 md:pl-8 md:pb-4 lg:flex-col lg:w-[353px] lg:h-full lg:px-5">
          <Dashboard toggleIsStarted={toggleIsStarted} isStarted={isStarted} />
          {isStarted ? <ReadingInfo /> : <Progress />}
        </div>
      </section>
    </div>
  );
};

export default ReadingPage;
