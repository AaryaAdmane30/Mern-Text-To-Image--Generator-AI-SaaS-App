import userModel from "../models/userModels.js";
import FormData from "form-data"; // pacakage installed already
import axios from "axios";

//  This  will generate prompt(text) to image : 


export const generateImage = async (req, res) => {
  try {
    const userId = req.userId;  // ✅ take from JWT middleware
    const { prompt } = req.body; // ✅ only prompt comes from body

    if (!userId || !prompt) {
      return res.json({ success: false, message: "Missing Details" });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: "No credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

    // 👉 ClipDrop API call
    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
          ...formData.getHeaders(),
        },
        responseType: "arraybuffer",
      }
    );

    // Convert buffer to base64
    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    // Deduct 1 credit
    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance - 1,
      resultImage,
    });
    console.log("REQ.BODY:", req.body);

  } catch (error) {
    console.error("Error in generateImage:", error);
    res.json({ success: false, message: error.message });
  }
};
