import React from 'react';
import { FaJs } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { TbBrandCpp } from 'react-icons/tb';
import { FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Programming = () => {
  return (
    <div className="border-b border-neutral-800 pb-8">
      <motion.h1 
      whileInView={{opacity: 1,y: 0}}
      initial={{opacity: 0,y: -100}}
      transition={{duration: 1.0}}

      className="my-8 text-center text-4xl text-white mt-8  sm:text-xs lg:text-4xl">Programming Languages
      </motion.h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <motion.div 
        variants={iconVariants(2.8)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-105 hover:bg-yellow-500 hover:text-white">
          <FaJs className="text-4xl text-yellow-500" />
          <p className="text-center mt-2 text-white">JavaScript</p>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.8)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-105 hover:bg-blue-600 hover:text-white">
          <FaPython className="text-4xl text-blue-600" />
          <p className="text-center mt-2 text-white">Python</p>
        </motion.div>
        <motion.div
        variants={iconVariants(2.8)}
        initial="initial"
        animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-105 hover:bg-red-600 hover:text-white">
          <FaJava className="text-4xl text-red-600" />
          <p className="text-center mt-2 text-white">Java</p>
        </motion.div>
        <motion.div
        variants={iconVariants(2.8)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-105 hover:bg-red-500 hover:text-white">
          <TbBrandCpp className="text-4xl text-red-500" />
          <p className="text-center mt-2 text-white">CPP</p>
        </motion.div>
        <motion.div
        variants={iconVariants(2.8)}
        initial="initial"
        animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-105 hover:bg-purple-600 hover:text-white">
          <FaDatabase className="text-4xl text-purple-600" />
          <p className="text-center mt-2 text-white">DBMS</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Programming;
