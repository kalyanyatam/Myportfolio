import React from 'react';
import ProfilePic from '../assets/pictures/chinnu2.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:mb-36 flex flex-col lg:flex-row">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-8">
        <div className="flex flex-col items-start lg:items-start space-y-4">
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight">Hello!</h1>
          <h1 className="text-4xl lg:text-5xl font-Courier New tracking-tight animate-typewriter overflow-hidden whitespace-nowrap">
            I'm <span className="text-transparent bg-gradient-to-r from-red-300 via-slate-500 to-red-500 bg-clip-text">Kalyan Yatam</span>
          </h1>
          <h1 className="text-3xl lg:text-2xl font-Courier New tracking-tight animate-typewriter overflow-hidden whitespace-nowrap">3/4 CSE from SRKR engineering college</h1>
          
          <motion.span
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl lg:text-4xl font-semibold shadow-lg"
          >
            Frontend Developer
          </motion.span>

          <p className="text-sm lg:text-base leading-relaxed mt-4 text-gray-300">
            As a Frontend Developer, I specialize in creating visually appealing and highly functional user interfaces.
            With a strong foundation in HTML, CSS, and JavaScript, coupled with experience in modern frameworks like React,
            I bring designs to life with clean, efficient code. My focus is on building responsive, accessible,
            and user-friendly applications that provide an exceptional user experience across all devices.
            I am passionate about staying updated with the latest web technologies and continuously improving my skill set to deliver top-quality work.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 px-4 lg:px-8">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 2 }}  
          whileTap={{ scale: 0.95 }} 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} 
          className="w-80 lg:w-96"
        >
          <img 
            src={ProfilePic} 
            alt="Kalyan Yatam" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
