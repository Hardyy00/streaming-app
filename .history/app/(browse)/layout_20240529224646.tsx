import { Suspense } from "react";
import Container from "./_components/Container";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const BrowseLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
