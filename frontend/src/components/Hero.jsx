
import React from 'react';
import { motion } from "framer-motion";
import Hero1 from "../assets/Hero.png";
import { useNavigate } from "react-router-dom";
import Header from './Header';

const Hero = () => {

  const navigate = useNavigate();


  return (
    <div className="h-[100vh] w-full  px-4 py-8 md:px-8 lg:px-16 overflow-hidden">
      {/* Navigation */}
      
      
      <Header/>

      {/* Main Content */}
      <div className="mx-auto w-full ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.8 }}
            className="w-full md:w-[60%] pt-8 md:pt-10 text-center md:text-left"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-indigo-600">
              INTRODUCING A NEW WORLD OF INFO MEDIA
            </p>
            <h1 className="mb-8 text-[40px] md:text-[60px] font-semibold leading-[45px] md:leading-[65px] text-gray-900 tracking-wide">
              Survey the World, <br /> Connect with Minds!
            </h1>
            <button className="rounded-full bg-purple-500 px-8 py-3 font-medium text-white transition-all hover:bg-purple-600 cursor-pointer"
             onClick={() => navigate("/login")}>
              Get Started
            </button>
          </motion.div>

      

          {/* Right Column - UI Mockups */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.8 }}
            className="relative w-full md:w-[40%] mb-12 md:mb-0"
          >
            <img src={Hero1} alt="Hero" className="w-full max-w-xs md:max-w-md mx-auto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
