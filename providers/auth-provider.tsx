import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

const AuthProviders = () => {
  return (
    <div>
      <Button variant="default" type="button" onClick={() => signIn("google")}>
        Google
      </Button>

      <Button variant="default" type="button" onClick={() => signIn("github")}>
        Github
      </Button>
    </div>
  );
};

export default AuthProviders;
