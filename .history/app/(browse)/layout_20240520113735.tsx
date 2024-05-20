const BrowseLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <div className="flex h-full pt-20 border-2 border-white">
        {" "}
        {children}{" "}
      </div>
    </>
  );
};

export default BrowseLayout;
