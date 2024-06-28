import connectMongoDB from "../../libs/mongodb";
import UserModel from "../../models/Mongoose";
import { NextResponse } from "next/server";
 
export async function GET() {
    await connectMongoDB();
    const users = await UserModel.find();
    return NextResponse.json({ users });
}
 
export async function POST(request) {
    const { name,phoneNumber,stream} = await request.json();
   await connectMongoDB()
    await UserModel.create({ name, phoneNumber,stream});
    return NextResponse.json({ message: "User Created" }, { status: 201 });}