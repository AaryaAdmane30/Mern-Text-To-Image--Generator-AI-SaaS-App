// JWT middleware for Express to authenticate users.

import jwt from "jsonwebtoken";

// const userAuth = (req, res, next) => {

//     //  find the user ID from token
//   const {token} = req.headers; 
//   if (!token) {
//     return res.status(401).json({ success: false, message: "Not authorized. Login again." });
//   }

//   try {
//    const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);

//    if(tokenDecode.id){
//     // req.body.userId = tokenDecode.id;
//     req.user = { id: tokenDecode.id };
//     } else {
//       return res.status(401).json({ success: false, message: "Not authorized. Login again." });
//     }
//     next();
//   } catch (error) {
//     console.error(error);
//     return res.status(401).json({ success: false, message: "Invalid or expired token." });
//   }
// };


const userAuth = (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({ success: false, message: "Not authorized. Login again." });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.userId = tokenDecode.id;   
    } else {
      return res.status(401).json({ success: false, message: "Not authorized. Login again." });
    }

    console.log("Decoded User ID:", tokenDecode.id); 
    next();
  } catch (error) {
    console.error("JWT Error:", error);
    return res.status(401).json({ success: false, message: "Invalid or expired token." });
  }
}


export default userAuth;