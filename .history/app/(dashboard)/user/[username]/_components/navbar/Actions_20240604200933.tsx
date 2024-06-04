import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

const Actions = () => {
  return <div className="flex items-center justify-end gap-x-2 ml-4"></div>;
};

export default Actions;
