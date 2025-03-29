"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="relative rounded-xl overflow-hidden bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Abstract shapes */}
          <div className="absolute right-0 top-0 -mt-20 -mr-20 opacity-10 scale-75">
            <svg width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
              <defs>
                <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-green-500" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 opacity-10 scale-75">
            <svg width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
              <defs>
                <pattern id="85737c0e-0916-41d7-917f-596dc7edfa28" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-green-500" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa28)" />
            </svg>
          </div>
          
          <div className="relative px-5 py-10 sm:px-10 sm:py-16 lg:py-20 lg:px-14">
            <div className="mx-auto max-w-3xl text-center">
              <motion.h2 
                className="heading-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Ready to electrify your business?
              </motion.h2>
              <motion.p 
                className="mt-4 mx-auto max-w-xl text-base text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Join the growing network of businesses that are leveraging EnergyMAESTRO's charging solutions to attract customers, reduce carbon footprint, and stay ahead of the competition.
              </motion.p>
              <motion.div 
                className="mt-6 flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.button
                  className="btn-primary text-sm px-5 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get started
                </motion.button>
                <motion.button
                  className="btn-secondary text-sm px-5 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact sales
                </motion.button>
              </motion.div>
              <motion.p 
                className="mt-4 text-xs text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                No commitments. Schedule a free consultation today.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTA; 