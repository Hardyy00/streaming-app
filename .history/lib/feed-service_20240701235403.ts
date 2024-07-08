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
    // load only those stream for which the user is not blocked
    streams = await db.stream.findMany({
      where: {
        user: {
          NOT: {
            blocking: {
              some: {
                blockedId: userId,
              },
            },
          },
        },
      },

      select: {
        thumbnail: true,
        name: true,
        isLive: true,
        user: true,
      },

      orderBy: [
        {
          isLive: "desc",
        },

        {
          updatedAt: "desc",
        },
      ],
    });
  } else {
    streams = await db.stream.findMany({
      include: {
        user: true,
      },

      orderBy: [
        {
          isLive: "desc",
        },

        {
          updatedAt: "desc",
        },
      ],
    });
  }

  return streams;
};
