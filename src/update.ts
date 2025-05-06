import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


const main = async () => {

    // const result = await prisma.post.update({
        // where: {
        //     id: 3
        // },
        // data: {
        //     title: "3",
        //     content: "3",
        //     author: "3",
        //     published: true
        // }
    // })
    

    const result = await prisma.post.upsert({
        where: {
            id: 13
        },
        update: {
           author: "Fahim",
           published: true
        },
        create: {
            title: "Upsert title",
            content: "upsert content"
        }
    })



    console.log(result);
    

}

main()