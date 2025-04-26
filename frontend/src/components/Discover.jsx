import React from "react";
import { motion } from "framer-motion";

const Discover = () => {
  // Animation Variants
  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-[100vh] w-full px-4 py-8 md:px-8 lg:px-24 overflow-hidden pt-[8vh]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[#8D8D8C] mb-2">FEATURES</h1>
        <h1 className="font-bold text-2xl tracking-wide">Discover Our App</h1>
      </div>

      {/* Redeem Coins */}
      <motion.div
        className="flex h-[38vh] mt-8 items-center justify-between"
        variants={leftVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="w-[50%]">
          <h1 className="font-bold mb-6">Redeem Coins</h1>
          <p className="text-[#8D8D8C]">
            Participate in surveys and earn Pratishat Coins in your wallet.
            Redeem these coins for exciting gifts on our brand partners'
            platforms.
          </p>
        </div>
        <motion.div className="bg-[#D9D9D9] h-[32vh] w-[28%] rounded-xl" />
      </motion.div>

      {/* Makes Your Voice Valuable */}
      <motion.div
        className="flex h-[38vh] mt-8 items-center gap-40"
        variants={rightVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="bg-[#D9D9D9] h-[32vh] w-[28%] rounded-xl" />
        <div className="w-[50%]">
          <h1 className="font-bold mb-6">Makes Your Voice Valuable</h1>
          <p className="text-[#8D8D8C]">
            Your opinions and insights matter! By participating in surveys and
            research studies, you contribute to meaningful discussions, shape
            products and services, and influence decision-making processes.
          </p>
        </div>
      </motion.div>

      {/* Making Survey and Research */}
      <motion.div
        className="flex h-[38vh] mt-8 items-center justify-between"
        variants={leftVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="w-[50%]">
          <h1 className="font-bold mb-6">Making Survey and Research</h1>
          <p className="text-[#8D8D8C]">
            We provide a seamless platform for conducting surveys and research,
            making data collection easy and efficient.
          </p>
        </div>
        <motion.div className="bg-[#D9D9D9] h-[32vh] w-[28%] rounded-xl" />
      </motion.div>

      {/* Connecting People */}
      <motion.div
        className="flex h-[38vh] mt-8 items-center gap-40"
        variants={rightVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="bg-[#D9D9D9] h-[32vh] w-[28%] rounded-xl" />
        <div className="w-[50%]">
          <h1 className="font-bold mb-6">Connecting People</h1>
          <p className="text-[#8D8D8C]">
            Our platform fosters engagement by bringing together individuals,
            businesses, and researchers.
          </p>
        </div>
      </motion.div>

      {/* Visual Graphics */}
      <motion.div
        className="flex h-[38vh] mt-8 items-center justify-between"
        variants={leftVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="w-[50%]">
          <h1 className="font-bold mb-6">Visual Graphics</h1>
          <p className="text-[#8D8D8C]">
            Understanding data is easier with compelling visuals. We offer
            dynamic charts and interactive reports to make information clearer.
          </p>
        </div>
        <motion.div className="bg-[#D9D9D9] h-[32vh] w-[28%] rounded-xl" />
      </motion.div>
    </div>
  );
};

export default Discover;
