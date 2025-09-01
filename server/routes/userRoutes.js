

import express from "express";

import { registerUser , loginUser, userCredits } from "../controller/userController.js";

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/credits',userCredits)

export default userRouter

// http://localhost:4000/api/user/register
