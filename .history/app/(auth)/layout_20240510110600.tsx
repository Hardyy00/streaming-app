const AuthLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}): {
  children: React.ReactNode;
} => {
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <nav className="p-4 bg-red-500 w-full">Auth Navbar</nav>
      </div>

      {children}
    </div>
  );
};

export default AuthLayout;
