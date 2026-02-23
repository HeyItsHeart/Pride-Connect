import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { signToken } from "@/lib/auth";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ ok: false, error: "Missing fields." });
    }

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json({ ok: false, error: "User not found." });
    }

    const validPassword = await bcrypt.compare(password, user.passwordHash);

    if (!validPassword) {
      return NextResponse.json({ ok: false, error: "Incorrect password." });
    }

    const token = signToken({
      id: user.id,
      username: user.username,
      pronouns: user.pronouns,
    });

    return NextResponse.json({ ok: true, token });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Server error." });
  }
}
