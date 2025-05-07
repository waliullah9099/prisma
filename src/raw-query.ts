import { PrismaClient } from "@prisma/client";

const p = new PrismaClient();

const rawQuery = async () => {
//   const result = await p.$queryRaw`SELECT * FROM "users"`;


// const result = await p.$queryRaw`TRUNCATE TABLE "users" CASCADE`

const result = await p.$queryRaw`TRUNCATE TABLE "categories" CASCADE`

  console.log(result);
};

rawQuery();
