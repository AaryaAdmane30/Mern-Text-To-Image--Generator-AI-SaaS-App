import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    logout();
    setShowMenu(false);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between px-4 py-4">
      <Link to={"/"}>
        <img src={assets.logo} alt="logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      {user ? (
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => navigate("/buy")}
            className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 rounded-full hover:scale-105 transition-all duration-300"
          >
            <img src={assets.credit_star} alt="credit" />
            <p className="text-xs sm:text-sm font-medium text-gray-600">
              Credits left : {credit}
            </p>
          </button>

          <p className="text-gray-600 max-sm:hidden pl-4">
            Hi, {user.name}
          </p>

          {/* Profile */}
          <div className="relative">
            <img
              src={assets.profile_icon}
              className="w-10 drop-shadow cursor-pointer"
              alt="user"
              onClick={() => setShowMenu(!showMenu)}
            />

            {showMenu && (
              <div className="absolute top-12 right-0 z-10 bg-white text-black rounded shadow-md">
                <ul className="p-2 list-none m-0 rounded-md border text-sm">
                  <li
                    onClick={handleLogout}
                    className="cursor-pointer py-1 px-4 hover:bg-gray-100 rounded"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-5">
          <p
            onClick={() => navigate("/buy")}
            className="cursor-pointer hover:text-indigo-400 transition-colors duration-200"
          >
            Pricing
          </p>

          <button
            onClick={() => setShowLogin(true)}
            className="bg-zinc-800 text-white px-7 py-3 sm:px-10 text-sm rounded-full hover:bg-blue-500 hover:scale-105 transition duration-300 ease-in-out"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
