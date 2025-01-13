import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
  return (
    <>
      <div className="relative cursor-pointer">
        <div className="text-dark_color ">
          <FaCartShopping size={35} />
        </div>
        <div className="absolute top-0 right-0 bg-red_color rounded-full flex justify-center items-center w-2 h-2 p-2">
          <span className="font-DmSans font-bold text-white_color text-xs ">
            1
          </span>
        </div>
      </div>
    </>
  );
};

export default Cart;
