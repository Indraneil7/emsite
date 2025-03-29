"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const reasons = [
  {
    title: "Reliability",
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    description: "Built with industrial-grade components and rigorous quality control, our chargers deliver consistent performance in any environment.",
    features: [
      "99.9% uptime guarantee",
      "Robust design for all weather conditions",
      "Industry-leading 5-year warranty"
    ],
    gradient: "from-green-400 to-teal-500"
  },
  {
    title: "Availability",
    icon: <ClockIcon className="h-6 w-6" />,
    description: "From inventory to support, we ensure you get what you need, when you need it, with minimal wait times.",
    features: [
      "Ready-to-ship inventory",
      "Nationwide installation network",
      "24/7 technical support"
    ],
    gradient: "from-green-500 to-green-600"
  },
  {
    title: "Affordability",
    icon: <CurrencyDollarIcon className="h-6 w-6" />,
    description: "Maximize your ROI with competitive pricing, low maintenance costs, and energy optimization features.",
    features: [
      "Transparent pricing structure",
      "Low total cost of ownership",
      "Available financing options"
    ],
    gradient: "from-teal-400 to-green-500"
  }
];

const WhyUs = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="inline-block mb-2 px-3 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-medium"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Core Values
          </motion.div>
          <h2 className="heading-lg mb-2">
            Why Choose EnergyMAESTRO
          </h2>
          <p className="mt-2 text-base text-gray-600 max-w-2xl mx-auto">
            We've built our reputation on three core principles that ensure you receive the best EV charging experience possible.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-5 shadow-md overflow-hidden relative"
              variants={itemVariants}
              whileHover={{ 
                y: -6, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              {/* Decorative gradient shape in background */}
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${reason.gradient} opacity-10 blur-xl`} />
              
              {/* Top header bar with number and icon */}
              <div className="flex items-center justify-between mb-4">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center bg-gradient-to-r ${reason.gradient}`}>
                  <div className="text-white">
                    {reason.icon}
                  </div>
                </div>
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xs">{index + 1}</span>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{reason.description}</p>
              
              <div className="relative">
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-green-300 to-green-500 rounded"></div>
                <ul className="space-y-2 pl-4">
                  {reason.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs; 