import { PrismaClient } from '@prisma/client';

const p = new PrismaClient();

const main = async () => {
    const result = await p.user.findUnique({
        where: {
            id: 1
        }
    }).post() // fluent API in prisma 

    console.log(result);
    
}

main()