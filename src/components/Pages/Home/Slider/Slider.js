import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import sliderImage from "../../../../images/banner-1.png";
import sliderImage2 from "../../../../images/banner-2.png";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={sliderImage} className="w-full h-48 md:h-full" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn text-[30px] border-none">
              <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon>
            </a>
            <div className="text-center">
              <p className="font-bold text-sm md:text-normal text-white uppercase">
                Best bike parts manufacturer in us
              </p>
              <h3 className="font-bold text-white text-[25px] md:text-[50px] lg:text-[80px]">
                We Provide Best
                <br /> Bike Parts
              </h3>
              <div className="flex justify-center items-center gap-5">
                <button className="rounded-none text-[14px]  text-secondary hover:border-white  border-white bg-white py-2 px-1 md:p-3 cursor-pointer font-bold uppercase">
                  Our Service
                </button>
                <button className="bg-primary rounded-none text-[14px] cursor-pointer text-white py-2 px-1 md:p-3 font-bold uppercase">
                  Get In Touch
                </button>
              </div>
            </div>
            <a href="#slide2" className="btn text-[30px] border-none">
              <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={sliderImage2} className="w-full h-48 md:h-full" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn text-[30px] border-none">
              <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon>
            </a>
            <div className="text-center">
              <p className="font-bold text-sm md:text-normal text-white uppercase">
                Best bike parts manufacturer in us
              </p>
              <h3 className="font-bold text-white text-[25px] md:text-[50px] lg:text-[80px]">
                We Provide Best
                <br /> Bike Parts
              </h3>
              <div className="flex justify-center items-center gap-5">
                <button className="rounded-none text-[14px]  text-secondary hover:border-white  border-white bg-white py-2 px-1 md:p-3 cursor-pointer font-bold uppercase">
                  Our Service
                </button>
                <button className="bg-primary rounded-none text-[14px] cursor-pointer text-white py-2 px-1 md:p-3 font-bold uppercase">
                  Get In Touch
                </button>
              </div>
            </div>
            <a href="#slide1" className="btn text-[30px] border-none">
              <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
