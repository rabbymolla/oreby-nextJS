"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ManuData from "@/dataAPI/dropManuData";
import DropDown from "@/components/dropDown/page";

const Header = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="bg-cultured_color py-5">
      <div className="container flex items-center justify-between gap-x-5">
        <div className="w-1/4 relative">
          {/* Trigger */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex items-center gap-x-1 cursor-pointer "
          >
            <p
              className={`font-DmSans font-normal text-lg  ${
                hover ? "text-button_color" : "text-dark_color"
              }`}
            >
              Shop by Category
            </p>
            <div
              className={`text-lg text-dark_color transform transition-transform duration-500 ${
                hover ? "rotate-180" : "rotate-0"
              }`}
            >
              <FaChevronDown
                className={`text-lg ${
                  hover ? "text-button_color" : " text-dark_color"
                }`}
              />
            </div>
          </div>

          {/* Dropdown Menu */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`absolute top-12 left-0 bg-cultured_color w-full shadow-md transition-all duration-500 ease-in-out z-10 ${
              hover
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }`}
          >
            <DropDown ManuData={ManuData} />
          </div>
        </div>
        <div className="w-1/2">2</div>
        <div className="w-1/4">3</div>
      </div>
    </div>
  );
};

export default Header;
