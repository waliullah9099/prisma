import { PrismaClient } from "@prisma/client";

const p = new PrismaClient();

const interactive = async () => {
  const result = await p.$transaction(async (itx) => {
    // query 1
    const getAllPosts = await itx.post.findMany({
      where: {
        published: true,
      },
    });

    // query 2
    const countUser = await itx.post.count();

    return {
      getAllPosts,
      countUser,
    };
  });

  console.log(result);
};


interactive()