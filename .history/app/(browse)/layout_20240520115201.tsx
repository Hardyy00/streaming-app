import Navbar from "./_components/navbar";

const BrowseLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full"> {children} </div>
    </>
  );
};

export default BrowseLayout;
