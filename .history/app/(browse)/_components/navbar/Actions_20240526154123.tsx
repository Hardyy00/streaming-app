import { currentUser } from "@clerk/nextjs/server";

const Actions = async () => {
  const user = await currentUser();

  return <div className="flex items-center justify-end gap-x-2 ml-4"></div>;
};

export default Actions;
