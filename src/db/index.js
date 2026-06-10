import mongoose  from "mongoose";
import { db_name } from "../constants.js";

const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${db_name}`)
        console.log(`\n MongoDB connected!! ${connectionInstance.connection.db}`);
        
    } catch (error) {
        console.log("Error = ",error);
        process.exit(1);
    }
}

export default connectDB;