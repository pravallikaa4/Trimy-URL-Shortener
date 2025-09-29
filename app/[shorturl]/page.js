import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";
export default async function Page({params}) {
    const shorturl=(await params.shorturl).toString();
    const client= await clientPromise;
    const db= client.db("trimly");
    const collection= db.collection("url");
    const doc= await collection.findOne({shorturl: shorturl});
    if(doc){
        redirect(doc.url)
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`) // redirect to home page if short url not found     
    }
    return <h1 className="text-3xl font-bold underline">Your URL is {url}</h1>
  }