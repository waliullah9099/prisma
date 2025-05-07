import { PrismaClient } from '@prisma/client';

const p = new PrismaClient();

const main = async () => {
    // const result = await p.user.findUnique({
        // where: {
            // id: 1
        // }, 
        // includes as like populate in mongoose 
        // include: {
        //     post: true 
        // }
    // }).profile() // fluent API in prisma 


    // const result = await p.user.findUnique({
        // where: {
            // id: 1
        // }, 
        // includes as like populate in mongoose 
        // include: {
            // post: true 
        // }
    // })


    // relational filters 
    const result = await p.user.findMany({
        include: {
            post: {
                where: {
                    published: true
                }
            }
        }
    })



    console.dir(result, {depth: Infinity});
    
}

main()