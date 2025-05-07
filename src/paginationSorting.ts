import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {

    // offset pagination 

    const offsetData = await prisma.post.findMany({
        skip: 3,
        take: 2
    });

    const CoursorData = await prisma.post.findMany({
        skip: 3,
        take: 2,
        cursor: {
            id: 40
        }
    });


    const sortingData = await prisma.post.findMany({
       orderBy: {
        id: "desc"
       },
       where: {
        title: 'amar sonar bangla'
       }
    });


    console.log(sortingData);
    

};

main();
