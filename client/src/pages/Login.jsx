import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

import { motion } from "motion/react";

const Login = () => {
  const [state, setState] = useState("Login");

  const { setShowLogin } = useContext(AppContext);
 


  // Function to toggle between Login and Sign Up
  const toggleState = () => setState(state === "Login" ? "Sign Up" : "Login");

  //  display the scrolling of the page while we try to login in or signup
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form className="relative bg-white rounded-xl p-6 sm:p-8 w-full max-w-md shadow-lg"
       initial={{ opacity: 0.2, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}>

        {/* Close button */}
        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="close"
          className="absolute top-5 right-5 cursor-pointer"
        />

        {/* Heading */}
        <h1 className="text-xl font-semibold text-gray-800 mb-2 text-center">
          {state}
        </h1>
        <p className="text-sm text-gray-500 mb-4 text-center">
          {state === "Login"
            ? "Welcome Back! Please sign in to continue"
            : "Create your account to get started"}
        </p>

        {/* Full Name input (Sign Up only) */}
        {state === "Sign Up" && (
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-3 hover:border-gray-500 transition-colors">
            <img
              src={assets.user_icon}
              alt="user icon"
              className="w-6 h-6 mr-3"
            />
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full outline-none text-gray-700 text-sm"
            />
          </div>
        )}

        {/* Email input */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-3 hover:border-gray-500 transition-colors">
          <img
            src={assets.email_icon}
            alt="email icon"
            className="w-6 h-6 mr-3"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full outline-none text-gray-700 text-sm"
          />
        </div>

        {/* Password input */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-3 hover:border-gray-500 transition-colors">
          <img
            src={assets.lock_icon}
            alt=""
            className="w-6 h-6 mr-3"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full outline-none text-gray-700 text-sm"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-2.5 mt-3 text-white bg-blue-800 hover:bg-blue-700 rounded-md transition-colors cursor-pointer"
        >
          {state === "Login" ? "Login" : "Sign Up"}
        </button>

        {/* Forgot password link (Login only) */}
        {state === "Login" && (
          <p className="mt-3 text-center text-sm text-blue-600 cursor-pointer hover:underline">
            Forgot Password?
          </p>
        )}

        {/* Secondary button to toggle between Login and Sign Up */}
        <button
          type="button"
          className="bg-gray-800 w-full text-white py-2 mt-3 rounded-md hover:bg-gray-700 transition-colors"
          onClick={toggleState}
        >
          {state === "Login" ? "Create Account" : "Login"}
        </button>

        {/* Bottom toggle link */}
        <p className="mt-5 text-center text-gray-700">
          {state === "Login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <span
            className="text-blue-600 font-medium cursor-pointer hover:underline"
            onClick={toggleState}
          >
            {state === "Login" ? "Sign Up" : "Login"}
          </span>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
