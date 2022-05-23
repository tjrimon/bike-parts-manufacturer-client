import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFileShield,
  faBuildingColumns,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import aboutImage from "../../../../images/about.png";

const About = () => {
  return (
    <div className="md:flex items-center container mx-auto py-24">
      {/* about us image section  */}
      <div className="md:w-1/2 p-5">
        <img src={aboutImage} alt="" />
      </div>
      {/* about us content section  */}
      <div className="md:w-1/2 p-5 text-center md:text-left">
        <div className="flex justify-center md:justify-start  items-center text-primary font-bold uppercase">
          <p>About Us</p>
          <hr className="ml-3 border-[1px] border-primary w-8 " />
        </div>
        <h3 className="text-[25px]  md:text-[35px] lg:text-[60px] font-bold">
          Get Best CCTV <br />
          Solutions For House
        </h3>
        <p>
          Bandwidth has historically been very unequally distributed
          worldwide,with increasing concentration in the digital age.
        </p>
      </div>
    </div>
  );
};

export default About;
