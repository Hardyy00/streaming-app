"use client";

import { useViewerToken } from "@/hooks/use-viewer-token";
import { Stream, User } from "@prisma/client";
import { LiveKitRoom } from "@livekit/components-react";
import { useChatSidebar } from "@/store/use-chat-sidebar";
import { cn } from "@/lib/utils";

import Video, { VideoSkeleton } from "./video";
import { Chat, ChatSkeleton } from "./chat";
import { ChatToggle } from "./chat-toggle";
import { Header, HeaderSkeleton } from "./header";
import { InfoCard } from "./InfoCard";
import { AboutCard } from "./about-card";

interface StreamPlayerProps {
  user: Partial<User> & {
    stream: Partial<Stream> | null;
    _count: {
      followedBy: number;
    };
  };
  stream: Partial<Stream>;
  isFollowing: boolean;
}

export const StreamPlayer: React.FC<StreamPlayerProps> = ({
  user,
  stream,
  isFollowing,
}) => {
  const { token, name, identity } = useViewerToken(user.id!);

  const { collapse } = useChatSidebar((state) => state);

  if (!token || !name || !identity) {
    return <StreamPlayerSkeleton />;
  }
  return (
    <>
      {collapse && (
        <div className="hidden lg:block fixed top-[100px] right-2 z-50">
          <ChatToggle />
        </div>
      )}
      <LiveKitRoom
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        className={cn(
          "grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 h-full",
          collapse && "lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
        )}
      >
        <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-3 lg:overflow-y-auto hidden-scrollbar pb-10">
          <Video hostName={user.username!} hostIdentity={user.id!} />

          <Header
            hostName={user.username!}
            hostIdentity={user.id!}
            viewerIdentity={identity}
            imageUrl={user.imageUrl!}
            isFollowing={isFollowing}
            name={stream.name!}
          />
          <InfoCard
            hostIdentity={user.id!}
            viewerIdentity={identity}
            name={stream.name!}
            thumbnailUrl={stream.thumbnail!}
          />

          <AboutCard
            hostName={user.username!}
            hostIdentity={user.id!}
            viewerIdentity={identity}
            bio={user.bio!}
            followedByCount={user._count.followedBy}
          />
        </div>

        <div className={cn("col-span-1", collapse && "hidden")}>
          <Chat
            hostIdentity={user.id!}
            viewerName={name}
            hostName={user.username!}
            isFollowing={isFollowing}
            isChatEnabled={stream.isChatEnabled!}
            isChatDelayed={stream.isChatDelayed!}
            isChatFollowersOnly={stream.isChatFollowersOnly!}
          />
        </div>
      </LiveKitRoom>
    </>
  );
};

export const StreamPlayerSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:gapy-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full">
      <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
        <VideoSkeleton />
        <HeaderSkeleton />
      </div>

      <div className="col-span-1 bg-background">
        <ChatSkeleton />
      </div>
    </div>
  );
};
