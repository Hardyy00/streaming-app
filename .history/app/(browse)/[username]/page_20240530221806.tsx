import { getUserByUsername } from "@/lib/user-service";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage: React.FC<UserPageProps> = async ({ params }) => {
  const user = await getUserByUsername(params.username);

  return <div>User : {user}</div>;
};

export default UserPage;
