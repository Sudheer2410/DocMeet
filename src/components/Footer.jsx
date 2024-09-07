import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md-w-2/3 text-gray-600 leading-6">
            Need medical assistance or have any queries? Our team of dedicated
            healthcare professionals is here to help. Stay connected for the
            latest health updates and tips. We are committed to providing you
            with quality care and convenient appointments, ensuring your health
            and well-being.
          </p>
        </div>
        {/* center section */}
        <div className="">
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600 ">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right section */}
        <div>
          <p className="text-xl fornt-medium mb-5  ">Get in touch</p>
          <ul className="flex flex-col gap-2 text-gray-600 ">
            <li>+92 342-1179168</li>
            <li>maazkhan29456@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* copyright text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright @2024 Maaz - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
