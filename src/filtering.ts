import { PrismaClient } from "@prisma/client";

const p = new PrismaClient();

const filtering = async () => {
  /*
    // and filtaring 
    const result = await p.post.findMany({
        where: {
            AND: [
                {
                    title: {
                        contains: "tahar"
                    }
                },
                {
                published: true
                }
            ]
        }
    })

    */

  /*
    // or filtaring 
const result = await p.post.findMany({
    where: {
        OR: [
            {
                title: {
                    contains: "tahar"
                }
            }, 
            {
                published: true
            }
        ]
    }
})

  */

  /*

  // NOT filtaring
  const result = await p.post.findMany({
    where: {
        NOT: [
            {
                title: {
                    contains: "tahar"
                }
            },
            {
                published: false
            }
        ]
    }
  });

    */

  /*

  const result = await p.user.findMany({
        where: {
        email: {
            // startsWith: 'h'
            // endsWith: "dev.com"
            equals: "user@gmail.com"
        }
        }
  })

      */

  /*

  const userArr = ["habiba1", "habiba", "rezwan"];

  const userNameInArr = await p.user.findMany({
    where: {
        username: {
            in: userArr
        }
    }
  })


      */


  const inDeptData = await p.user.findUnique({
    where: {
        id: 1
    },
    include: {
       post: {
        include: {
            postCategory: {
                include: {
                    categor: true
                }
            }
        }
       }
    }
  })


  console.dir(inDeptData, {depth: Infinity});
};

filtering();

/* 

import { PrismaClient } from "@prisma/client";

const p = new PrismaClient()

const filtering =  async () => {

    const result = await p.
}

filtering()


*/
