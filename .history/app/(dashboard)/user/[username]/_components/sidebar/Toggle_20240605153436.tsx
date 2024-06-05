"use client";

import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";

export const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useCreatorSidebar(
    (state) => state
  );

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {collapsed && (
        <div className="w-full hidden  lg:flex items-center justify-center pt-4 mb-4 ">
          <Hint label={label} side={"right"} asChild>
            <Button variant={"ghost"} onClick={onExpand} asChild></Button>
          </Hint>
        </div>
      )}
    </>
  );
};
