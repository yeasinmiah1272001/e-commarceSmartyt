"use client";

import { img1, img2, img3 } from "@/images";
import Image from "next/image";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
  onClick?: () => void;
}

const PrevArrow = ({ onClick }: ArrowProps) => (
  <div
    className="absolute top-1/2 left-2 transform -translate-y-1/2 text-lg sm:text-xl md:text-2xl cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

const NextArrow = ({ onClick }: ArrowProps) => (
  <div
    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-lg sm:text-xl md:text-2xl cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {[img1, img2, img3].map((image, index) => (
          <div key={index} className="relative">
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[550px]">
              <Image
                src={image}
                alt={`banner ${index + 1}`}
                fill
                className="object-cover shadow-lg"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-start p-3 sm:p-6 lg:p-8 text-white bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="sm:ml-4 md:ml-8 lg:ml-10">
                <h1 className="text-base sm:text-xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-3">
                  Outware Picks
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium mb-2 sm:mb-4">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipisicing
                  elit. Cum voluptate consequuntur, odio facilis.
                </p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <button className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                    Button 1
                  </button>
                  <button className="px-3 py-2 sm:px-4 sm:py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
                    Button 2
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
