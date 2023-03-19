import {Schema,model} from "mongoose";

const structureSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
},{
    versionKey: false,
    timestamps: true
});

export default model('structure',structureSchema);