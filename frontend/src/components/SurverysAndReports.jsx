
import React from "react";
import { motion } from "framer-motion";
import Finance from "../assets/finance.png";
import Power from "../assets/power.png";
import Health from "../assets/health.png";
import { Heart, MessageSquare, Share2 } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const SurverysAndReports = () => {
  return (
    <div className="min-h-[100vh] w-full px-4 py-8 md:px-8 lg:px-24 overflow-hidden pt-[8vh] flex flex-col items-center">
      <h1 className="text-2xl font-bold tracking-wide">Surveys And Reports</h1>

      <div className="flex gap-10 mt-[15vh]">
        {/* Finance Card */}
        <motion.div
          className="w-[325px]"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            className="h-[200px] bg-gray-100 w-full rounded-xl"
            src={Finance}
            alt="Survey 1"
          />
          <p className="mt-4 text-sm">Finance</p>
          <h1 className="font-semibold text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>

          <div className="flex items-center gap-8 mt-2">
            <div className="flex items-center gap-2">
              <Heart size={18} fill="red" color="red" />
              <p className="text-sm">25K supported</p>
            </div>

            <div className="flex items-center gap-2">
              <MessageSquare size={18} />
              <p className="text-sm">4.5K </p>
            </div>

            <div className="flex items-center gap-2">
              <Share2 size={18} />
              <p className="text-sm">1.5K </p>
            </div>
          </div>
        </motion.div>

        {/* Power Card */}
        <motion.div
          className="w-[325px]"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            className="h-[200px] bg-gray-100 w-full rounded-xl"
            src={Power}
            alt="Survey 2"
          />
          <p className="mt-4 text-sm">Power</p>
          <h1 className="font-semibold text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>

          <div className="flex items-center gap-8 mt-2">
            <div className="flex items-center gap-2">
              <Heart size={18} fill="red" color="red" />
              <p className="text-sm">25K supported</p>
            </div>

            <div className="flex items-center gap-2">
              <MessageSquare size={18} />
              <p className="text-sm">4.5K </p>
            </div>

            <div className="flex items-center gap-2">
              <Share2 size={18} />
              <p className="text-sm">1.5K </p>
            </div>
          </div>
        </motion.div>

        {/* Health Card */}
        <motion.div
          className="w-[325px]"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            className="h-[200px] bg-gray-100 w-full rounded-xl"
            src={Health}
            alt="Survey 3"
          />
          <p className="mt-4 text-sm">Health</p>
          <h1 className="font-semibold text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>

          <div className="flex items-center gap-8 mt-2">
            <div className="flex items-center gap-2">
              <Heart size={18} fill="red" color="red" />
              <p className="text-sm">25K supported</p>
            </div>

            <div className="flex items-center gap-2">
              <MessageSquare size={18} />
              <p className="text-sm">4.5K </p>
            </div>

            <div className="flex items-center gap-2">
              <Share2 size={18} />
              <p className="text-sm">1.5K </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* View All Button */}
      <motion.button
        className="rounded-sm text-gray-900 hover:text-purple-900 px-8 py-3 font-medium underline cursor-pointer mt-[15vh] hover:scale-105 transition-transform"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        View All
      </motion.button>
    </div>
  );
};

export default SurverysAndReports;
