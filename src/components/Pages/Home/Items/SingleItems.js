import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SingleItems = ({ item }) => {
  const { img, name, price, availableProducts, minimumOrder, description } =
    item;
  return (
    <div className=" md:w-[350px] lg:w-[400px] bg-white text-center pb-8 mx-auto">
      <img src={img} alt="" className="mx-auto" />
      <div className="text-primary py-4 flex gap-2 justify-center">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <p>{name}</p>
      <div className="flex flex-wrap gap-1 justify-center">
        <p className="text-lg font-bold p-2">
          ${price}
          <small>/unit</small>
        </p>
        <p className="text-lg font-bold p-2">
          {availableProducts}
          <small> in stock</small>
        </p>
        <p className="text-lg font-bold p-2">Minimum Order: {minimumOrder}</p>
      </div>
      <p className=" p-2 pb-5">M{description}</p>
      <button className="btn btn-primary rounded-none ">Order Now</button>
    </div>
  );
};

export default SingleItems;
