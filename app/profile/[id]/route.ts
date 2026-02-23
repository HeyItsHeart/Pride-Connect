import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface Params {
  id: string;
}

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        username: true,
        pronouns: true,
        sexuality: true,
        gender: true,
        flags: true,
        avatarUrl: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
