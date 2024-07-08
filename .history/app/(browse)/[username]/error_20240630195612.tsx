"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <h1 className="text-4xl">Something Went Wrong</h1>

      {/* <p>Sorry! User couldn&apos;t be found.</p> */}

      <Button variant="secondary" className="rounded-xl" asChild>
        <Link href={"/"}>Go back home</Link>
      </Button>
    </div>
  );
}
