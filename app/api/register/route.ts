import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { toast } from "sonner";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    const hashed_password = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashed_password,
        image: "",
        token: "",
      },
    });

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
        image: user.image,
      },
    });
  } catch (error: any) {
    toast("Server error");
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
