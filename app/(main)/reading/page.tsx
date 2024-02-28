"use client";

import { useState } from "react";

import Dashboard from "./_components/dashboard";
import Progress from "./_components/progress";
import Statistics from "./_components/statistics";
import ReadingInfo from "./_components/reading-info";
import MyReading from "./_components/my-reading";
import { useSearchParams } from "next/navigation";

const ReadingPage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const searchParams = useSearchParams();

  const bookId = searchParams.get("id") as string;

  const toggleIsStarted = () => {
    setIsStarted((prev) => !prev);
  };

  return (
    <div className="lg:flex lg:w-full">
      <div className="bg-foreground rounded-[30px] pt-5 px-5 pb-10 md:flex md:pt-8 md:pl-8 md:pb-4 lg:flex-col flex-grow[3] lg:min-w-[330px] lg:h-full lg:px-5 lg:mr-4">
        <Dashboard
          toggleIsStarted={toggleIsStarted}
          isStarted={isStarted}
          bookId={bookId}
        />
        {isStarted ? <ReadingInfo /> : <Progress />}
      </div>
      <MyReading bookId={bookId} />
    </div>
  );
};

export default ReadingPage;
