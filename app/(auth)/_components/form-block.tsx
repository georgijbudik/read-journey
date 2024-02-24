import Logo from "@/components/ui/logo";

const FormBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full md:flex-grow lg:flex-grow-0 bg-foreground rounded-3xl px-5 pt-5 pb-10 md:pt-10 md:px-[70px] lg:px-[64px]">
      <div className="mb-10 md:mb-[157px] lg:mb-[107px] flex flex-start">
        <Logo isAuth />
      </div>

      <h1 className="md:w-[444px] text-stone-50 text-3xl md:text-6xl font-bold tracking-wide md:tracking-wider mb-5 md:mb-10">
        Expand your mind, reading{" "}
        <span className="text-neutral-200 text-opacity-50">a book</span>
      </h1>

      {children}
    </section>
  );
};

export default FormBlock;
