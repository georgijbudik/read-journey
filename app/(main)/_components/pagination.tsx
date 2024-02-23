import { cn } from "@/lib/utils";

const Pagination = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="group w-8 h-8 rounded-full border border-stone-50 border-opacity-20 flex items-center justify-center hover:border-opacity-100 transition-all duration-300">
        <svg
          className={cn(
            "h-4 w-4 fill-none stroke-primary/20 group-hover:stroke-primary/100 transition-all duration-300"
          )}
        >
          <use xlinkHref="/sprite.svg#icon-left"></use>
        </svg>
      </button>
      <button className="group w-8 h-8 rounded-full border border-stone-50 border-opacity-20 flex items-center justify-center hover:border-opacity-100 transition-all duration-300">
        <svg
          className={cn(
            "h-4 w-4 fill-none stroke-primary/20 group-hover:stroke-primary/100 transition-all duration-300"
          )}
        >
          <use xlinkHref="/sprite.svg#icon-right"></use>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
