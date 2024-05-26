import { currentUser } from "@clerk/nextjs/server";

const Actions = async () => {
  const user = await currentUser();
  return <>gd</>;
};

export default Actions;
