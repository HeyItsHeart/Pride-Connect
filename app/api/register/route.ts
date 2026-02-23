import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { username, password, pronouns, sexuality, gender, flags, isFemboy } =
      await req.json();

    if (!username || !password) {
      return NextResponse.json({ ok: false, error: "Missing username or password." });
    }

    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) {
      return NextResponse.json({ ok: false, error: "Username already taken." });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        password: passwordHash,
        pronouns,
        sexuality,
        gender,
        flags,
        isFemboy,
      },
    });

    return NextResponse.json({ ok: true, user: { id: user.id, username: user.username } });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Server error." });
  }
}
