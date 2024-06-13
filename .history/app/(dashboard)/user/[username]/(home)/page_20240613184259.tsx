import { StreamPlayer } from "@/components/stream-player";
import { getUserByUsername } from "@/lib/user-service";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

interface CreatorPageProps {
  params: {
    username: string;
  };
}

const CreatorPage: React.FC<CreatorPageProps> = async ({ params }) => {
  // to make sure other user doesn't access some another users dashboard
  const externalUser = await currentUser();
  const user = await getUserByUsername(params.username);

  console.log("user " ,user);
  console.log('external user' , externalUser);;

  if (!user || externalUser?.id !== user?.id || !user.stream) {
    throw new Error("Unauthorized");
  }

  return (
    <div className="h-full">
      <StreamPlayer user={user} stream={user.stream} isFollowing={true} />
    </div>
  );
};

export default CreatorPage;
