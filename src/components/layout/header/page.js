"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ManuData from "@/dataAPI/dropManuData";
import DropDown from "@/components/dropDown/page";
import { FaSearch } from "react-icons/fa";
import Cart from "@/components/cart";

const Header = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="bg-cultured_color py-5 shadow-md">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-y-5 md:gap-x-5">
        {/* Left Section */}
        <div className="w-full md:w-1/4 relative">
          {/* Trigger */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex items-center gap-x-1 cursor-pointer justify-between md:justify-start"
          >
            <p
              className={`font-DmSans font-normal text-base md:text-lg ${
                hover ? "text-button_color" : "text-dark_color"
              }`}
            >
              Shop by Category
            </p>
            <div
              className={`text-base md:text-lg text-dark_color transform transition-transform duration-500 ${
                hover ? "rotate-180" : "rotate-0"
              }`}
            >
              <FaChevronDown
                className={`${hover ? "text-button_color" : "text-dark_color"}`}
              />
            </div>
          </div>

          {/* Dropdown Menu */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`absolute top-10 md:top-12 left-0 bg-cultured_color w-full shadow-md transition-all duration-500 ease-in-out z-10 ${
              hover
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }`}
          >
            <DropDown ManuData={ManuData} />
          </div>
        </div>

        {/* Middle Section */}
        <div className="w-full md:w-[75%] flex items-center justify-between">
          <div className="flex items-center gap-x-2 bg-white_color py-2 px-4 shadow-sm w-10/12">
            <div className="text-base md:text-lg text-dark_color cursor-pointer">
              <FaSearch />
            </div>
            <div className="w-full">
              <input
                className="font-DmSans font-medium text-base md:text-lg px-2 py-2 outline-none w-full placeholder:text-sm md:placeholder:text-base placeholder:font-DmSans placeholder:font-normal"
                type="text"
                placeholder="Search Products"
              />
            </div>
          </div>
          {/* soping card */}
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Header;
