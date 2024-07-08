import { getSelf } from "./auth-service";
import { db } from "./db";

export const getStreams = async () => {
  let userId;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch {
    userId = null;
  }

  let streams = [];

  if (userId) {
    stream = await db.stream.findMany({
      include: {
        user: true,
      },
    });
  } else {
  }
};
