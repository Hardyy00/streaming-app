import { getRecommended } from "@/lib/recommeded-service";
import { Recommended, RecommendedSkeleton } from "./Recommended";
import Toggle from "./Toggle";
import Wrapper from "./wrapper";
import React from "react";
import { UserItemSkeleton } from "./user-item";
import { Skeleton } from "@/components/ui/skeleton";

const Sidebar = async () => {
  const recommended = await getRecommended();

  return (
    <Wrapper>
      <Toggle />

      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton: React.FC = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      <Skeleton className="w-[10rem] h-[5rem]" />
    </aside>
  );
};

export default Sidebar;
