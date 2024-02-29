"use client";

import { useState } from "react";

import Diary from "./diary";
import Statistics from "./statistics";

import { cn } from "@/lib/utils";

const ReadingInfo = () => {
  const [selected, setIsSelected] = useState<"diary" | "statistics">("diary");

  return (
    <div className="w-full md:w-1/2 lg:w-full">
      <div className="flex items-center justify-between mb-5 md:mb-4 lg:mb-5">
        <h4 className="text-primary text-lg font-bold">
          {selected === "diary" ? "Diary" : "Statistics"}
        </h4>
        <div className="flex">
          <button type="button" onClick={() => setIsSelected("diary")}>
            <svg
              className={cn(
                "h-4 w-4 md:w-5 md:h-5 stroke-secondary hover:stroke-primary transition-all duration-300",
                selected === "diary" ? "stroke-primary" : "stroke-secondary"
              )}
            >
              <use xlinkHref="/sprite.svg#icon-hourglass"></use>
            </svg>
          </button>
          <button type="button" onClick={() => setIsSelected("statistics")}>
            <svg
              className={cn(
                "h-4 w-4 md:w-5 md:h-5 fill-none stroke-secondary hover:stroke-primary transition-all duration-300",
                selected === "statistics"
                  ? "stroke-primary"
                  : "stroke-secondary"
              )}
            >
              <use xlinkHref="/sprite.svg#icon-pie-chart"></use>
            </svg>
          </button>
        </div>
      </div>
      {selected === "diary" ? <Diary /> : <Statistics />}
    </div>
  );
};

export default ReadingInfo;
