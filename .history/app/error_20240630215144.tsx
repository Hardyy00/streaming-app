"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      {/* <h1 className="text-4xl">Something Went Wrong</h1> */}

      <p className="text-2xl">Something went wrong</p>

      {/* <Button
        variant="secondary"
        className="rounded-xl"
        onClick={() => router.refresh()}
        asChild
      > */}
        Refresh
      </Button>
    </div>
  );
}
