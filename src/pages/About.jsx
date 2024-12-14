import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 dark:text-white">
        <p>
          About <span className="text-gray-700 font-medium dark:text-white">us</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt="About"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 dark:text-white">
          <p>
            Our medical website is designed to provide you with comprehensive
            care options and easy access to a wide range of health services.
            From scheduling appointments with top doctors to accessing vital
            medical information, our platform ensures that your health and
            well-being are always a priority. With user-friendly navigation and
            an intuitive interface, finding the right care has never been easier.
          </p>
          <p>
            Managing your medical appointments has never been more convenient.
            Our website allows you to effortlessly book, reschedule, or cancel
            appointments with leading healthcare professionals. With real-time
            availability and automated reminders, you can easily stay on top of
            your schedule and ensure you never miss a crucial visit. Experience
            a new level of efficiency and peace of mind with our streamlined
            appointment management system.
          </p>
          <b className="text-gray-800 dark:text-white">Our Vision</b>
          <p>
            We envision a future where healthcare is effortlessly accessible to
            all. Our goal is to empower individuals with seamless access to
            high-quality medical services, reliable information, and efficient
            appointment management, fostering a healthier and more informed
            community.
          </p>
        </div>
      </div>
      <div className="text-xl my-4 text-gray-600 dark:text-white">
        <p>
          WHY <span className="text-gray-700 font-semibold dark:text-white">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer dark:text-white">
          <b>Efficiency:</b>
          <p>
            Streamlined scheduling that fits into your busy lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer dark:text-white">
          <b>Convenience:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer dark:text-white">
          <b>Personalization:</b>
          <p>
            Tailored recommendations and reminders that help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
