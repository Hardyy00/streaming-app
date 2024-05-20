const BrowseLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <div className="flex h-full"> {children} </div>
    </>
  );
};

export default BrowseLayout;
