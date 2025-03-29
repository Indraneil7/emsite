"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  BoltIcon,
  ClockIcon,
  CloudIcon,
  CogIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Fast Charging',
    description: 'Charge your EV up to 8x faster than standard Level 1 chargers. Get up to 32 miles of range per hour.',
    icon: BoltIcon,
  },
  {
    name: 'Smart Scheduling',
    description: 'Schedule charging during off-peak hours to reduce energy costs and carbon footprint.',
    icon: ClockIcon,
  },
  {
    name: 'Cloud Connectivity',
    description: 'Access your charging data anywhere with cloud-based management and reporting.',
    icon: CloudIcon,
  },
  {
    name: 'Customizable Settings',
    description: 'Adapt charging speeds, power output, and preferences to your specific needs.',
    icon: CogIcon,
  },
  {
    name: 'Mobile Control',
    description: 'Manage your charger remotely with our intuitive mobile app available for iOS and Android.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Easy Installation',
    description: 'Simple installation process with flexible mounting options for indoor and outdoor environments.',
    icon: WrenchScrewdriverIcon,
  },
];

const Features = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading - centered and with more whitespace */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8"
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
            className="inline-block mb-2 px-3 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-medium"
          >
            Advanced Features
          </motion.div>
          <h2 className="heading-lg mb-2">
            The Complete EV Charging Solution
          </h2>
          <p className="text-base text-gray-600">
            Power Up 32 combines cutting-edge technology with user-friendly design to deliver a superior charging experience for your electric vehicle.
          </p>
        </motion.div>

        {/* Feature cards - 3x2 grid for better layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -3, 
                boxShadow: '0 15px 20px -5px rgba(0, 0, 0, 0.1)', 
                backgroundColor: 'rgba(249, 250, 251, 0.8)' 
              }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-green-400 to-green-600">
                <feature.icon className="h-4 w-4 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
              
              {/* Feature highlight indicator */}
              <motion.div 
                className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-green-500"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <button className="btn-primary text-sm px-5 py-2">
            Learn More About Our Solutions
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Features; 