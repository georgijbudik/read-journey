const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-5 md:p-8 min-h-screen flex flex-col">{children}</div>
  );
};

export default AuthLayout;
