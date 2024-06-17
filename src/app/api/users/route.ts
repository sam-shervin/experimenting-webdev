import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  const { name, email, genre } = await req.json();
  console.log(name, email, genre);
  await prisma.user.create({
    data: {
      name,
      email,
      genre,
    },
  });

  return NextResponse.json({ message: "success" }, { status: 200 });
}
