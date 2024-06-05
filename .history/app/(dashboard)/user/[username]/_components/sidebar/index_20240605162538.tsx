import { Toggle } from "./Toggle";
import { Wrapper } from "./Wrapper";

export default function Sidebar() {
  return (
    <Wrapper>
      <Toggle />
    </Wrapper>
  );
}

export function SidebarSkeleton() {
  return (
    <aside
      className={
        "fixed left-0 w-[70px] lg:w-60  flex flex-col h-full bg-background border-r border-[#2D2E34] z-50"
      }
    ></aside>
  );
}
