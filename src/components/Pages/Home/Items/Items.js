import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import productImage1 from "../../../images/shop/product-1.png";
import productImage2 from "../../../images/shop/product-2.png";
import productImage3 from "../../../images/shop/product-3.png";
import productImage4 from "../../../images/shop/product-4.png";

const Ttems = () => {
  return (
    <div className="bg-[#F8F8F8] py-20">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center text-primary font-bold uppercase">
          <hr className="ml-3 border-[1px]  border-primary w-8 mr-3" />
          <p className="text-center">Shop</p>
          <hr className="ml-3 border-[1px]  border-primary w-8 " />
        </div>
        <h3 className="text-[35px] text-center pb-3 lg:text-[60px] font-bold">
          Our Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
          <div className="w-[300px] bg-white text-center py-8 mx-auto">
            <img src={productImage1} alt="" className="mx-auto" />
            <div className="text-primary py-4 flex gap-2 justify-center">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>Logitech 56V Web Cam Pro</p>
            <p className="text-lg font-bold">$39.00</p>
          </div>
          <div className="w-[300px] bg-white text-center py-8 mx-auto">
            <img src={productImage2} alt="" className="mx-auto" />
            <div className="text-primary py-4 flex gap-2 justify-center">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>Logitech 56V Web Cam Pro</p>
            <p className="text-lg font-bold">$39.00</p>
          </div>
          <div className="w-[300px] bg-white text-center py-8 mx-auto">
            <img src={productImage3} alt="" className="mx-auto" />
            <div className="text-primary py-4 flex gap-2 justify-center">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>Logitech 56V Web Cam Pro</p>
            <p className="text-lg font-bold">$39.00</p>
          </div>
          <div className="w-[300px] bg-white text-center py-8 mx-auto">
            <img src={productImage4} alt="" className="mx-auto" />
            <div className="text-primary py-4 flex gap-2 justify-center">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>Logitech 56V Web Cam Pro</p>
            <p className="text-lg font-bold">$39.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ttems;
