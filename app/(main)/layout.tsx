import Header from "@/components/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-5 pb-10 pt-5 md:p-8 lg:pb-[27px] flex flex-col gap-2.5 md:gap-4 h-full">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
