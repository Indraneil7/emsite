"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingOffice2Icon, 
  CubeIcon, 
  HomeModernIcon, 
  ShoppingBagIcon, 
  TruckIcon, 
  AcademicCapIcon, 
  BuildingStorefrontIcon, 
  BuildingLibraryIcon 
} from '@heroicons/react/24/outline';

const industries = [
  { name: 'Fleet Managers', icon: <TruckIcon className="h-5 w-5" /> },
  { name: 'Hospitality', icon: <BuildingOffice2Icon className="h-5 w-5" /> },
  { name: 'Real Estate', icon: <HomeModernIcon className="h-5 w-5" /> },
  { name: 'Restaurants', icon: <CubeIcon className="h-5 w-5" /> },
  { name: 'Malls', icon: <ShoppingBagIcon className="h-5 w-5" /> },
  { name: 'Universities', icon: <AcademicCapIcon className="h-5 w-5" /> },
  { name: 'Retail', icon: <BuildingStorefrontIcon className="h-5 w-5" /> },
  { name: 'Public Institutions', icon: <BuildingLibraryIcon className="h-5 w-5" /> },
];

const IndustryScroll = () => {
  return (
    <div className="bg-white py-2 border-b border-gray-100 sticky top-0 z-30 shadow-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="hidden lg:flex items-center text-sm text-gray-500 font-medium">
            <span>Industries We Serve</span>
          </div>
          
          <div className="relative w-full overflow-hidden">
            {/* First scrolling row */}
            <motion.div
              className="flex items-center space-x-4 py-2"
              animate={{
                x: [0, -1500]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                }
              }}
            >
              {/* Double the industries to ensure smooth looping */}
              {[...industries, ...industries, ...industries].map((industry, index) => (
                <div 
                  key={`industry-${index}`}
                  className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm space-x-2 border border-gray-100 whitespace-nowrap"
                >
                  <div className="text-green-600">{industry.icon}</div>
                  <span className="font-medium">{industry.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryScroll; 