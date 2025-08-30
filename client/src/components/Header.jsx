import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);

  const navigate = useNavigate();

  //  If the User is not login then when we click on the Generate button it will take us result otherwise it will show Login page 
  const onClickHandler = () => {
    if (user) {
      //  if the user is logged in directly result page 
      navigate("/result");
    } else {
      //  otherwise when we click on the generate if the user is not there then it will show login page 
      setShowLogin(true);
    }
  };
  return (
    //  its for the motion the flow when we open the webiste and refresh it :
    <motion.div
      className="flex flex-col justify-center items-center text-center py-16 sm:py-20"
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}

      // initial: the starting state of the element.

      // whileInView: the state when the element scrolls into view.

      // transition: how the animation behaves (duration, easing, etc.).
    >
      {/* Tagline Box */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-purple-300 bg-gradient-to-r from-purple-50 to-pink-50 shadow-sm"
      >
        <p className="text-sm sm:text-base font-medium text-purple-600">
          Best Text To Image Generator
        </p>
        <img src={assets.star_icon} alt="star" className="w-4 h-4" />
      </motion.div>

      {/* Main Heading */}
      <motion.h1 className="text-4xl sm:text-6xl font-extrabold mx-auto mt-6 max-w-[600px] leading-tight text-neutral-800">
        Turn Text To{" "}
        <span
          className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 2 }}
        >
          Image
        </span>
        , In seconds!
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="mt-4 text-lg text-neutral-600 max-w-[500px] leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Transform your imagination into visuals instantly. Just type, hit
        generate, and see magic happen ✨
      </motion.p>

      {/* Generate Image Button */}
      <motion.button
        onClick={onClickHandler}
        className="sm:text-lg text-white bg-black w-auto mt-6 px-10 py-2.5 flex items-center justify-center gap-2 rounded-full shadow-md hover:scale-105 transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
      >
        Generate Images
        <img className="h-5 inline-block" src={assets.star_group} alt="" />
      </motion.button>

      {/* Preview Images */}
      <motion.div
        className="mt-8 flex justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
         whileHover={{ scale: 1.05, duration: 0.1 }}
      >
        {Array(6)
          .fill("")
          .map((_, index) => (
            <img
             
              //  Terniary operator :
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              // index % 2 === 0 → checks if index is even or odd
              // If true → use assets.sample_img_2.

              // If false → use assets.sample_img_1.
              //  Even rows/images → sample_img_2
              // odd row - sample_img_1
              key={index}
              className="cursor-pointer w-20 h-20 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          ))}
      </motion.div>


      <motion.p
        className="mt-2 text-black-500 text-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Generated Images From{" "}
        <span className="font-semibold text-purple-600">Imagify</span>
      </motion.p>
    </motion.div>
  );
};

export default Header;
