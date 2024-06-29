import { getSelf } from "@/lib/auth-service";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" });

export const ourFileRouter = {
  thumbnailUploader: f({
    image: { maxFileCount: 1, maxFileSize: "4MB" },
  })
    .middleware(async () => {
      const self = await getSelf();

      return { user: self };
    })
    .onUploadComplete(async ({ metadata, file }) => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
