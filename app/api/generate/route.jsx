// app/api/generate/route.js
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.url || !body.shorturl) {
      return Response.json({ success: false, error: true, message: 'Missing required fields' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // Check if the short URL already exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return Response.json({ success: false, error: true, message: 'URL already exists!' }, { status: 409 });
    }

    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl
    });

    return Response.json({ success: true, error: false, message: 'URL Generated Successfully' }, { status: 201 });
  } catch (err) {
    console.error("Error in /api/generate:", err);
    return Response.json({ success: false, error: true, message: 'Server error' }, { status: 500 });
  }
}
