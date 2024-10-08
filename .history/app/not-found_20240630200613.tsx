import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <h1 className="text-4xl">404</h1>

      <p>Sorry! Page couldn&apos;t be found.</p>

      <Button variant="secondary" className="rounded-xl" asChild>
        <Link href={"/"}>Go back home</Link>
      </Button>
    </div>
  );
}
