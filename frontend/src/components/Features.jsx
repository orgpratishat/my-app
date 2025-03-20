import React from 'react';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.6, // Trigger when 70% of the element is in view
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className='h-[100vh] w-full px-4 py-8 md:px-8 lg:px-24 overflow-hidden'>
        <div className='flex h-full gap-2'>
          <motion.div
            ref={ref}
            className="rounded-md h-full w-[35vw] bg-white p-8 shadow-lg transition-shadow hover:shadow-xl md:h-full"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} // Transparent background
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-blue-500 p-2">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Non-biased free democratic voice</h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-black"></div>
                  <h3 className="font-semibold text-gray-800 text-[16px]">Open Participation</h3>
                </div>
                <p className="pl-5 text-gray-500 text-[14px]">
                  Anyone can share their opinions without restrictions ensuring inclusivity.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-black"></div>
                  <h3 className="font-semibold text-gray-800 text-[16px]">Community Moderation</h3>
                </div>
                <p className="pl-5 text-gray-500 text-[14px]">
                  Users can report biased or misleading content to maintain fairness on the platform
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-black"></div>
                  <h3 className="font-semibold text-gray-800 text-[16px]">Diverse Representation</h3>
                </div>
                <p className="pl-5 text-gray-500 text-[14px]">
                  Encourages a wide range of perspectives, preventing dominance by any single group.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-black"></div>
                  <h3 className="font-semibold text-gray-800 text-[16px]">Community Moderation</h3>
                </div>
                <p className="pl-5 text-gray-500 text-[14px]">
                  Users can report biased or misleading content to maintain fairness on the platform
                </p>
              </div>
            </div>

            <button className="mt-6 rounded-sm bg-purple-500 ml-13 px-8 py-3 font-medium text-white transition-all hover:bg-purple-600 cursor-pointer">
              Share your views
            </button>
          </motion.div>

          <div>
            <motion.div
              ref={ref}
              className="rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} // Transparent background
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-blue-500 p-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-lg font-semibold text-gray-800">Community of high thinkers from around the globe</h2>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-black"></div>
                  <h3 className="font-semibold text-gray-800 text-[16px]">Knowledge Sharing</h3>
                </div>
                <div className='px-6'>
                  <p className="text-gray-500 text-[14px] mb-4">
                    Users can share research, insights, and thought-provoking content that challenges existing ideas and
                    fosters learning.
                  </p>

                  <p className="text-gray-500 text-[14px] mb-4">
                    Encourages members to post articles, case studies, and discussions that inspire intellectual growth
                  </p>

                
                </div>
              </div>

              <button className="mt-4 rounded-sm bg-purple-500 px-8 py-3 font-medium text-white transition-all hover:bg-purple-600 ml-[77vh] cursor-pointer">
                Join Community
              </button>
            </motion.div>

            <div className='flex gap-2 mt-2'>
              <motion.div
                ref={ref}
                className='rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-xl w-[28vw] h-[39vh]'
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} // Transparent background
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-blue-500 p-2">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">Best place for all your research needs</h2>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-black"></div>
                    <h3 className="font-semibold text-gray-800 text-[16px]">Research Hub</h3>
                  </div>
                  <div className='px-6'>
                    <p className="text-gray-500 text-[14px] ">
                      A centralized platform where users can access, research materials.
                    </p>
                  </div>

                  <button className=" rounded-sm text-purple-500 ml-[35vh] px-8 py-3 font-medium underline transition-all  cursor-pointer">
                    Explore
                  </button>
                </div>
              </motion.div>

              <motion.div
                ref={ref}
                className='rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-xl w-[28vw] h-[39vh]'
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} // Transparent background
              >
                {/* Add content for the second small card here */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;