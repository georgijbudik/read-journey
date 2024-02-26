import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

const AuthProviders = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-3">
      <Button
        variant="default"
        type="button"
        onClick={() => signIn("google")}
        className="px-11 py-[11px] md:px-14 md:py-6 flex items-center gap-1"
      >
        Continue with Google{" "}
        <svg className="h-7 w-7 md:w-9 md:h-9 flex-shrink-0">
          <use xlinkHref="/sprite.svg#icon-google"></use>
        </svg>
      </Button>

      <Button
        variant="default"
        type="button"
        onClick={() => signIn("github")}
        className="px-11 py-[11px] md:px-14 md:py-6 flex items-center gap-1"
      >
        Continue with Github{" "}
        <svg className="h-8 w-8 md:w-10 md:h-10 flex-shrink-0">
          <use xlinkHref="/sprite.svg#icon-github"></use>
        </svg>
      </Button>
    </div>
  );
};

export default AuthProviders;
