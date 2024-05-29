import { getRecommended } from "@/lib/recommeded-service";
import { Recommended } from "./Recommended";
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

const SidebaSkeleton: React.FC = () => {};

export default Sidebar;
