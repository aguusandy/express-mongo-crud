import app from "./app.js"
import './db.js'
import { connectDB } from "./db.js";
import {PORT} from "./config.js"


app.listen(PORT);
console.log('server started in port: ',PORT)

connectDB();