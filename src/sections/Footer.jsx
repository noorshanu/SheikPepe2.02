import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full  relative ">
     
      <div className="container-wrapper mt-8 ">
      <div className=" flex justify-center">
      <img
                src="images/hero2.png"
                alt=""
                className="h-[300px]  mx-auto "
              />
              <img
                src="images/hero3.png"
                alt=""
                className="h-[300px]  mx-auto "
              />
      </div>
        <div className="flex justify-center flex-col sm:flex-row">
          <div className="mt-8 flex items-center justify-center gap-2">
          <p className="font-groot-one text-xl text-[#bcbcbc] ">
                Copyright 2024 SheikPepee. All Rights Reserved.
              </p>

          </div>

         

    
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
