const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-5 pb-10 pt-5 md:p-8 lg:pb-[27px] flex flex-col gap-2.5 md:gap-4">
      {children}
    </div>
  );
};

export default AuthLayout;
