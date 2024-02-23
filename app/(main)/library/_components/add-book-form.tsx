import { Button } from "@/components/ui/button";

const AddBookForm = () => {
  return (
    <div className="text-stone-50 text-xs font-medium leading-3">
      <p className="ml-[14px] mb-2">Filters:</p>
      <div className="flex flex-col gap-2 mb-5">
        <input
          className="p-[14px] bg-neutral-800 rounded-xl"
          type="text"
          name=""
          id=""
        />
        <input
          className="p-[14px] bg-neutral-800 rounded-xl"
          type="text"
          name=""
          id=""
        />
        <input
          className="p-[14px] bg-neutral-800 rounded-xl"
          type="text"
          name=""
          id=""
        />
      </div>

      <Button
        className="px-5 md:px-7 py-2.5 md:py-3 rounded-3xl bg-transparent border border-stone-50 border-opacity-20 text-stone-50 text-sm md:text-base font-bold leading-none tracking-tight hover:text-neutral-800 transition-all duration-300"
        type="button"
      >
        Add book
      </Button>
    </div>
  );
};

export default AddBookForm;
