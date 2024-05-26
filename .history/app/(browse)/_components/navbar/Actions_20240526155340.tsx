import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
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
          <Button>
            <Link href={`/u/${user.username}`}></Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Actions;
