import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../images/w4.jpg'; 

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-screen flex items-center justify-center text-white"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="z-10 text-center space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          Protect Our Planet
        </h1>
        <p className="text-xl md:text-2xl">
          Join us in making a difference
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg"
          
        >
          <a href='#start'>
          Get Started
          </a>
        
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
