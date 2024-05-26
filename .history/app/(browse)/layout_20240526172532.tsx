import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const BrowseLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        {children}{" "}
      </div>
    </>
  );
};

export default BrowseLayout;
