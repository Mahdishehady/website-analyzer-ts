import mongoose from "mongoose"

const connectDB=async() =>
{
    try{
        await mongoose.connect("mongodb://localhost:27017/next-auth")
        console.log("connect")


    }catch(err){
    console.log(err)
}

}
export default connectDB