import { Button } from "@/components/ui/button";
import { UrlCard } from "./_components/url-card";
import { getSelf } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/streams-service";

const KeysPage = async () => {
  const self = await getSelf();

  const stream = await getStreamByUserId(self.id);

  if (!stream) {
    throw new Error("Stream not found");
  }
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1>Keys & URLS</h1>

        <Button variant={"primary"} className="rounded-xl">
          {" "}
          Generate{" "}
        </Button>
      </div>

      <div className="space-y-4">
        <UrlCard />
      </div>
    </div>
  );
};

export default KeysPage;
