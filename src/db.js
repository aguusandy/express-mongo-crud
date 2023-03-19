import mongoose from "mongoose";
import {DB_URI} from "./config.js"

export const connectDB = async () =>{
    const db = await mongoose.connect(DB_URI);
    console.log('database connected: ',db.connection.name)
}

export default connectDB();