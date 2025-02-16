import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
// const bcrypt = require('bcrypt');


export async function POST(request) {
  try {
    const { email, password } = await request.json()

    if(!email || !password) {
      return NextResponse.json({message: "Invalid credentials"}, { status: 401} )  
    }

    const user = await prisma.user.findUnique({where:{email}})

    if(!user) {
      return NextResponse.json({message: "Invalid credentials"}, { status: 401} )  
    } 

    const isValid = await bcrypt.compare(password, user.password)

    if(!isValid){
      return NextResponse.json({message: "Invalid credentials"}, { status: 401} )  
    }

    return NextResponse.json({message: "User logged in", user: user}, { status: 200})
    
  } catch (error) {
    console.log(error)
    return NextResponse.json({message: "broken all together"}, { status: 500} )
  }
}
