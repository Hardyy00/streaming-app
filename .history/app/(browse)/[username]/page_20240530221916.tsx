import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";

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

  return <div className="flex flex-col gap-y-4">

    <p>User : {user.username}</p>
    <p>User Id: {usern</p>
  </div>;
};

export default UserPage;
