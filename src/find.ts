import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


const main = async () => {

    // find all here

    const getAllPost = await prisma.post.findMany({
        select: {
            author: true
        }
    });

    // const findFirst = await prisma.post.findFirstOrThrow({
        // where: {
            // published: false
        // }
    // })

    // const findUnique = await prisma.post.findUniqueOrThrow({
        // where: {
            // id: 2
        // }
    // })


    console.log({getAllPost});

}

main()