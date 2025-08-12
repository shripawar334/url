// app/[shorturl]/page.js
import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic"; // ✅ Important

export default async function Page({ params }) {
  try {
    const shorturl = params.shorturl;

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shorturl });

    if (doc) {
      return redirect(doc.url);
    } else {
      return redirect(`${process.env.NEXT_PUBLIC_BASE_URL}`);
    }
  } catch (error) {
    console.error("Error fetching short URL:", error);
    return redirect(`${process.env.NEXT_PUBLIC_BASE_URL}`);
  }
}
