import { Button } from "./ui/button";

import Logo from "./ui/logo";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-[11px] px-[20px] md:py-[16px] md:px-[16px] bg-foreground rounded-2xl">
      <Logo noText />
      <nav className="flex flex-col md:flex-row items-center md:gap-4">
        <Button className="p-0 py-0" variant="link">
          Privacy Policy
        </Button>
        <Button className="p-0 py-0" variant="link">
          Terms & conditions
        </Button>
      </nav>
      {/* @ts-ignore */}
      <Button size="icon p-2 md:p-3">
        <a
          href="https://github.com/georgijbudik/read-journey"
          target="_blank"
          referrerPolicy="no-referrer"
          className="group"
        >
          <svg className="w-12 h-12 group-hover:fill-primary transition-all duration-300">
            <use xlinkHref="/sprite.svg#icon-github"></use>
          </svg>
        </a>
      </Button>
    </footer>
  );
};

export default Footer;
