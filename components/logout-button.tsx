"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const LogoutButton = () => {
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
      <DialogContent className="sm:max-w-[335px] md:max-w-[342px] py-[60px] px-[47px] md:py-[50px] md:px-[50px] flex flex-col gap-8">
        <DialogHeader>
          <DialogTitle className="text-center text-primary">
            Log out
          </DialogTitle>
          <DialogDescription className="text-center">
            Are you sure you want to leave your account?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <div className="flex items-center gap-3 ">
            <Button
              className="px-5 md:px-7 py-2.5 md:py-3"
              type="button"
              variant="outline"
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
