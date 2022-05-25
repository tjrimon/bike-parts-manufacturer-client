import React from "react";
import faqImage from "../../../../images/faq.jpg";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="md:flex items-center justify-between container mx-auto pt-20 pb-16">
        {/* faq image section  */}
        <div className="md:w-1/3 p-5">
          <img src={faqImage} alt="" />
        </div>
        {/* faq content section  */}
        <div className="md:w-2/3 p-5">
          <div className="flex items-center justify-center md:justify-start  text-primary font-bold uppercase">
            <p>FAQ</p>
            <hr className="ml-3 border-[1px] border-primary w-8 " />
          </div>
          <h3 className="text-[25px] md:text-[35px] lg:text-[60px] font-bold text-center md:text-left">
            Have To Protect <br />
            All the parts.
          </h3>
          <div className="flex flex-wrap sm:mx-auto sm:mb-2 ">
            <div className="w-full lg:w-2/3 px-4 py-2">
              <details className="mb-4 shadow-lg">
                <summary className="font-semibold  bg-[#FAFAFA] p-4">
                  Do you support cash on delivery?
                </summary>

                <span className="bg-white pl-2">
                  Well, it depends mail us for further information.
                </span>
              </details>
              <details className="mb-4 shadow-lg">
                <summary className="font-semibold  bg-[#FAFAFA] p-4">
                  Can you ship any country in the world?
                </summary>

                <span className="bg-white pl-2">
                  Yes, We ship all over the world.
                </span>
              </details>
              <details className="mb-4 shadow-lg">
                <summary className="font-semibold  bg-[#FAFAFA] p-4">
                  How much is the shipment cost?
                </summary>

                <span className="bg-white pl-2">
                  Well, It depends in the distance, tax and product wet. Mail us
                  with your country details.
                </span>
              </details>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-200 container mx-auto " />
    </div>
  );
};

export default Faq;
