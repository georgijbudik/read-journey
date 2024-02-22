import Logo from "./ui/logo";
import LogoutButton from "./logout-button";
import UserBar from "./user-bar";
import UserNav from "./user-nav";

const Header = () => {
  return (
    <header className="md:relative flex items-center justify-between py-[11px] px-[20px] md:py-[16px] md:px-[16px] bg-stone-900 rounded-2xl">
      <Logo />

      <div className="flex items-center gap-2.5 md:gap-4">
        <UserBar />
        <div className="hidden md:block">
          <LogoutButton />
        </div>
        <UserNav />
      </div>
    </header>
  );
};

export default Header;
