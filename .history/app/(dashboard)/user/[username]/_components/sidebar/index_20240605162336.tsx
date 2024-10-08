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
  return <aside></aside>;
}
