import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

const Actions = () => {
  return (
    <div className="flex items-center justify-end gap-x-2">
      <Button size={"sm"} className="text-muted-foreground">
        <Link href="/">
          <LogOut />
          Exit
        </Link>
      </Button>
    </div>
  );
};

export default Actions;
