import { Button } from "./ui/button";

const LogoutButton = () => {
  return (
    <Button
      className="px-5 md:px-7 py-2.5 md:py-3 rounded-3xl bg-transparent border border-stone-50 border-opacity-20 text-stone-50 text-sm md:text-base font-bold leading-none tracking-tight hover:text-neutral-800 transition-all duration-300"
      type="button"
    >
      Log out
    </Button>
  );
};

export default LogoutButton;
