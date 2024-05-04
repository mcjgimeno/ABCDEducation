import mongoose from "mongoose";
const { Schema } = mongoose;

const userModel = new Schema({
    username : { type : String },
    password : { type : String }

})

export default mongoose.model('User', userModel);