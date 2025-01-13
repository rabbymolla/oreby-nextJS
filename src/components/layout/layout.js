import React from "react";
import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";
import Header from "@/app/header/page";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
