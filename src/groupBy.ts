import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async () => {

    // find average age
    const result = await prisma.user.groupBy({
        by: ["age"],
        _count: {
            age: true
        },
        where: {
            email: {
                contains: "habiba@gmail.com"
            }
        },
        having: {
            age: {
                _max: {
                    gte: 19
                }
            }
        }
    })





    console.log(result);
    

};

groupBy();