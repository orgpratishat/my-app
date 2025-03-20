
import React from 'react';
import { motion } from "framer-motion";
import Hero1 from "../assets/Hero.png";

import Login from '../components/Login'
import Header from '../components/Header';

const LoginPage = () => {
  return (
    <div className="h-[100vh] w-full  px-4 py-8 md:px-8 lg:px-16 overflow-hidden bg-gradient-to-br from-[#777EFF]/50 via-white/70 to-[#e0c4e6] ">
      {/* Navigation */}
      <Header/>
      

      {/* Main Content */}
      <div className="mx-auto w-full ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
          {/* Left Column - Text Content */}
       

        <motion.div  initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.8 }}>
        <Login/>
        </motion.div>

          {/* Right Column - UI Mockups */}
          <div 
           
            className="relative w-full md:w-[40%] mb-12 md:mb-0"
          >
            <img src={Hero1} alt="Hero" className="w-full max-w-xs md:max-w-md mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
