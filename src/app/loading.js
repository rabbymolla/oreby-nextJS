import React from "react";

const LoadingPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-white_color gap-x-3">
      <div className="w-8 h-8 border-4 border-t-4 border-button_color rounded-full animate-spin border-t-red_color"></div>
      <p className="font-DmSans font-bold mt-4 text-lg text-dark_color">
        Loading...
      </p>
    </div>
  );
};

export default LoadingPage;
