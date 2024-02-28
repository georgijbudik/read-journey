const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-5 md:p-8 flex flex-col h-full flex-grow">{children}</div>
  );
};

export default AuthLayout;
