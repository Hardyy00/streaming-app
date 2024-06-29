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

  if (!user || !user.stream) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  // return a not found, if current user if blocked by the other user
  // if (isBlocked) {
  //   notFound();
  // }

  return <div>User name Page</div>;
};

export default UserPage;
