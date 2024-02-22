import Logo from "@/components/ui/logo";

const FormBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-foreground rounded-[30px] px-5 pt-5 pb-10 mb-2.5 md:h-full md:pl-10 md:pr-[168px] md:pt-10 md:pb-[214px]">
      <div className="mb-10 md:mb-[157px]">
        <Logo isAuth={true} />
      </div>
      <h1 className="text-[32px] text-primary font-bold mb-5 md:text-[64px] md:w-[444px] md:mb-10">
        Expand your mind, reading{" "}
        <span className="text-[rgba(227,227,227,0.5)]">a book</span>
      </h1>
      {children}
    </div>
  );
};

export default FormBlock;
