import { getSelfByUsername } from "@/lib/auth-service";
import { redirect } from "next/navigation";

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
  const user = await getSelfByUsername(params.username);

  if (!user) {
    redirect("/");
  }
  return (
    <div>
      {user.username}
      {children}
    </div>
  );
};

export default CreatorLayout;
