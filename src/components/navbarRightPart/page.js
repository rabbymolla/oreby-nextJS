import React from "react";

const NavRightPart = ({ setVisible, visible }) => {
  return (
    <>
      <div className="flex items-center justify-center lg:justify-end gap-x-10 pt-3 pb-24 lg:pt-0 lg:pb-0">
        <button
          onClick={() => setVisible(!visible)}
          className="font-DmSans font-bold text-lg lg:text-base text-lucky_color hover:text-dark_color ease-linear duration-100 uppercase"
        >
          Login
        </button>
        <button
          onClick={() => setVisible(!visible)}
          className="font-DmSans font-bold text-lg lg:text-base text-lucky_color hover:text-dark_color ease-linear duration-100 uppercase"
        >
          Sing In
        </button>
      </div>
    </>
  );
};

export default NavRightPart;
