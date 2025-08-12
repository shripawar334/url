import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb";


export default async function Page({ params }) {
    // Example: fetch the URL from a database or API using params.url
    // Replace this with your actual data fetching logic
    const shorturl = (await params).shorturl;

    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    const doc = await collection.findOne({ shorturl: shorturl });
    if (doc) {
         redirect(doc.url);
    }
    else {
        redirect(`${process.env.NEXT_PUBLIC_BASE_URL}`);
    }

}
