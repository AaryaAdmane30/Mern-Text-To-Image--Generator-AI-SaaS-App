import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { motion } from "motion/react";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login"); // "Login" or "Sign Up"
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Close modal and reset fields
  const closeModal = () => {
    setShowLogin(false);
    setName("");
    setEmail("");
    setPassword("");
  };

  // Handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // console.log("Sending:", { name, email, password, state });


    // Client-side validation
    if (state === "Login" && (!email || !password)) {
      toast.error("Please fill in all fields");
      return;
    }
    if (state === "Sign Up" && (!name || !email || !password)) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const endpoint = state === "Login" ? "login" : "register";
      const payload =
        state === "Login" ? { email, password } : { name, email, password };

      const response = await axios.post(`${backendUrl}/api/user/${endpoint}`, payload);
      const data = response.data;

      if (data.success) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        setShowLogin(false);
        toast.success(`${state} successful!`);
        // Clear form fields
        setName("");
        setEmail("");
        setPassword("");
      } else {
        toast.error(data.message);
        console.log({ name, email, password });

      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again!");
    }
  };

  // Toggle between Login and Sign Up
  const toggleState = () => setState(state === "Login" ? "Sign Up" : "Login");

  // Disable scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        onSubmit={onSubmitHandler}
        
        className="relative bg-white rounded-xl p-6 sm:p-8 w-full max-w-md shadow-lg"
        initial={{ opacity: 0.2, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        
      >
        {/* Close button */}
        <img
          onClick={closeModal}
          src={assets.cross_icon}
          alt="close"
          className="absolute top-5 right-5 cursor-pointer"
        />

        {/* Heading */}
        <h1 className="text-xl font-semibold text-gray-800 mb-2 text-center">{state}</h1>
        <p className="text-sm text-gray-500 mb-4 text-center">
          {state === "Login"
            ? "Welcome Back! Please sign in to continue"
            : "Create your account to get started"}
        </p>

        {/* Full Name input (Sign Up only) */}
        {state === "Sign Up" && (
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-3 hover:border-gray-500 transition-colors">
            <img src={assets.user_icon} alt="user icon" className="w-6 h-6 mr-3" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full outline-none text-gray-700 text-sm"
            />
          </div>
        )}

        {/* Email input */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-3 hover:border-gray-500 transition-colors">
          <img src={assets.email_icon} alt="email icon" className="w-6 h-6 mr-3" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Your Email"
            className="w-full outline-none text-gray-700 text-sm"
          />
        </div>

        {/* Password input */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-3 hover:border-gray-500 transition-colors">
          <img src={assets.lock_icon} alt="" className="w-6 h-6 mr-3" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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

        {/* Secondary toggle button */}
        <button
          type="button"
          className="bg-gray-800 w-full text-white py-2 mt-3 rounded-md hover:bg-gray-700 transition-colors"
          onClick={toggleState}
        >
          {state === "Login" ? "Create Account" : "Login"}
        </button>

        {/* Bottom toggle link */}
        <p className="mt-5 text-center text-gray-700">
          {state === "Login" ? "Don't have an account? " : "Already have an account? "}
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
