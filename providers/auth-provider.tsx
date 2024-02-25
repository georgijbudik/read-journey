import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

const AuthProviders = () => {
  return (
    <div>
      <Button
        variant="default"
        type="button"
        onClick={() => signIn("google", { callbackUrl: "/recommended" })}
      >
        Google
      </Button>

      <Button
        variant="default"
        type="button"
        onClick={() => signIn("github", { callbackUrl: "/recommended" })}
      >
        Github
      </Button>

      {/* <Button
        variant="default"
        type="button"
        onClick={() => signIn("github", { callbackUrl: "/recommended" })}
      >
        LinkedIn
      </Button> */}
    </div>
  );
};

export default AuthProviders;
