import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 px-6 md:px-28 text-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Create Stunning AI Images
      </h1>
      <p className="text-gray-500 text-lg md:text-xl mb-12">
        Turn your imagination into breathtaking visuals instantly.
      </p>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl">
        {/* Image */}
        <img 
          src={assets.sample_img_1} 
          alt="AI generated sample" 
          className="w-80 xl:w-[28rem] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        />

        {/* Text Content */}
        <div className="text-left md:text-left max-w-xl space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Introducing The AI-Powered Text-to-Image Generator 
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Easily bring your boldest ideas to life with just a few words. 
            Whether you’re an artist seeking inspiration, a student creating projects, 
            or a marketer designing unique content our AI has you covered.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Powered by cutting-edge machine learning, this tool transforms your text 
            into visually striking artwork. You control the vibe — from photorealism to 
            dreamy surrealism.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Forget long hours of design. With AI, every idea can be visualized 
            in seconds fast, precise, and endlessly creative.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The future of creativity is here. All it takes is your imagination.🪄
          </p>
        </div>
      </div>
    </div>
  )
}

export default Description
