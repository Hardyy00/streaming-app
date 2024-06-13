import { getUserByUsername } from "@/lib/user-service";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

interface CreatorPageProps {
  params: {
    username: string;
  };
}

const CreatorPage: React.FC<CreatorPageProps> = async ({ params }) => {
  const externalUser = await currentUser();
  const user = await getUserByUsername(params.username);

  if (externalUser?.id !== user?.id) {
    return null;
  }

  if (externalUser) return <div className="h-full">Creator Page</div>;
};

export default CreatorPage;
