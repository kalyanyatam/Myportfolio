import React from 'react';
import AboutImage from '../assets/pictures/about.jpg';
import { motion } from 'framer-motion';

const About = () => {
  console.log('About component rendered');
  return (
    <div className="border-b border-neutral-900 pb-4 mt-12">
      <h2 className="text-center text-4xl font-bold">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-col lg:flex-row lg:items-center mt-8">
        <div className="w-full lg:w-1/2 lg:pr-10">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 1 }}  
            whileTap={{ scale: 0.7 }} 
            initial={{ opacity: 0, y: 50 }}  
            animate={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.3 }}  
            className="w-85 h-90"
          >
            <img 
              src={AboutImage} 
              alt="about" 
              className="w-90 h-100 rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-4 mt-4 lg:mt-0 justify-center flex items-center">
          <p className="text-sm lg:text-base leading-relaxed text-4xl">
            I’m a passionate Frontend Developer dedicated to creating refined and engaging web experiences. My expertise spans HTML, CSS, JavaScript, and React, allowing me to transform elegant designs into functional and interactive applications. I focus on delivering seamless, user-friendly interfaces with a keen eye for detail and innovation.
            Committed to continuous learning and staying ahead of industry trends, I am passionate about translating innovative ideas into polished, user-centric solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
