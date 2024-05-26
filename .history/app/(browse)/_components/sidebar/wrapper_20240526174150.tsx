interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <aside>{children}</aside>;
};

export default Wrapper;
