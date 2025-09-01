import mongoose from "mongoose"; 

const connectDb = async ()=> {
    console.log("Database Connected")
    await mongoose.connect(`${process.env.MONGO_DB_URL}/imagify`)
} 

export default connectDb