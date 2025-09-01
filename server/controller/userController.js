import userModel from "../models/userModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// REGISTER USER
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body || {};

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "Missing details" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(201).json({ success: true, token, user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// LOGIN USER
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Missing details" });
    }

    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ success: false, message: "User does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({ success: true, token, user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


//  Credentials :
const userCredits = async(req,res) =>{
  try{ 
    const {userId} = req.body;
    const user = await userModel.findById(userId)
    res.json({success:false , credits:user.creditBalance , user:{name:user.name}})

  }catch(error){
    console.log(error)
    res.status(500).json({success:false,message:error.message})

  }
}
export { registerUser, loginUser };
