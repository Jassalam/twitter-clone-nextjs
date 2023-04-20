import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"
import prisma from "@/lib/prisma"

export default async function handler(req, res){
   if(req.method !== 'POST'){
    return res.status(501).end()
   }

const session = await getServerSession(req, res, authOptions)

//if(!session) return res.status(401).json({message: 'Not logged in'})
 
const user= await prisma.user.findUnique({
    where: {
        email: session.user.email,
    },
})

//if(!user) return res.status(401).json({message: 'User not Found'})


    if(req.method === 'POST'){ 
        //handle the post request

        await prisma.tweet.create({
            data:{
                content: req.body.content,
                author: {
                    connect: {id: user.id},
                },
            },
    
        })
        res.end()
        return
}
res.end()
    }

    