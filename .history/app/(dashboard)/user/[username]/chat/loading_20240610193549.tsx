import { Skeleton } from "@/components/ui/skeleton";

const ChatLoading = () => {
  return (
    <div className="p-6 space-y-4">
      <Skeleton className="h-10 w-[200px]" />
    </div>
  );
};

export default ChatLoading;
