import {
  faAward,
  faLocation,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BusinessSumarry = () => {
  return (
    <div>
      <div className="bg-white py-28 ">
        <div className="flex text-center justify-center items-center text-primary font-bold uppercase">
          <hr className="ml-3 border-[1px]  border-primary w-8 mr-3" />
          <p className="text-center">Business Summary</p>
          <hr className="ml-3 border-[1px]  border-primary w-8 " />
        </div>
        <h1 className="text-center text-3xl pt-3 md:text-4xl uppercase font-semibold pb-14">
          We are known for trend-selling styles and
          <br /> customization.
        </h1>
        <div className="container mx-auto grid md:grid-cols-2  lg:grid-cols-4 justify-center items-center">
          <div className="rounded-lg w-[250px] lg:w-[200px] xl:w-[250px] h-60 pt-16 text-primary text-center bg-white mr-10 shadow-lg">
            <i className="text-4xl fa-solid fa-motorcycle"></i>
            <h3 className="text-2xl font-semibold pb-1 pt-2">120+</h3>
            <p className="font-semibold">Parts in stock</p>
          </div>
          <div className="rounded-lg mt-10 w-[250px] lg:w-[200px] xl:w-[250px] h-60 pt-16 text-primary text-center bg-white mr-10 shadow-lg">
            <FontAwesomeIcon
              className="text-4xl"
              icon={faUserTie}
            ></FontAwesomeIcon>
            <h3 className="text-2xl font-semibold pb-1 pt-2">20k</h3>
            <p className="font-semibold">Happy Customers</p>
          </div>
          <div className="rounded-lg mt-10 md:mt-0 w-[250px] lg:w-[200px] xl:w-[250px] h-60 pt-16 text-primary text-center bg-white mr-10 shadow-lg">
            <FontAwesomeIcon
              className="text-4xl"
              icon={faLocation}
            ></FontAwesomeIcon>
            <h3 className="text-2xl font-semibold pb-1 pt-2">15</h3>
            <p className="font-semibold">Showrooms</p>
          </div>
          <div className="rounded-lg mt-10 w-[250px] lg:w-[200px] xl:w-[250px] h-60 pt-16 text-primary text-center bg-white mr-10 shadow-lg">
            <FontAwesomeIcon
              className="text-4xl"
              icon={faAward}
            ></FontAwesomeIcon>
            <h3 className="text-2xl font-semibold pb-1 pt-2">30</h3>
            <p className="font-semibold">Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSumarry;
