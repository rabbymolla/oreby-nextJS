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
    <ul className="md:relative">
      {ManuData.map((data) => (
        <li
          key={data.id}
          onMouseEnter={() => handleMouseEnter(data.id)}
          onMouseLeave={handleMouseLeave}
          className="relative md:static font-DmSans font-bold text-base text-lucky_color hover:text-button_color ease-linear duration-100 uppercase px-3 py-2 hover:bg-white_color ]"
        >
          <Link href={data.link} className="flex items-center justify-between">
            {data.title}
            <div
              className={`text-base ${
                hoveredItem === data.id ? "text-button_color block" : "hidden"
              }`}
            >
              {data.subMenu && <FaChevronRight />}
            </div>
          </Link>

          {data.subMenu && data.subMenu.length > 0 && (
            <ul
              className={`absolute ${
                hoveredItem === data.id
                  ? "opacity-100 visible translate-x-0"
                  : "opacity-0 invisible -translate-x-2"
              }  bottom-0 left-14 md:top-0 md:left-full bg-cultured_color w-10/12 md:w-full md:h-full h-0 shadow-md transition-all duration-500 md:duration-200 ease-in-out z-30`}
            >
              <div className="bg-cultured_color shadow-lg md:shadow-none md:bg-transparent">
                {data.subMenu.slice(0, 6).map((subItem) => (
                  <li
                    key={subItem.id}
                    onMouseEnter={() => handleSubMouseEnter(subItem.id)}
                    onMouseLeave={handleSubMouseLeave}
                    className="font-DmSans font-bold text-base text-lucky_color hover:text-button_color ease-linear duration-100 uppercase px-3 py-2 hover:bg-white_color"
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
                            : "hidden"
                        }`}
                      >
                        {subItem.productMenu && <FaChevronRight />}
                      </div>
                    </Link>

                    {subItem.productMenu && subItem.productMenu.length > 0 && (
                      <ul
                        className={`absolute ${
                          hoveredSubItem === subItem.id
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                        } top-10 md:top-0 left-5 md:left-full bg-cultured_color w-11/12  md:w-full md:h-full h-0 shadow-md transition-all duration-200 ease-in-out z-30 `}
                      >
                        <div className="bg-cultured_color md:bg-transparent shadow-lg md:shadow-none">
                          {subItem.productMenu.slice(0, 6).map((prodData) => (
                            <li
                              key={prodData.id}
                              className="font-DmSans font-bold text-base text-lucky_color hover:text-button_color ease-linear duration-100 uppercase px-3 py-2 hover:bg-white_color"
                            >
                              <Link
                                href={prodData.link}
                                className="flex items-center justify-between"
                              >
                                {prodData.title}
                              </Link>
                            </li>
                          ))}
                        </div>
                      </ul>
                    )}
                  </li>
                ))}
              </div>
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
