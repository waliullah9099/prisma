import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
//   /*
  const create = await prisma.user.create({
      data: {
          username: "rezwan1",
          email: "rezwan1@gmail.com",
          role: UserRole.user
      }
  })

//   */

  /*
  const createProfile = await prisma.profile.create({
  data: {
  bio: "I will stay always same mentality",
  userId: 1
  }
  })
    */

  /*

  const create = await prisma.category.create({
    data: {
      name: "Software Engeenaring",
    },
  });
  */

  /*
const create = await prisma.post.create({
        data: {
            title: "How to works 'https' ?",
            content: "HTTPS, the secure version of HTTP, works by encrypting data transmitted between a web server and a client (like a browser) using Transport Layer Security (TLS), formerly known as Secure Sockets Layer (SSL).",
            authorId: 1,
            postCategory: {
                create: [
                    {
                        categoryId: 1,
                    },
                    {
                        categoryId: 2
                    },
                    {
                        categoryId: 3
                    }
                ]

                // for creating single category 
                // {
                    // categoryId: 2
                    // categor: {
                        // connect: {
                            // id: 1
                        // }
                    // }
                // }
            }
        },
        include: {
            postCategory: true
        }
    })
*/

/*

const create = await prisma.post.create({
    data: {
        title: "this is tahar ?",
        content: "content man  ",
        authorId: 1,
        postCategory: {
            create: [
                {
                    categoryId: 2,
                },
            ]
        }
    },
    include: {
        postCategory: true
    }
})
  */

  console.log(create);
};

main();
