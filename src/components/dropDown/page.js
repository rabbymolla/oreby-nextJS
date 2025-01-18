import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const DropDown = ({ ManuData }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Tailwind's `lg` breakpoint is 1024px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = (id) => {
    setHoveredItem((prev) => (prev === id ? null : id));
  };

  const handleSubToggle = (id) => {
    setHoveredSubItem((prev) => (prev === id ? null : id));
  };

  const handleMouseEnter = (id) => {
    if (!isSmallScreen) setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    if (!isSmallScreen) setHoveredItem(null);
  };

  const handleSubMouseEnter = (id) => {
    if (!isSmallScreen) setHoveredSubItem(id);
  };

  const handleSubMouseLeave = () => {
    if (!isSmallScreen) setHoveredSubItem(null);
  };

  return (
    <ul className="md:relative">
      {ManuData.map((data) => (
        <li
          key={data.id}
          onClick={() => isSmallScreen && handleToggle(data.id)}
          onMouseEnter={() => handleMouseEnter(data.id)}
          onMouseLeave={handleMouseLeave}
          className="relative md:static font-DmSans font-bold text-base text-lucky_color hover:text-button_color ease-linear duration-100 uppercase px-3 py-2 hover:bg-white_color"
        >
          <Link
            href={data.link || "#"}
            className="flex items-center justify-between"
          >
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
              }  bottom-0 right-0 md:top-0 md:left-full bg-cultured_color w-10/12 md:w-full md:h-full h-0 shadow-md transition-all duration-500 md:duration-200 ease-in-out z-30`}
            >
              <div className="bg-cultured_color shadow-lg md:shadow-none md:bg-transparent">
                {data.subMenu.slice(0, 6).map((subItem) => (
                  <li
                    key={subItem.id}
                    onClick={() => isSmallScreen && handleSubToggle(subItem.id)}
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
                        } -bottom-10 md:top-0 right-7 md:left-full bg-cultured_color w-auto md:w-full md:h-full h-0 shadow-md transition-all duration-200 ease-in-out z-30 `}
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
