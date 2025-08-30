import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";
const Testimonials = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center my-20 py-12 text-center"
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      
      viewport={{ once: true }}>
    
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Customer Testimonials
      </h1>
      <p className="text-gray-500 text-lg md:text-xl mb-12">
        See what our users are saying ✨
      </p>

      {/* Testimonials Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/20 p-12 rounded-xl shadow-md hover:shadow-lg  flex flex-col items-center cursor-pointer text-center transition-transform hover:scale-[1.02]"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full w-16 h-16 mb-4 object-cover"
            />
            <h2 className="text-lg font-semibold text-neutral-800">
              {testimonial.name}
            </h2>
            <p className="text-sm text-gray-500 mb-3">{testimonial.role}</p>

            {/* Stars */}
            <div className="flex justify-center mb-4">
              {Array(testimonial.stars)
                .fill(null)
                .map((_, i) => (
                  <img
                    key={i}
                    src={assets.star_icon}
                    alt="star"
                    className="w-5 h-5"
                  />
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-neutral-600 leading-relaxed text-sm">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
