import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        pronouns: true,
        sexuality: true,
        gender: true,
        flags: true,
        avatarUrl: true,
        isFemboy: true,
      },
      take: 100,
    });

    return NextResponse.json({ users });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ users: [] });
  }
}
