import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const femboys = await prisma.user.findMany({
      where: { isFemboy: true },
      select: {
        id: true,
        username: true,
        pronouns: true,
        sexuality: true,
        gender: true,
        flags: true,
        avatarUrl: true,
      },
      take: 50,
    });

    return NextResponse.json({ femboys });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ femboys: [] });
  }
}
