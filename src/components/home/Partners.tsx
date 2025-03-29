"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SunIcon, BoltIcon, SparklesIcon, LightBulbIcon } from '@heroicons/react/24/outline';

// Custom styled logo components
const ImageStyleLogo = ({ 
  name, 
  bgColor = "bg-white", 
  textColor = "text-gray-800",
  icon
}: { 
  name: string; 
  bgColor?: string; 
  textColor?: string;
  icon: React.ReactNode;
}) => (
  <div className={`h-16 w-40 ${bgColor} border border-gray-200 rounded-md flex items-center justify-center px-3 py-2 shadow-sm`}>
    <div className="flex items-center space-x-2">
      <div className="flex-shrink-0">{icon}</div>
      <p className={`text-center text-sm font-bold ${textColor}`}>{name}</p>
    </div>
  </div>
);

const Partners = () => {
  // Create styled partner logos instead of using image files
  const partnerLogos = [
    { 
      name: "SOLAR POWER INC", 
      bgColor: "bg-blue-600", 
      textColor: "text-white",
      icon: <SunIcon className="h-6 w-6 text-yellow-300" />
    },
    { 
      name: "BRIGHT FUTURE", 
      bgColor: "bg-yellow-500", 
      textColor: "text-gray-900",
      icon: <LightBulbIcon className="h-6 w-6 text-white" />
    },
    { 
      name: "ENERGIZE CORP", 
      bgColor: "bg-gray-900", 
      textColor: "text-white",
      icon: <BoltIcon className="h-6 w-6 text-yellow-400" />
    },
    { 
      name: "CLEAN POWER", 
      bgColor: "bg-green-600", 
      textColor: "text-white",
      icon: <SparklesIcon className="h-6 w-6 text-white" />
    },
  ];

  // Text-based logos with more styling
  const textOnlyLogos = [
    {
      name: "ALL IN ONE SOLAR",
      bgColor: "bg-gradient-to-r from-orange-400 to-red-500",
      textColor: "text-white",
      icon: <SunIcon className="h-6 w-6 text-white" />
    },
    {
      name: "Frans Solar Electric",
      bgColor: "bg-gradient-to-r from-blue-400 to-blue-600",
      textColor: "text-white",
      icon: <BoltIcon className="h-6 w-6 text-white" />
    },
    {
      name: "Green Star Solutions",
      bgColor: "bg-gradient-to-r from-green-400 to-green-600",
      textColor: "text-white",
      icon: <SparklesIcon className="h-6 w-6 text-white" />
    }
  ];

  // Combine all logos for display
  const allLogos = [...partnerLogos, ...textOnlyLogos];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="heading-lg">Channel & Installation Partners</h2>
          <p className="mt-4 text-gray-600">Working with industry leaders to provide seamless EV charging solutions</p>
        </motion.div>

        <div className="relative overflow-hidden py-4">
          <motion.div
            className="flex space-x-12 items-center"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* First set of logos */}
            {allLogos.map((logo, index) => (
              <motion.div
                key={`logo-${index}`}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="flex-shrink-0"
              >
                <ImageStyleLogo 
                  name={logo.name} 
                  bgColor={logo.bgColor} 
                  textColor={logo.textColor}
                  icon={logo.icon}
                />
              </motion.div>
            ))}

            {/* Duplicate for continuous scrolling */}
            {allLogos.map((logo, index) => (
              <motion.div
                key={`logo-dup-${index}`}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="flex-shrink-0"
              >
                <ImageStyleLogo 
                  name={logo.name} 
                  bgColor={logo.bgColor} 
                  textColor={logo.textColor}
                  icon={logo.icon}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Partners; 