import {Schema,model} from "mongoose";

const algorithmSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    worstorder:{
        type: String
    },
    bestorder:{
        type: String
    }
},{
    versionKey: false,
    timestamps: true
});

export default model('algorithm',algorithmSchema);