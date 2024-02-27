import Link from "next/link";

import { cn } from "@/lib/utils";

interface ILogoProps {
  isAuth?: boolean;
  noText?: boolean;
}

const Logo = ({ isAuth = false, noText = false }: ILogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <svg className="w-[42px] h-[17px] fill-primary">
        <use xlinkHref="/sprite.svg#icon-logo"></use>
      </svg>
      <p
        className={cn(
          "hidden lg:block text-primary text-lg font-bold uppercase leading-none tracking-tight",
          isAuth && "md:block",
          noText && "hidden md:hidden lg:hidden"
        )}
      >
        read journey
      </p>
    </Link>
  );
};

export default Logo;
