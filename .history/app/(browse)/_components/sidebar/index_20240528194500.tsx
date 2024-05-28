import { getRecommended } from "@/lib/recommeded-service";
import { Recommended } from "./Recommended";
import Toggle from "./Toggle";
import Wrapper from "./wrapper";

const Sidebar = async () => {
  const recommended = await getRecommended();

  console.log(recommended);
  return (
    <Wrapper>
      <Toggle />

      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export default Sidebar;
