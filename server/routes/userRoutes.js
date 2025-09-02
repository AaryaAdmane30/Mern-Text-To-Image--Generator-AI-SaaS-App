
import express from "express";

import { registerUser , loginUser, userCredits } from "../controller/userController.js";
import userAuth from "../middleware/auth.js";

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/credits',userAuth,userCredits)

export default userRouter

// http://localhost:4000/api/user/register
