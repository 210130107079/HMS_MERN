import mongoose from "mongoose";

export const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"HMS",
    }).then(()=>{
        console.log("MongoDB Connected");
    }).catch(()=>{
        console.log("MongoDB Connection Failed");
        process.exit(1);
    })
}