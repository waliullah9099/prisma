import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


const main = async () => {

//    const result = await prisma.post.delete({
    // where: {
        // id: 1
    // }
//    })


const result = await prisma.post.deleteMany({
    // where: {
        // published: true
    // }
})
    
   console.log(result);
   

}

main()