import React from "react";

interface CreatorPageProps {
  params: {
    username: string;
  };
}

const CreatorPage: React.FC<CreatorPageProps> = async ({ params }) => {
  return <div className="h-full">Creator Page</div>;
};

export default CreatorPage;
