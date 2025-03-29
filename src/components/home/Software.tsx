"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ChartBarIcon, 
  CogIcon,
  ClockIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Real-Time Monitoring',
    description: 'Monitor charging status, usage patterns, and system health in real-time.',
    icon: <ChartBarIcon className="h-6 w-6" />
  },
  {
    name: 'Customizable Dashboard',
    description: 'Tailor the dashboard to your specific business needs and KPIs.',
    icon: <CogIcon className="h-6 w-6" />
  },
  {
    name: 'Smart Scheduling',
    description: 'Optimize charging schedules to reduce costs and manage peak demand.',
    icon: <ClockIcon className="h-6 w-6" />
  },
  {
    name: 'Revenue Management',
    description: 'Set pricing, track revenue, and generate detailed financial reports.',
    icon: <CurrencyDollarIcon className="h-6 w-6" />
  },
  {
    name: 'Mobile Integration',
    description: 'Manage your charging network from anywhere with our mobile app.',
    icon: <DevicePhoneMobileIcon className="h-6 w-6" />
  },
  {
    name: 'User Management',
    description: 'Control access, set permissions, and manage multiple user roles.',
    icon: <UserGroupIcon className="h-6 w-6" />
  },
];

const Software = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-1 px-3 py-0.5 bg-[#e1f7e5] text-[#28B83F] rounded-full text-xs font-medium"
          >
            Intelligent Management
          </motion.div>
          <h2 className="heading-lg mb-1">
            Powerful Software Platform
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Complete control over your charging infrastructure, providing flexibility, customization, and actionable insights.
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start p-3 bg-white rounded-xl shadow-sm"
                  whileHover={{ 
                    y: -3, 
                    boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "rgba(230, 250, 235, 0.7)" 
                  }}
                >
                  <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-gradient-to-r from-[#28B83F] to-[#1c8a2d] flex items-center justify-center text-white mr-3">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900 mb-0.5">{feature.name}</h3>
                    <p className="text-gray-600 text-xs">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 lg:mt-0 lg:col-span-6 flex justify-center"
          >
            <div className="relative scale-95">
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 h-32 w-32 bg-[#e1f7e5] rounded-full opacity-70 mix-blend-multiply z-0"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5] 
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 h-20 w-20 bg-[#c6f0cf] rounded-full opacity-70 mix-blend-multiply z-0"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6] 
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Drop shadow for floating effect */}
              <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-transparent to-transparent rounded-full filter blur-xl opacity-30" />
              
              {/* The image with no frame, just subtle shadow */}
              <motion.div
                whileHover={{ y: -5, rotate: -1 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <Image 
                  src="/images/iMac Pro Render.png"
                  alt="EnergyMAESTRO Software Dashboard"
                  width={600}
                  height={450}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-2 flex justify-center"
        >
          <button className="btn-primary text-sm px-5 py-2">
            Get a Quote
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Software; 