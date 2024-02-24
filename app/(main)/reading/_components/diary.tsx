import { Trash2 } from "lucide-react";

const Diary = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-5 md:mb-4">
        <h4 className="text-primary text-lg">Diary</h4>
        <div className="flex">
          <svg className="h-4 w-4 md:w-5 md:h-5 stroke-[#686868] hover:stroke-primary transition-all duration-300">
            <use xlinkHref="/sprite.svg#icon-hourglass"></use>
          </svg>
          <svg className="h-4 w-4 md:w-5 md:h-5 fill-none stroke-[#686868] hover:stroke-primary transition-all duration-300">
            <use xlinkHref="/sprite.svg#icon-pie-chart"></use>
          </svg>
        </div>
      </div>
      <div className="bg-[#262626] w-full rounded-[15px] px-4 pt-4">
        <ul>
          <li className="">
            <div className="flex flex-col float-left items-center mr-[9px]">
              <div className="bg-primary w-4 h-4 rounded-[4px] flex justify-center items-center">
                <div className="bg-[#141414] w-2 h-2 rounded-[2px]"></div>
              </div>
              <div className="h-[82px] w-[2px] md:h-[90px] bg-[#1F1F1F]"></div>
            </div>
            <div className="flex justify-between">
              <div className="inline-flex flex-col h-full">
                <p className="text-primary text-xs font-bold mb-[17px] md:text-base md:leading-none">
                  23.02.2024
                </p>
                <div>
                  <p className="text-primary text-sm font-medium md:text-xl">
                    7.6%
                  </p>
                  <p className="text-[#686868] text-[10px] md:text-xs font-medium">
                    29 minutes
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[#686868] text-xs mb-4 md:mb-[18px]">
                  42 pages
                </p>
                <div className="flex items-center mb-[7px]">
                  <svg className="h-[18px] w-[43px] md:w-[59px] md:h-[25px] md: mr-[6px]">
                    <use xlinkHref="/sprite.svg#icon-chart"></use>
                  </svg>
                  <button type="button">
                    <Trash2 size={14} stroke="#686868" />
                  </button>
                </div>
                <p className="text-[#686868] text-[10px] font-medium w-[43px] mb-[17px]">
                  45 pages per hour
                </p>
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex flex-col float-left items-center mr-[9px]">
              <div className="bg-primary w-4 h-4 rounded-[4px] flex justify-center items-center">
                <div className="bg-[#141414] w-2 h-2 rounded-[2px]"></div>
              </div>
              <div className="h-[82px] w-[2px] md:h-[90px] bg-[#1F1F1F]"></div>
            </div>
            <div className="flex justify-between">
              <div className="inline-flex flex-col h-full">
                <p className="text-primary text-xs font-bold mb-[17px] md:text-base md:leading-none">
                  23.02.2024
                </p>
                <div>
                  <p className="text-primary text-sm font-medium md:text-xl">
                    7.6%
                  </p>
                  <p className="text-[#686868] text-[10px] md:text-xs font-medium">
                    29 minutes
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[#686868] text-xs mb-4 md:mb-[18px]">
                  42 pages
                </p>
                <div className="flex items-center mb-[7px]">
                  <svg className="h-[18px] w-[43px] md:w-[59px] md:h-[25px] md: mr-[6px]">
                    <use xlinkHref="/sprite.svg#icon-chart"></use>
                  </svg>
                  <button type="button">
                    <Trash2 size={14} stroke="#686868" />
                  </button>
                </div>
                <p className="text-[#686868] text-[10px] font-medium w-[43px] mb-[17px]">
                  45 pages per hour
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Diary;
