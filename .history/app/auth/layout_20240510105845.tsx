const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <nav className="p-1 bg-red-500 w-full">Auth Navbar</nav>
      </div>

      {children}
    </div>
  );
};

export default AuthLayout;
