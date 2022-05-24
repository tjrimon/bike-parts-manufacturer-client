import React from "react";
import About from "./About/About";
import BusinessSumarry from "./BusinessSummary/BusinessSumarry";
import Items from "./Items/Items";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <Items></Items>
      <BusinessSumarry></BusinessSumarry>
    </div>
  );
};

export default Home;
