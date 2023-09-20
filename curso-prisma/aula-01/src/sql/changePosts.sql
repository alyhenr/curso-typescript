ALTER TABLE "posts" ADD COLUMN "createdAt" DATE DEFAULT(NOW());

ALTER TABLE "posts" RENAME COLUMN "body" TO "content";
