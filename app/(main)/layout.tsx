import Header from "@/components/header";
import Footer from "@/components/footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-5 pb-10 pt-5 md:p-8 lg:pb-[27px] flex-grow flex flex-col gap-2.5 md:gap-4">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
