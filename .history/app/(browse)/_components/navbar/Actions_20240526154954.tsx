import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const Actions = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4">
      {!user && (
        <SignInButton>
          <Button > </Button
        </SignInButton>
      )}
      {user && <></>}
    </div>
  );
};

export default Actions;
