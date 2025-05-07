import { PrismaClient } from "@prisma/client";

const p = new PrismaClient()

const batch =  async () => {

const createUser = p.user.create({
    data:{
        username: "waliullah",
        email: "waliullah@gmail.com"
    }
})


const updateUser = p.user.update({
    where: {
        id: 3
    },
    data: {
        username: "pagli"
    }
})

// console.log("updated user:", updateUser);


    const [ userData, updatedData ] = await p.$transaction([
        createUser,
        updateUser
    ])

    console.log(userData, updatedData);
}

batch()
