import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "motion/react";


const Step = () => {
  return (
    <motion.div className="text-center my-16"
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      
      viewport={{ once: true }}>

      {/* Section Heading */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">How it works</h1>
      <p className="text-lg text-gray-600 mb-12">
        Transform words into stunning images ✨
      </p>

      {/* Steps */}
      <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer text-center p-6 rounded-lg shadow-md bg-white 
                       transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img src={item.icon} alt={item.title} className="w-16 h-16 mb-4" />
            <h2 className="text-xl font-semibold text-neutral-800 mb-2">
              {item.title}
            </h2>
            <p className="text-neutral-600">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Step;
