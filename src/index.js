import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express"
dotenv.config({
    path:"./env"
})
connectDB()

const app = express();

app.listen(`${process.env.PORT}`, ()=>{
    console.log("listening on port");
})





// import express from "express";
// const app = express();

// (async () =>{
//     try{
//         await mongoose.connect(`${process.env.DATABASE_URL}/${db_name}`)
//         app.on("error", (error)=>{
//             console.log("error", error);
//             throw error;
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     }
//     catch(e){
//         console.log(e);
//     }
// })()