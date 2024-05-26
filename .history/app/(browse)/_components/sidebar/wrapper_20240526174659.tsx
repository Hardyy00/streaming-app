interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <aside className="fixed">{children}</aside>;
};

export default Wrapper;
