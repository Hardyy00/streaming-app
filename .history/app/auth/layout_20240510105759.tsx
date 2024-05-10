const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col"></div>

      {children}
    </div>
  );
};

export default AuthLayout;
