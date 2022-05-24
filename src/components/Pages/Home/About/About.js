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
          Get Best Bike <br />
          Parts in cheap rate
        </h3>
        <p>
          BikeFina was founded in 2007 by a core team of riders whose sole goal
          was to bring the best possible shopping experience to any enthusiast
          who visits us, in-store or online. Over the next decade, we
          continuously smashed records, raked in awards, and, most importantly,
          helped keep hundreds of thousands of new and experienced riders safe
          and sound. Now, as part of the best Family of Brands, BikeFina
          continues its mission to serve the rider, fuel the industry, and
          inspire the community.
        </p>
      </div>
    </div>
  );
};

export default About;
