interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <aside className="fixed z-10">{children}</aside>;
};

export default Wrapper;
