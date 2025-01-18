import React from "react";

const NavRightPart = ({ setVisible, setShow }) => {
  const handleShow = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 991) {
      setShow(false);
      setVisible(true);
    } else {
      setVisible(true);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center lg:justify-end gap-x-10 pt-3 pb-24 lg:pt-0 lg:pb-0">
        <button
          onClick={handleShow}
          className="font-DmSans font-bold text-lg lg:text-base text-lucky_color hover:text-dark_color ease-linear duration-100 uppercase"
        >
          Login
        </button>
        <button
          onClick={handleShow}
          className="font-DmSans font-bold text-lg lg:text-base text-lucky_color hover:text-dark_color ease-linear duration-100 uppercase"
        >
          Sing In
        </button>
      </div>
    </>
  );
};

export default NavRightPart;
