interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <aside className="fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35]">
      {children}
    </aside>
  );
};

export default Wrapper;
