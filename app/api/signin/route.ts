// import  {User}  from "@/models/userModels";
import User from "@/models/userModels";
import { NextResponse} from "next/server"
import bcrypt from "bcrypt" 
import jwt from "jsonwebtoken"
import connectDB from "@/db/config";


export async function POST(req : Request)
{

    const body= await req.json()
    const {email,password}=body;

    connectDB()c
    const isUserPresent = await User.findOne({email});
if(isUserPresent)
{
    return NextResponse.json({msg: "user is already present"},{status : 409})
    
}

const hashPassword = await bcrypt.hash(password,10)
try {
    const user = new User({email, password: hashPassword})
    await user.save()
    const token = jwt.sign({email}, "asdjasdasdasd")
    const response = NextResponse.json({msg : "user successful create"}, { status : 401})
    response.cookies.set("token",token)
    return response;

}catch(err){
    return NextResponse.json({msg: err},{status :500})
}

    return NextResponse.json({msg: "ok"})
}


