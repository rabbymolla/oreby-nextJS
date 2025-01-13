"use client";
import React, { useRef } from "react";
import NoScroll from "@/helper/NoScroll";
import OutSideClick from "@/helper/outSideClick";
import { IoCloseSharp } from "react-icons/io5";

const Login = ({ setVisible, visible }) => {
  const outSideClick = useRef(null);
  OutSideClick(outSideClick, () => {
    setVisible(false);
  });

  NoScroll(visible);

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-opcity_color z-10">
      <div
        ref={outSideClick}
        className="bg-white_color rounded-md shadow-xl w-full sm:w-[500px] relative"
      >
        {/* this is for tittle bar for modal */}
        <div className="border-b p-4 border-b-lucky_color border-solid">
          <div className="text-center ">
            <h1 className="font-DmSans font-bold text-xl text-dark_color">
              Login
            </h1>
          </div>
          <div
            onClick={() => setVisible(!visible)}
            className="absolute top-4 right-4 p-1 bg-silver_color text-dark_color rounded-full cursor-pointer"
          >
            <IoCloseSharp size={25} />
          </div>
        </div>
        {/* this is for tittle bar for modal */}
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
            deleniti quam eius veniam eveniet placeat tempora modi repellat sint
            non consequuntur animi quas excepturi pariatur reiciendis distinctio
            numquam suscipit voluptatibus aspernatur? Accusantium, ipsa?
            Nesciunt, incidunt laborum quas illo corporis nemo? Aliquid dicta
            quidem aut similique in harum repudiandae, quod minus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
