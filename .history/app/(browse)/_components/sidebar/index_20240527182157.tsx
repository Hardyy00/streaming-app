import Toggle from "./Toggle";
import Wrapper from "./wrapper";

const Sidebar = async () => {
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
