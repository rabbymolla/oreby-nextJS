import React, { useState } from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const DropDown = ({ ManuData }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleSubMouseEnter = (id) => {
    setHoveredSubItem(id);
  };

  const handleSubMouseLeave = () => {
    setHoveredSubItem(null);
  };

  return (
    <ul className="relative">
      {ManuData.map((data) => (
        <li
          key={data.id}
          onMouseEnter={() => handleMouseEnter(data.id)}
          onMouseLeave={handleMouseLeave}
          className=" font-DmSans font-bold text-lg lg:text-base text-lucky_color hover:text-button_color ease-linear duration-100 uppercase p-4 hover:bg-white_color"
        >
          <Link href={data.link} className="flex items-center justify-between">
            {data.title}
            <div
              className={`text-base ${
                hoveredItem === data.id
                  ? "text-button_color block"
                  : "text-lucky_color hidden"
              }`}
            >
              {data.subMenu && <FaChevronRight />}
            </div>
          </Link>

          {data.subMenu && data.subMenu.length > 0 && (
            <ul
              className={`absolute top-0 left-full bg-cultured_color w-full shadow-md transition-all duration-500 ease-in-out z-10 ${
                hoveredItem === data.id
                  ? "opacity-100 visible translate-x-0"
                  : "opacity-0 invisible -translate-x-2"
              }`}
            >
              {data.subMenu.slice(0, 6).map((subItem) => (
                <li
                  key={subItem.id}
                  onMouseEnter={() => handleSubMouseEnter(subItem.id)}
                  onMouseLeave={handleSubMouseLeave}
                  className="relative font-DmSans font-bold text-lg lg:text-base text-lucky_color hover:text-button_color ease-linear duration-100 uppercase p-4 hover:bg-white_color"
                >
                  <Link
                    href={subItem.link}
                    className="flex items-center justify-between"
                  >
                    {subItem.title}
                    <div
                      className={`text-base ${
                        hoveredSubItem === subItem.id
                          ? "text-button_color block"
                          : "text-lucky_color hidden"
                      }`}
                    >
                      {subItem.productMenu && <FaChevronRight />}
                    </div>
                  </Link>

                  {/* {console.log(subItem.productMenu)} */}

                  {subItem.productMenu && subItem.productMenu.length > 0 && (
                    <ul
                      className={`absolute top-0 left-full bg-cultured_color w-full shadow-md transition-opacity duration-700 ease-in-out z-10 ${
                        hoveredSubItem === subItem.id
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      {subItem.productMenu.slice(0, 6).map((prodData) => (
                        <li
                          key={prodData.id}
                          className="relative font-DmSans font-bold text-lg lg:text-base text-lucky_color hover:text-button_color ease-linear duration-100 uppercase p-4 hover:bg-white_color"
                        >
                          <Link
                            href={prodData.link}
                            className="flex items-center justify-between"
                          >
                            {prodData.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
