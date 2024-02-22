import Logo from "@/components/ui/logo";
import React from "react";

const FormBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-foreground rounded-[30px] px-5 pt-5 pb-10">
      <div className="mb-10">
        <Logo />
      </div>
      <h1 className="text-[32px] text-primary font-bold mb-5">
        Expand your mind, reading{" "}
        <span className="text-[rgba(227,227,227,0.5)]">a book</span>
      </h1>
      {children}
    </div>
  );
};

export default FormBlock;
