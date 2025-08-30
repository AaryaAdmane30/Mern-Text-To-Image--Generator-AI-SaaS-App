import React, { useContext } from 'react';
import { assets, plans } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from "motion/react";


const BuyCredit = () => {
  const { user } = useContext(AppContext);

  return (
    <motion.div className="min-h-[80vh] pt-14 mb-10 bg-gray-50"
     initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}>

        
      {/* Plans Button */}
      <div className="text-center">
        <button className="border border-gray-400 px-10 py-2 rounded-full mb-6 hover:bg-gray-100 transition-all cursor-pointer">
          Our Plans
        </button>
      </div>

      {/* Heading */}
      <h1 className="text-center text-3xl font-semibold mb-10 sm:mb-14 text-gray-800">
        Choose The Plan
      </h1>

      {/* Plans Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-10">
        {plans.map((item, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg border border-gray-200 rounded-xl py-10 px-6 hover:scale-105 hover:shadow-xl transform transition-all duration-300"
          >
            

            {/* Icon */}
            <img
              src={assets.logo_icon}
              alt="plan icon"
              className="mx-auto mb-4 w-10 h-10"
            />

            {/* Plan Info */}
            <p className="text-lg font-semibold text-gray-800">{item.id}</p>
            <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            <p className="mt-6 text-gray-800">
              <span className="text-2xl font-bold">${item.price}</span> / {item.credits} credits
            </p>

            
            {/* Buttonm */}
<button
  className="w-full mt-8 text-sm rounded-md py-2.5 text-white 
             bg-gradient-to-r from-purple-700 to-blue-700 
             hover:from-purple-800 hover:to-blue-800 
             transition-colors cursor-pointer"
>
  {/*  If the user is logged inn then show the button purchase otherwise Get started button  */}
  {user ? 'Purchase' : 'Get Started'}
</button>

          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
