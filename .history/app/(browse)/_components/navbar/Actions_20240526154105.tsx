import { currentUser } from "@clerk/nextjs/server";

const Actions = async () => {
  const user = await currentUser();

  return <div className="flex"></div>;
};

export default Actions;
