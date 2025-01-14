import React from "react";
import Footer from "@/components/layout/footer/page";
import Navbar from "@/components/layout/navbar/page";
import Header from "@/components/layout/header/page";

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
