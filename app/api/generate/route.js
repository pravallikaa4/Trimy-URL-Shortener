// app/api/generate/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  // lazy import
  const clientPromise = (await import("@/lib/mongodb")).default;

  try {
    const body = await request.json();

    if (!body.url) {
      return NextResponse.json({ success: false, message: "URL is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("trimly");
    const collection = db.collection("url");

    const shorturl = body.shorturl || Math.random().toString(36).substring(2, 8);

    const existing = await collection.findOne({ shorturl });
    if (existing) {
      return NextResponse.json({ success: false, message: "Short URL already exists" }, { status: 409 });
    }

    await collection.insertOne({ url: body.url, shorturl });

    return NextResponse.json({
      success: true,
      message: "URL shortened successfully",
      shortUrl: `${process.env.NEXT_PUBLIC_HOST}/${shorturl}`,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}
