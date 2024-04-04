import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        require : true,
    },
    email: {
        type: String,
        require : true,
        unique : true
    },
    password: {
        type: String,
        require : true,
        lowercase : true
    }
},{timestamps:true});

export default mongoose.model('User', schema);