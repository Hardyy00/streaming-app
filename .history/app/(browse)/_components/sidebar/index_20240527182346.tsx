import { Recommended } from "./Recommended";
import Toggle from "./Toggle";
import Wrapper from "./wrapper";

const Sidebar = async () => {
  const recommended = await getRecommended();
  return (
    <Wrapper>
      <Toggle />

      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommended />
      </div>
    </Wrapper>
  );
};

export default Sidebar;
