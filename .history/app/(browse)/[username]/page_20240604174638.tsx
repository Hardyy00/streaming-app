import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";
import { isBlockedByUser, isBlockingUser } from "@/lib/block-service";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage: React.FC<UserPageProps> = async ({ params }) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlocking = await isBlockingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  return (
    <div className="flex flex-col gap-y-4">
      <p>Username : {user.username}</p>
      <p>User Id: {user.id}</p>
      <p>Is Following : {isFollowing.toString()}</p>
      <p>Is blocked : {isBlocked}</p>
      <Actions
        userId={user.id}
        isFollowing={isFollowing}
        isBlocking={isBlocking}
      />
    </div>
  );
};

export default UserPage;
