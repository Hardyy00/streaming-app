import { Button } from "@/components/ui/button";

const KeysPage = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1>Keys & URLS</h1>

        <Button variant={"primary"} className="rounded-xl">
          {" "}
          Generate{" "}
        </Button>
      </div>

      <div className="space-y-4"></div>
    </div>
  );
};

export default KeysPage;
