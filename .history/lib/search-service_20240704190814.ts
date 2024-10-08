import { db } from "@/lib/db";

import { getSelf } from "@/lib/auth-service";
import { Stream, User } from "@prisma/client";
import { resolve } from "path";

export const getSearch = async (term?: string) => {
  console.log("called");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  let userId;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch {
    userId = null;
  }

  let streams = [];

  if (userId) {
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
        OR: [
          {
            name: {
              contains: term,
            },
          },

          {
            user: {
              username: {
                contains: term,
              },
            },
          },
        ],
      },

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
  } else {
    streams = await db.stream.findMany({
      where: {
        OR: [
          {
            name: {
              contains: term,
            },
          },

          {
            user: {
              username: {
                contains: term,
              },
            },
          },
        ],
      },

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

  console.log(streams);

  return streams;
};
