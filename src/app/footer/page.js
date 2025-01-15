import Link from "next/link";
import React from "react";
import logo from "../../../public/assets/Logo.png";
import Image from "next/image";

const Footer = () => {
  const manuData = [
    {
      item: "Home",
      link: "/home",
    },
    {
      item: "Shop",
      link: "/shop",
    },
    {
      item: "About",
      link: "/about",
    },
    {
      item: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="bg-cultured_color shadow-md py-24">
      <div className="container flex justify-between">
        <div className="w-1/4">
          <h1>MENU</h1>
          <ul>
            {manuData.map((data, i) => (
              <li key={i}>
                <Link key={i} href={data.link}>
                  {data.item || "Defult"}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/4">
          <h1>Shop</h1>
          <ul>
            {manuData.map((data, i) => (
              <li key={i}>
                <Link key={i} href={data.link}>
                  {data.item || "defult "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/4">
          <h1>HELP</h1>
          <ul>
            {manuData.map((data, i) => (
              <li key={i}>
                <Link key={i} href={data.link}>
                  {data.item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/4">
          <Image src={logo || "default"} alt="logo" />
          <p>(052) 611-5711 company@domain.com</p>
          <span>575 Crescent Ave. Quakertown, PA 18951</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
