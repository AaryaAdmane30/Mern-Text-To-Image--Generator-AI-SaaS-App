import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";

import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [isImageloading, setImageLoading] = useState(false);

  const [image, setImage] = useState(assets.sample_img_1);
  const [loading, setLoading] = useState(false);

  const [input , setInput] = useState('');

  const {generateImage} = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if(!input) return;

    setImageLoading(true);
    setLoading(true);

    const image = await generateImage(input);
    setImage(image);

    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <motion.form onSubmit={onSubmitHandler} className="flex flex-col items-center gap-6 mt-10 min-h-[90vh]"
    initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}>
      {/* Image + Loading Bar */}
      <div className="relative">
        <img
          src={image}
          alt="Sample"
          className="max-w-sm rounded-xl shadow-lg"
        />
        <span
          className={`absolute bottom-0 left-0 h-1 bg-blue-500 rounded-full transition-all duration-[10000ms] ${
            loading ? "w-full" : "w-0"
          }`}
        ></span>
      </div>
      <p 
  className={`text-gray-600 text-sm ${!loading ? "hidden" : ""}`}
>
 Loading..
</p>

      {!isImageloading &&  
      /// if image is not loaded (we have to prompt in text) then load the Generate Button
      (
        /* Input + Button */
        <div className="flex w-full max-w-xl gap-2 mt-6">
          <input
          onChange={e => setInput(e.target.value)} value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-gray-100 outline-none px-4 py-3 rounded-l-full text-blue-700 placeholder-blue-500 placeholder-opacity-100"
          />

          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-r-full hover:scale-105 transition-transform"
          >
            Generate
          </button>
        </div>
      )}

      {isImageloading &&  
      // if the image is loaded after generating then display Download Button
      (
        <div className="flex gap-2 flex-wrap justify-center text-sm mt-10">
          <p
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer hover:bg-gray-100 transition"
            onClick={() => {
              setImageLoading(false);
              setInput('');
            }}
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-zinc-900 text-white px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-transform"
          >
            Download
          </a>
          {/* whenever user downloads the image it will download that image */}
        </div>
      )}
    </motion.form>
  );
};

export default Result;
