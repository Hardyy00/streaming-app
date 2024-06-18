"use client";

export const ChatHeader = () => {
  return (
    <div className="relative p-3 border-b">
      {/* TODO: chat side bar */}
      <p className="font-semibold text-primary text-center">Stream Chat</p>

      {/* TODO: Chat Community */}
    </div>
  );
};

export const ChatHeaderSkeleton = () => {
  return <div className="relative p-3 border-b  hidden md:block"></div>;
};
