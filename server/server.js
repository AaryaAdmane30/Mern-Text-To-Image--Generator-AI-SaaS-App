import express from "express";
import cors from "cors";
import 'dotenv/config';

import connectDb from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRouter.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/user', userRouter);
//  Image Route :
app.use('/api/image', imageRouter);

app.get('/', (req, res) => res.send("API is Working"));

app.get('/api/user/test', (req, res) => {
  res.json({ success: true, message: "User route works!" });
});


const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
  } catch (err) {
    console.error("Failed to connect to DB", err);
  }
};

startServer();
