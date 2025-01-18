import React from "react";

const Login = () => {
  return (
    <div>
      <div className="bg-cultured_color p-1 rounded-md">
        <input
          className="w-full p-2 bg-transparent"
          type="text"
          placeholder="Email"
        />
      </div>
      <div className="my-7 bg-cultured_color p-1 rounded-md">
        <input
          className="w-full p-2 bg-transparent"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="bg-button_color rounded-md">
        <button className=" py-2 w-full" type="submit">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
