import { getSelfByUsername } from "@/lib/auth-service";

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
  const user = await getSelfByUsername(params.username);
  return <div>{user.username}</div>;
};

export default CreatorLayout;
