import mongoose from "mongoose"

const connectDB = async (dbName : string) => {
    try {
        await mongoose.connect("mongodb://localhost:27017/"+ dbName)
        console.log("connect")


    } catch (err) {
        console.log(err)        
    }
        
}
export default connectDB