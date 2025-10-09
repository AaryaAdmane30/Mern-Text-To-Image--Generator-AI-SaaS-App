import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Logged-in user
  const [showLogin, setShowLogin] = useState(false); // Show login/signup modal
  const [token, setToken] = useState(localStorage.getItem("token") || ""); // JWT token
  const [credit, setCredit] = useState(0); // User credits

  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

  // Load user credits
//  const loadCreditsData = async () => {
//   if (!token) return;

//   try {
//     const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     if (data.success) {
//       setCredit(data.creditBalance); // <-- fix here
//       setUser(data.user);
//     } else {
//       toast.error(data.message || "Failed to load credits");
//     }
//   } catch (error) {
//     console.error(error);
//     toast.error(error.response?.data?.message || error.message || "Something went wrong while fetching credits");
//   }
// };

const loadCreditsData = async () => {
  console.log("=== loadCreditsData START ===");

  if (!token) {
    console.warn("No token found! Cannot load credits.");
    return;
  }

  console.log("Token found:", token);
  console.log("Backend URL:", backendUrl);

  try {
    const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("Axios response data:", data);

    if (data.success) {
      console.log("Credits loaded successfully:", data.creditBalance);
      setCredit(data.creditBalance);
      setUser(data.user);
    } else {
      console.error("Backend returned success=false:", data.message);
      toast.error(data.message || "Failed to load credits");
    }
  } catch (error) {
    console.error("Axios GET /credits ERROR:");
    console.error("Error message:", error.message);
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response data:", error.response.data);
    }
    if (error.request) {
      console.error("Request made but no response:", error.request);
    }
    toast.error(
      error.response?.data?.message || error.message || "Something went wrong while fetching credits"
    );
  }

  console.log("=== loadCreditsData END ===");
};

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
    setCredit(0);
    toast.info("Logged out successfully");
  };

  // Automatically load credits if token exists
  useEffect(() => {
    if (token) loadCreditsData();
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
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
