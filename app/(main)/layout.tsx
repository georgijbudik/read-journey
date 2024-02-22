import Header from "@/components/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <section>{children}</section>
    </>
  );
};

export default MainLayout;
