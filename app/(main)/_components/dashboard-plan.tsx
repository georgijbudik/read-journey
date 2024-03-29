import Link from "next/link";

const DashboardPlan = () => {
  return (
    <div className="p-5 md:px-5 md:py-[26px] lg:p-5 bg-neutral-800 rounded-xl">
      <h4 className="text-primary text-lg font-bold leading-none mb-5 md:mb-10">
        Start your workout
      </h4>

      <div className="mb-[17px] md:mb-[26px]">
        <ul className="flex flex-col gap-5 items-start">
          <li className="flex items-center gap-[12px]">
            <div className="flex-shrink-0 w-10 h-10 md:h-11 md:w-11 bg-primary rounded-full flex items-center justify-center text-center text-stone-900 text-lg font-bold leading-none md:leading-tight">
              1
            </div>
            <p className=" md:max-w-[200px] lg:max-w-auto text-secondary text-sm font-medium leading-none">
              <span className="text-primary">Create a personal library:</span>{" "}
              add the books you intend to read to it.
            </p>
          </li>

          <li className="flex items-center gap-[12px]">
            <div className="flex-shrink-0 w-10 h-10 md:h-11 md:w-11 bg-primary rounded-full flex items-center justify-center text-center text-stone-900 text-lg font-bold leading-none md:leading-tight">
              2
            </div>
            <p className=" md:max-w-[200px] lg:max-w-auto text-secondary text-sm font-medium leading-none">
              <span className="text-primary"> Create your first workout:</span>{" "}
              define a goal, choose a period, start training.
            </p>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-between">
        <Link
          href="/library"
          className="text-secondary text-xs md:text-sm font-medium underline leading-none hover:text-primary transition-all duration-300"
        >
          My library
        </Link>

        <button className="group" type="button">
          <svg className="stroke-primary h-5 w-5 md:h-6 md:w-6 group-hover:stroke-secondary transition-all duration-300">
            <use xlinkHref="/sprite.svg#icon-arrow"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DashboardPlan;
