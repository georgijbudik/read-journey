"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";

import LogoutButton from "./logout-button";

import { cn } from "@/lib/utils";

const UserNav = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="hidden md:block">
        <nav className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] flex items-center md:gap-8 lg:gap-10">
          <Link
            href="/recommended"
            className={cn(
              "text-stone-500 text-sm md:text-base font-medium leading-none hover:text-primary duration-300 transition-all",
              pathname === "/recommended" &&
                "text-primary after:block after:absolute after:w-full after:bottom-[-8px] after:right-0 after:h-[3px] after:bg-blue-500 after:rounded-[8px]"
            )}
          >
            Home
          </Link>
          <Link
            href="/library"
            className={cn(
              "text-stone-500 text-sm md:text-base font-medium leading-none hover:text-primary duration-300 transition-all",
              pathname === "/library" &&
                "text-primary after:block after:absolute after:w-full after:bottom-[-8px] after:right-0 after:h-[3px] after:bg-blue-500 after:rounded-[8px]"
            )}
          >
            My library
          </Link>
        </nav>
      </div>

      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="">
              <svg className="h-[28px] w-[28px] stroke-primary">
                <use xlinkHref="/sprite.svg#icon-menu"></use>
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent className="h-full flex flex-col justify-between py-10">
            <nav className="h-full flex flex-col items-center justify-center gap-5">
              <Link
                href="/recommended"
                className={cn(
                  "relative text-stone-500 text-sm md:text-base font-medium leading-none hover:text-primary duration-300 transition-all",
                  pathname === "/recommended" &&
                    "text-primary after:block after:absolute after:w-full after:bottom-[-4px] after:right-0 after:h-[3px] after:bg-blue-500 after:rounded-[8px]"
                )}
              >
                Home
              </Link>
              <Link
                href="/library"
                className={cn(
                  "relative text-stone-500 text-sm md:text-base font-medium leading-none hover:text-primary duration-300 transition-all",
                  pathname === "/library" &&
                    "text-primary after:block after:absolute after:w-full after:bottom-[-4px] after:right-0 after:h-[3px] after:bg-blue-500 after:rounded-[8px]"
                )}
              >
                My library
              </Link>
            </nav>

            <SheetFooter>
              <SheetClose asChild>
                <LogoutButton />
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default UserNav;
