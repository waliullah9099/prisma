import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


const main = async () => {

    const result = await prisma.post.createMany({
        data: [
            {
                title: "this is multiple title",
                content: "this is multiple content",
                author: "this is multiple author name"
            },
            {
                title: "amar sonar bangla",
                content: "amar sonar bangla",
                author: "Mahi",
                published: true
            },
            {
                title: "tmi chawa",
                content: "agei valo silam",
            }
        ]
    })

    console.log(result);
    

}

main()