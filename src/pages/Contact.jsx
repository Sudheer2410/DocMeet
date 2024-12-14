import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl text-gray-500 dark:text-white pt-10">
        <p>
          CONTACT <span className="font-semibold text-gray-700 dark:text-white">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600 dark:text-white">OUR OFFICE</p>
          <p className="text-gray-500 dark:text-white">
            23200 khyberpukhtunkhwa
            <br /> Jan abad Mardan, pakistan{" "}
          </p>
          <p className="text-gray-500 dark:text-white">
            +92 342-1179168 <br />
            maazkhan29456@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600 dark:text-white">
            Career at Prescripto
          </p>
          <p className="text-gray-500 dark:text-white">
            Learn more about our team and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

