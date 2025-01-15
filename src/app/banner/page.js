"use client";
import React, { useState } from "react";
import SliderImg from "@/dataAPI/bannerSliderData";
import Image from "next/image";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import defaultSlider from "../../../public/assets/slider1.png";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 md:right-2 -translate-y-1/2 bg-silver_color rounded-full p-2 cursor-pointer z-10 text-white_color opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      onClick={onClick}
    >
      <FaAngleRight size={20} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-0 md:left-2 -translate-y-1/2 bg-silver_color rounded-full z-10 p-2 cursor-pointer text-white_color opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      onClick={onClick}
    >
      <FaAngleLeft size={20} />
    </div>
  );
}

const Banner = () => {
  const [active, setActive] = useState("");
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "12%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`font-DmSans font-bold text-xs text-button_color w-8 py-2 bg-opcity_color  ${
          i == active
            ? " border-r-2 border-solid border-button_color pl-2 absolute top-1/2 left-0 -translate-y-1/2"
            : "border-r-2 border-solid border-white_color invisible"
        }`}
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="group relative">
      <Slider {...settings}>
        {SliderImg.map((data) => (
          <div className="relative w-full" key={data.id}>
            <Link href={data.link}>
              <Image
                src={data.img || defaultSlider}
                alt={data.alt || "Banner Image"} // Add default alt text
                width={1920}
                height={1080}
                // placeholder={data.blurDataURL ? "blur" : undefined}
                // blurDataURL={data.blurDataURL || ""}
                // priority={data === 0} // Only prioritize the first image
                // loading={data === 0 ? "eager" : "lazy"} // Lazy load all images except the first
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
