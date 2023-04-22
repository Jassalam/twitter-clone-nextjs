import prisma from "@/lib/prisma";
import { getTweets } from "@/lib/data";

export default async function handler(req, res){
    if(req.method !== 'GET'){
        return res.status(501).end()
    }

    const take= parseInt(req.query.take || 2)
    const cursor= parseInt(req.query.cursor) || null

    if(!cursor){
        res.status(400).send({error: 'Missing cursor parameter'})
    }

    const tweets= await getTweets(prisma, take, {ud: cursor})
    res.json(tweets)
}