import { getRecommended } from "@/lib/recommeded-service";
import { Recommended, RecommendedSkeleton } from "./Recommended";
import Toggle from "./Toggle";
import Wrapper from "./wrapper";
import React from "react";

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

const SidebarSkeleton: React.FC = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      <RecommendedSkeleton />
    </aside>
  );
};

export default Sidebar;
