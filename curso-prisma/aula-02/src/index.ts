import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

(async () => {
  const posts = await prisma.post.findMany();
  console.log("Posts encontrados no banco:", posts);
})();
