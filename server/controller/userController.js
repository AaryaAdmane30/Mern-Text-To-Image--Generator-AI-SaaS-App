import userModel from "../models/userModels.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const registerUser = async(req,res) => {
    try{
        const {name , email ,password} = req.body
    }
    catch(error){

    }
}
export default registerUser