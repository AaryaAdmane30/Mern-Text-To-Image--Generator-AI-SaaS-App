import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react";
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const GenerateBtn = () => {
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
    <motion.div className='pb-16 text-center'
     initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      
      viewport={{ once: true }}>
      <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-bold text-neutral-800 py-6 md:py-16'>
        See The Magic, Try Now
      </h1>

      <button onClick={onClickHandler}className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-transform'>
        Generate Images
        <img src={assets.star_group} alt='stars' className='h-6' />
      </button>
    </motion.div>
  )
}

export default GenerateBtn
