"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/assets/Logo.png";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import NavRightPart from "../../navbarRightPart/page";
import NavNoScroll from "@/helper/NavNoScroll";
import Login from "../navLogin/page";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [visible, setVisible] = useState(false);
  const [navShow, setNavShow] = useState(false);

  const handleToggle = () => {
    setShow((prev) => {
      const newShow = !prev;
      NavNoScroll(newShow); // Lock/Unlock scroll based on newShow
      return newShow;
    });
  };

  useEffect(() => {
    const widthScroll = () => {
      if (typeof window !== "undefined" && window.innerWidth < 991) {
        setShow(false);
      } else {
        setShow(true);
      }
    };

    widthScroll();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", widthScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", widthScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY >= 250) {
          setNavShow(true);
        } else {
          setNavShow(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <nav
        className={`${
          navShow ? "nav-scroll fixed top-0 left-0 w-full z-50 " : ""
        }py-8 bg-white_color shadow-md`}
      >
        <div className="container lg:flex lg:items-center lg:justify-between">
          {/* Logo Section */}
          <div className="w-full lg:w-[20%] flex lg:block justify-between items-center">
            <Link href="#">
              <Image src={Logo} alt="logo" />
            </Link>
            {/* Hamburger Icon */}
            <div
              onClick={handleToggle}
              className="block lg:hidden text-dark_color text-lg cursor-pointer transition-transform duration-300"
            >
              <div
                className={`transition-transform duration-500 ease-in-out text-2xl text-button_color ${
                  show ? "rotate-180" : "rotate-0"
                }`}
              >
                {show ? <ImCross /> : <FaBars />}
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div
            className={`${
              show
                ? "opacity-100 translate-x-0 visible "
                : "opacity-0 translate-x-full invisible "
            } fixed top-16 left-0 lg:relative lg:top-0 lg:left-0 w-full lg:w-[60%] h-screen lg:h-auto bg-white_color lg:bg-transparent mt-5 lg:mt-0 p-5 lg:p-0 overflow-y-auto lg:overflow-auto transition-all duration-500 ease-in-out shadow-md lg:shadow-none z-10`}
          >
            <ul className="lg:flex lg:items-center lg:justify-center lg:gap-x-10">
              <li className="font-DmSans font-bold text-lg lg:text-base text-lucky_color hover:text-dark_color ease-linear duration-100 uppercase">
                <Link href="" className="relative group">
                  Home
                  {/* Active state styling */}
                  <span className="absolute inset-0 bg-transparent group-active:bg-lucky_color" />
                </Link>
              </li>
              <li className="font-DmSans font-bold text-lg lg:text-base text-lucky_color hover:text-dark_color ease-linear duration-100 my-7 lg:my-0 uppercase">
                <Link href="#">Shop</Link>
              </li>
              <li className="font-DmSans font-bold text-lg lg:text-base text-lucky_color hover:text-dark_color ease-linear duration-100 uppercase">
                <Link href="#">About</Link>
              </li>
              <li className="font-DmSans font-bold text-lg lg:text-base text-lucky_color hover:text-dark_color ease-linear duration-100 my-7 lg:my-0 uppercase">
                <Link href="#">Journal</Link>
              </li>
              <li className="font-DmSans font-bold text-lg lg:text-base text-lucky_color hover:text-dark_color ease-linear duration-100 uppercase">
                <Link href="/jhhh">Contacts</Link>
              </li>
            </ul>

            {/* Card Section for Mobile */}
            <div className="lg:hidden mt-5 w-full">
              <NavRightPart setVisible={setVisible} visible={visible} />
            </div>
          </div>

          {/* Card Section for Desktop */}
          <div className="hidden lg:block w-[20%]">
            <NavRightPart setVisible={setVisible} visible={visible} />
          </div>
        </div>
      </nav>
      {visible && <Login setVisible={setVisible} visible={visible} />}
    </>
  );
};

export default Navbar;
