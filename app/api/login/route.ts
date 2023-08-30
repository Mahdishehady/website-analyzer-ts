import User from "@/models/userModels";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from "@/db/config";


export async function POST(req : Request) {
  const body = await req.json();
  const { email, password } = body;
  try {
    connectDB();
    const isUserPresent = await User.findOne({ email });
    if (!isUserPresent) {
      return NextResponse.json({ msg: "User is not available" }, { status: 409 });
    }
    const isPasswordMatch = await bcrypt.compare(password, isUserPresent.password);
    if (!isPasswordMatch) {
      return NextResponse.json({ msg: "Invalid Credentials" }, { status: 409 });
    }
    const privateKey = crypto.randomUUID();

    // Create a token
    const token = jwt.sign({ email }, privateKey);

    // Create the response with the token
    const response = NextResponse.json(
      { msg: "User successfully logged in", success: true, token }, // Include the token here
      { status: 200 }
    );

    // Set the token as a cookie
    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err, success: false }, { status: 500 });
  }
}
