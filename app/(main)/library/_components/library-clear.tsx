"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { clearLibrary } from "@/app/api/book-actions";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";

const LibraryClear = () => {
  const { refresh } = useRouter();
  const session = useSession();

  const email = session.data?.user?.email;

  const onHandleClearLibrary = async () => {
    await clearLibrary(email);

    refresh();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="relative cursor-pointer select-none text-start"
          value="clear"
        >
          <span
            className={cn(
              "block truncate text-red-400/80 text-xs md:text-sm font-medium leading-none hover:text-red-500 transition-all duration-300"
            )}
          >
            Clear library
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[335px] md:max-w-[342px] py-[60px] px-[46px] md:p-[50px] flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-center justify-center gap-5 md:gap-8">
          {/* <div className="text-black text-5xl md:text-7xl  font-medium font-['Gilroy'] leading-10">
            🥲
          </div> */}

          <h4 className="text-center text-stone-50 text-lg md:text-xl font-bold leading-none md:leading-tight">
            Are you sure you want to clear library?
          </h4>
        </div>

        <DialogFooter>
          <div className="flex items-center gap-3 ">
            <Button
              className="px-5 md:px-7 py-2.5 md:py-3"
              type="button"
              variant="outline"
              onClick={onHandleClearLibrary}
            >
              Clear
            </Button>
            <DialogClose className="px-5 md:px-7 py-[11px] md:py-[7px] rounded-3xl bg-primary text-neutral-800 border border-stone-50 border-opacity-20 text-sm md:text-base font-bold leading-none tracking-tight hover:text-primary hover:bg-transparent transition-all duration-300">
              Cancel
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LibraryClear;
