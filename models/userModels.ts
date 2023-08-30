import mongoose from "mongoose"

let userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String ,
        required : true 
    }

}
)

let User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;