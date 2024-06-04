import { getSelfByUsername } from "@/lib/auth-service";
import { redirect } from "next/navigation";

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect("/");
  }
  return (
    <>
      {self.username}
      {children}
    </>
  );
};

export default CreatorLayout;
