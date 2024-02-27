"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { deleteBook } from "@/app/api/book-actions";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Trash2 } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { toast } from "sonner";

interface ILibraryDeleteProps {
  id: string;
}

const LibraryDelete = ({ id }: ILibraryDeleteProps) => {
  const router = useRouter();
  const { data } = useSession();
  const email = data?.user?.email;

  const onHandleDelete = async () => {
    await deleteBook({ email, id });
    toast.success("Delete success");
    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group w-7 h-7 bg-red-500 bg-opacity-10 rounded-full border border-red-500 border-opacity-20 flex items-center justify-center hover:bg-opacity-80 hover:border-opacity-100 transition-all duration-300">
          <Trash2 className="h-[14px] w-[14px] stroke-red-500 group-hover:stroke-primary transition-all duration-300" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[335px] md:max-w-[342px] py-[60px] px-[46px] md:p-[50px] flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-center justify-center gap-5 md:gap-8">
          <div className="text-black text-5xl md:text-7xl  font-medium font-['Gilroy'] leading-10">
            🥲
          </div>

          <h4 className="text-center text-stone-50 text-lg md:text-xl font-bold leading-none md:leading-tight">
            Are you sure you want to delete this book?
          </h4>
        </div>

        <DialogFooter>
          <div className="flex items-center gap-3 ">
            <Button
              className="px-5 md:px-7 py-2.5 md:py-3"
              type="button"
              variant="outline"
              onClick={onHandleDelete}
            >
              Delete
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

export default LibraryDelete;
