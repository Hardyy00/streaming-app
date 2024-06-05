import { Toggle } from "./Toggle";
import { Wrapper } from "./Wrapper";
import { Navigation } from "./navigation";

export default function Sidebar() {
  return (
    <Wrapper>
      <Toggle />
      <Navigation />
    </Wrapper>
  );
}
