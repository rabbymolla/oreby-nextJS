"use client";
import React, { Suspense, useRef, useState } from "react";
import NoScroll from "@/helper/NoScroll";
import { IoCloseSharp } from "react-icons/io5";
import OutSideClick from "@/helper/OutSideClick";
import Login from "@/app/login/page";
import LoadingPage from "@/app/loading";

const LoginModal = ({ setVisible, visible }) => {
  const outSideClick = useRef(null);
  const [hadding, setHadding] = useState(true);
  OutSideClick(outSideClick, () => {
    setVisible(false);
  });

  NoScroll(visible);

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-opcity_color z-40">
      <div
        ref={outSideClick}
        className="bg-white_color border border-silver_color  rounded-md shadow-xl w-full sm:w-[500px] relative"
      >
        {/* this is for tittle bar for modal */}
        <div className="p-4 ">
          <div className="text-center ">
            <h1 className="font-DmSans font-bold text-xl text-dark_color">
              {hadding ? "Login" : "Registation"}
            </h1>
          </div>
          <div
            onClick={() => setVisible(false)}
            className="absolute top-4 right-4 p-1 bg-silver_color text-dark_color rounded-full cursor-pointer"
          >
            <IoCloseSharp size={25} />
          </div>
        </div>
        {/* this is for tittle bar for modal */}
        <div className="p-4">
          <Suspense fallback={<LoadingPage />}>
            <Login />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
