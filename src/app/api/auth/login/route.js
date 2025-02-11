import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  // const { email, password } = await request.json();
  // console.log("server side email password", email, password);

  const users = await prisma.user.findMany();
  console.log(users)

  return NextResponse.json({ message: "Kalas" }, { status: 200 });
}
