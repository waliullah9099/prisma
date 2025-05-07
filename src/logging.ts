
import { PrismaClient } from "@prisma/client";

const p = new PrismaClient({
    log: [
        {
            emit: 'event',
            level: "query"
        }
    ]
})

p.$on("query", (e) => {
    console.log(e);
    
})

const activityLoging =  async () => {

    const result = await p.user.findMany();
    // console.log(result);
    
}

activityLoging()
