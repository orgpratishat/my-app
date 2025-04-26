import React from "react";
import John from "../assets/john_profile_picure.jpeg";
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <>
      <div className="min-h-screen  p-4 md:p-8 lg:p-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto p-2">
          <h1 className="text-2xl  md:text-5xl lg:text-3xl font-semibold text-gray-700 text-center mb-12 md:mb-16 lg:mb-10">
            People just like you
            <br />
            are already using Pratishat
          </h1>

          <div className="flex gap-3 ml-[8vw]">
            <div
           
            className=" h-[80vh] w-[24vw] flex flex-col gap-2 ">
              <motion.div className="w-full bg-[#e9ebfd] h-[65%] rounded-md p-4 flex flex-col justify-between  hover:scale-95 transition-transform"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={{
                 hidden: { opacity: 0, y: 50 },
                 visible: {
                   opacity: 1,
                   y: 0,
                   transition: { staggerChildren: 0.3, duration: 0.8, ease: "easeOut" }
                 }
               }}>
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti accusantium in voluptatum!
                </h1>

                <div className="flex gap-2">
                  <img className="h-10 w-10 rounded-full" src={John} alt="" />

                  <div>
                    <h1 className="text-xs">John</h1>
                    <h1 className="text-sm font-semibold">Canada</h1>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { staggerChildren: 0.3, duration: 0.8, ease: "easeOut" }
                  }
                }}
              className="w-full h-[35%] bg-[#ededf6] rounded-md p-4 flex flex-col justify-between  hover:scale-95 transition-transform">
                <h1 className="text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti accusantium in voluptatum!
                </h1>

                <div className="flex gap-2 ">
                  <img className="h-10 w-10 rounded-full" src={John} alt="" />

                  <div>
                    <h1 className="text-xs">John</h1>
                    <h1 className="text-sm font-semibold">Canada</h1>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className=" h-[80vh]  w-[24vw] flex flex-col gap-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.3, duration: 0.8, ease: "easeOut" }
                  }
                }}
              className="w-full h-[35%] bg-[#f5f5f6] rounded-md p-4 flex flex-col justify-between  hover:scale-95 transition-transform">
                <h1 className="text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti accusantium in voluptatum!
                </h1>

                <div className="flex gap-2 ">
                  <img className="h-10 w-10 rounded-full" src={John} alt="" />

                  <div>
                    <h1 className="text-xs">John</h1>
                    <h1 className="text-sm font-semibold">Canada</h1>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.3, duration: 0.8, ease: "easeOut" }
                  }
                }}
              className="w-full bg-[#f5f5f6] h-[65%] rounded-md p-4 flex flex-col justify-between hover:scale-95 transition-transform">
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti accusantium in voluptatum!
                </h1>

                <div className="flex gap-2">
                  <img className="h-10 w-10 rounded-full" src={John} alt="" />

                  <div>
                    <h1 className="text-xs">John</h1>
                    <h1 className="text-sm font-semibold">Canada</h1>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className=" h-[80vh]  w-[24vw] flex flex-col gap-2">
            
               <motion.div
                 initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={{
                 hidden: { opacity: 0, y: 50 },
                 visible: {
                   opacity: 1,
                   y: 0,
                   transition: { staggerChildren: 0.3, duration: 0.8, ease: "easeOut" }
                 }
               }}
               className="w-full h-[35%] bg-[#f5f5f6] rounded-md p-4 flex flex-col justify-between  hover:scale-95 transition-transform">
                <h1 className="text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti accusantium in voluptatum!
                </h1>

                <div className="flex gap-2 ">
                  <img className="h-10 w-10 rounded-full" src={John} alt="" />

                  <div>
                    <h1 className="text-xs">John</h1>
                    <h1 className="text-sm font-semibold">Canada</h1>
                  </div>
                </div>
              </motion.div>


              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { staggerChildren: 0.3, duration: 0.8, ease: "easeOut" }
                  }
                }}
              className="w-full bg-[#f5f5f6] h-[65%] rounded-md p-4 flex flex-col justify-between  hover:scale-95 transition-transform">
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti accusantium in voluptatum!
                </h1>

                <div className="flex gap-2">
                  <img className="h-10 w-10 rounded-full" src={John} alt="" />

                  <div>
                    <h1 className="text-xs">John</h1>
                    <h1 className="text-sm font-semibold">Canada</h1>
                  </div>
                </div>
              </motion.div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;




