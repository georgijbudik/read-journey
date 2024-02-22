const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-5 container">
      {children}
    </div>
  );
};

export default AuthLayout;
