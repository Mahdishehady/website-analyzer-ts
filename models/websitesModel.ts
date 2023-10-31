import mongoose from "mongoose"

let websiteSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },

}
)

let websites = mongoose.models.websites || mongoose.model("websites", websiteSchema);

export default websites;