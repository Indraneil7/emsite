"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative bg-[#FFF] text-gray-900 overflow-hidden">
      {/* Subtle decorative elements that maintain white theme */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#FFF] opacity-40 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#FFF] opacity-30 blur-3xl" />
      
      <div className="relative pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 lg:pt-12 lg:pb-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <motion.div 
              className="lg:col-span-6 lg:pr-8 relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center mb-4 px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
              >
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                New Release | Level 2 Charging
              </motion.div>
              
              <motion.h1 
                className="heading-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="block">Power Up 32</span>
                <motion.span 
                  className="block text-green-600"
                  initial={{ opacity: 0.8, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 2.5,
                      ease: "easeInOut"
                    }
                  }}
                >
                  The Ultimate Level 2 Charger
                </motion.span>
              </motion.h1>
              <motion.p 
                className="mt-6 text-body max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Perfect for destination charging - ideal for hotels, fleet managers, and businesses looking for reliable, affordable, and smart charging solutions. Empower your operations with our intelligent EV charging infrastructure.
              </motion.p>
              
              <motion.div 
                className="mt-6 flex items-center space-x-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center border-2 border-white text-white font-bold text-xs"
                      whileHover={{ y: -3, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {i === 1 ? '5★' : i === 2 ? 'CE' : 'UL'}
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm text-gray-600 flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Trusted by 500+ businesses
                </span>
              </motion.div>
              
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.button
                  className="btn-primary relative overflow-hidden group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-green-600 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
                <motion.button
                  className="btn-secondary relative overflow-hidden group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">Buy Now</span>
                  <div className="absolute inset-0 h-full w-full bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 flex items-center justify-center lg:ml-[-50px] relative z-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {/* Floating elements */}
              <motion.div
                className="absolute -top-10 right-10 h-8 w-8 rounded-full bg-[#FFF] z-0"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-20 -right-5 h-4 w-4 rounded-full bg-[#FFF] z-0"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute bottom-10 left-10 h-6 w-6 rounded-full bg-[#FFF] z-0"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute top-20 -right-10 z-10 w-[200px] h-auto"
                >
                  <motion.div
                    whileHover={{ y: -5, rotate: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image 
                      src="/images/mobilemockup.png" 
                      alt="Mobile App" 
                      width={200} 
                      height={400}
                      className="w-full h-auto"
                      style={{ objectFit: 'contain' }}
                    />
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ y: -5 }}
                  className="relative z-0"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ 
                      y: {
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <Image 
                      src="/images/charger1.png" 
                      alt="Power Up 32 Charger" 
                      width={400} 
                      height={600}
                      className="w-full h-auto relative z-10" 
                      style={{ objectFit: 'contain', backgroundColor: '#FFF' }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 