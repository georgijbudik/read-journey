"use client";

import { signOut } from "next-auth/react";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const LogoutButton = () => {
  const onHandleClick = async () => {
    await signOut();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="px-5 md:px-7 py-2.5 md:py-3"
          type="button"
        >
          Log out
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[335px] md:max-w-[342px] py-[60px] px-[46px] md:p-[50px] flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-center justify-center gap-5 md:gap-8">
          <div className="text-black text-5xl md:text-7xl  font-medium font-['Gilroy'] leading-10">
            🥲
          </div>

          <h4 className="text-center text-stone-50 text-lg md:text-xl font-bold leading-none md:leading-tight">
            Are you sure?
          </h4>
        </div>

        <DialogFooter>
          <div className="flex items-center gap-3 ">
            <Button
              className="px-5 md:px-7 py-2.5 md:py-3"
              type="button"
              variant="outline"
              onClick={onHandleClick}
            >
              Log out
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

export default LogoutButton;
