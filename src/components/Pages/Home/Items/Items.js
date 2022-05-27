import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { React, useEffect, useState } from "react";
import SingleItems from "./SingleItems";
import axios from "axios";

const Items = (props) => {
  const [items, setItems] = useState([]);
  const loadData = async () => {
    try {
      const data = await axios
        .get("http://localhost:5000/items")
        .then((data) => setItems(data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="bg-[#F8F8F8] py-20">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center text-primary font-bold uppercase">
          <hr className="ml-3 border-[1px]  border-primary w-8 mr-3" />
          <p className="text-center">Items</p>
          <hr className="ml-3 border-[1px]  border-primary w-8 " />
        </div>
        <h3 className="text-[35px] text-center pb-3 lg:text-[60px] font-bold">
          Our Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {items.map((item) => (
            <SingleItems key={item._id} item={item}></SingleItems>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
