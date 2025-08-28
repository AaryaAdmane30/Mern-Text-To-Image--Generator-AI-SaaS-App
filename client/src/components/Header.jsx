import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center py-16 sm:py-20">
      {/* Tagline Box */}
      <div className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-purple-300 bg-gradient-to-r from-purple-50 to-pink-50 shadow-sm">
        <p className="text-sm sm:text-base font-medium text-purple-600">
          Best Text To Image Generator
        </p>
        <img src={assets.star_icon} alt="star" className="w-4 h-4" />
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl font-extrabold mx-auto mt-6 max-w-[600px] leading-tight text-neutral-800">
        Turn Text To{" "}
        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Image
        </span>
        , In seconds!
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-lg text-neutral-600 max-w-[500px] leading-relaxed">
        Transform your imagination into visuals instantly. Just type, hit
        generate, and see magic happen ✨
      </p>

      {/* Generate Image Button */}
      <button className="sm:text-lg text-white bg-black w-auto mt-6 px-10 py-2.5 flex items-center justify-center gap-2 rounded-full shadow-md hover:scale-105 transition-transform">
        Generate Images
        <img className="h-5 inline-block" src={assets.star_group} alt="" />
      </button>

      {/* Preview Images */}
      <div className="mt-8 flex justify-center gap-4">
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
      </div>
     <p className="mt-2 text-black-500 text-sm sm:text-base">
  Generated Images From <span className="font-semibold text-purple-600">Imagify</span>
</p>

    </div>
  );
};

export default Header;
