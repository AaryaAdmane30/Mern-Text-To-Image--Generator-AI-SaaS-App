
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means no user logged in
  const [showLogin, setShowLogin] = useState(false); // controls login/signup modal
  const [token, setToken] = useState(localStorage.getItem('token')); // token from localStorage
  const [credit, setCredit] = useState(false); // for user credit feature

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
const loadCreditsData = async () => {
  try {
    const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
      headers: { token } // or { Authorization: `Bearer ${token}` } depending on backend
    });

    if (data.success) {
      setCredit(data.credits);
      setUser(data.user);
    } else {
      toast.error(data.message || "Failed to load credits");
    }
  } catch (error) {
    console.error(error);
    toast.error(error.message || "Something went wrong while fetching credits");
  }
};

// Logout
const logout = () => {
  localStorage.removeItem("token");
  setToken("");
  setUser(null);
};

// Load credits whenever token exists
useEffect(() => {
  if (token) {
    loadCreditsData();
  }
}, [token]);



  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    token,
    setToken,
    credit,
    setCredit,
    backendUrl,
    loadCreditsData,
    logout
    
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
