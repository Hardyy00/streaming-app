import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

const Actions = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4">
      {!user && (
        <SignInButton>
          <Button> Login </Button>
        </SignInButton>
      )}
      {!!user && (
        <div className="flex items-center gap-x-4">
          <Button
            size={"sm"}
            variant={"ghost"}
            className="text-muted-foreground hover:text-primary"
          >
            <Link href={`/u/${user.username}`}>
              <Clapperboard />
              <span>Dashboard</span>
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Actions;
