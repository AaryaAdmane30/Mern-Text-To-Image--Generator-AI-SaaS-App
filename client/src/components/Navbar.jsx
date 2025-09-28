import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext"; 

const Navbar = () => {

const {user , setShowLogin , logout , credit} = useContext(AppContext);
//  used Context to get the user state and avoid prop drilling 
//  prop drilling means passing props from grandparents comp to parents and soo on like a chain 




const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-4 py-4 ">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="w-28 sm:w-32 lg:w-40" />
      </Link>
      <div>
        {user ? ( // if user is logged in :


          <div onClick={()=> navigate('/buy')} className="flex item-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py rounded-full hover:scale-105 transition-all duration-700">
              <img src={assets.credit_star} alt="" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">Credits left : {credit}</p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4 ">Hi,{user.name}</p>
            {/* Profile with dropdown */}
            <div className="relative group">
              <img
                src={assets.profile_icon}
                className="w-10 drop-shadow cursor-pointer"
                alt="user"
              />

              {/* Dropdown menu - hidden until hover */}
              <div className="absolute hidden group-hover:block top-12 right-0 z-10 bg-white text-black rounded shadow-md">
                <ul className="p-2 bg-white list-none m-0 rounded-md border text-sm">
                  <li onClick={logout}
                  
                    className="cursor-pointer py-1 px-2 pr-10"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          // if user has not Logged in then :
          <div className="flex items-center gap-5 sm:gap-5">
            <p
              onClick={() => navigate("/buy")}
              className="cursor-pointer hover:text-indigo-400 transition-colors duration-200"
            >
              Pricing
            </p>

            <button onClick={()=> setShowLogin(true)} className="bg-zinc-800 text-white px-7 py-3 sm:px-10 text-sm rounded-full hover:bg-blue-500 hover:scale-105 transition duration-300 ease-in-out">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
