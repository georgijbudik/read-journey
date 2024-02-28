import Logo from "@/components/ui/logo";

const FormBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full flex flex-col md:flex-grow lg:flex-grow-0 bg-foreground rounded-3xl px-5 py-5 md:py-10 md:px-[70px] lg:px-[64px]">
      <div className="flex flex-start mb-10">
        <Logo isAuth />
      </div>

      <h1 className="md:w-[444px] text-stone-50 text-3xl md:text-6xl font-bold tracking-wide md:tracking-wider mb-5 md:mb-10">
        Expand your mind, reading{" "}
        <span className="text-neutral-200 text-opacity-50">a book</span>
      </h1>

      <div className="md:flex-grow flex flex-col">{children}</div>
    </section>
  );
};

export default FormBlock;
