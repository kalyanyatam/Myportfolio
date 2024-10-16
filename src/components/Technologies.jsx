import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaHtml5, FaCss3 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: 1.0,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-8">
      <motion.h1 
      whileInView={{opacity: 1,y: 0}}
      initial={{opacity: 0,y: -100}}
      transition={{duration: 1.5}}
      
      className="my-8 text-center text-4xl text-white mt-8">Web Technologies
      </motion.h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-105 hover:bg-blue-500 hover:text-white"
        >
          <RiReactjsLine className="text-4xl lg:text-4xl text-blue-500" />
          <p className="text-2xl mt-2 text-white">React</p>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-105 hover:bg-orange-500 hover:text-white"
        >
          <FaHtml5 className="text-4xl lg:text-4xl text-orange-500" />
          <p className="text-2xl mt-2 text-white">HTML</p>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700 hover:text-white"
        >
          <FaCss3 className="text-4xl lg:text-4xl text-blue-600" />
          <p className="text-2xl mt-2 text-white">CSS</p>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-105 hover:bg-yellow-500 hover:text-white"
        >
          <IoLogoJavascript className="text-4xl lg:text-4xl text-yellow-500" />
          <p className="text-2xl mt-2 text-white">JavaScript</p>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-105 hover:bg-green-600 hover:text-white"
        >
          <TbBrandNextjs className="text-4xl lg:text-4xl text-green-600" />
          <p className="text-2xl mt-2 text-white">Next.js</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
