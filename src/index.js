import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "app.js"

dotenv.config({
    path:"./env"
})
connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, ()=>{
        console.log("Listening on port")
    })
})
.catch((err) =>{
    console.log("Mongoose connection failed");
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