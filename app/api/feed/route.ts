import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
      include: { author: true },
    });

    const formatted = posts.map((p) => ({
      id: p.id,
      content: p.content,
      imageUrl: p.imageUrl,
      authorId: p.authorId,
      authorName: p.author.username,
      createdAt: p.createdAt.toISOString(),
      likes: p.likes,
    }));

    return NextResponse.json({ posts: formatted });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ posts: [] });
  }
}
