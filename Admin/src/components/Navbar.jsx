import React from "react";
import { assets } from "../assets/admin_assets/assets.js";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-28" src={assets.logo} alt="" />
      <button
        onClick={() => setToken("")}
        className="bg-black text-white px-5 py-2 sm:px-7 sm:py2
       rounded-sm text-sm sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
