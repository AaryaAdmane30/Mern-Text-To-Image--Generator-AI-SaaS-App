import express from "express"
import cors from "cors"
import 'dotenv/config'


import connectDb from "./config/mongodb.js"

const PORT = process.env.PORT || 4000
const app = express ();

app.use(express.json())

app.use(cors())

await connectDb()


app.get('/',(req,res) => res.send("Api is Working "));

app.listen(PORT,() => console.log(`Server Running on PORT ${PORT}`))

