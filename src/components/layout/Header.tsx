"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Software', href: '/software' },
  { name: 'Company', href: '/company' },
  { name: 'Let\'s Talk', href: '/contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#333] shadow-md py-3' : 'bg-[#333] py-6'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Popover className="relative">
          <div className="flex justify-between items-center">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/" className="flex items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="h-10 w-auto"
                >
                  <Image 
                    src={"/images/Logo.png"}
                    alt="EnergyMAESTRO Logo"
                    width={150}
                    height={40}
                    className="h-10 w-auto"
                  />
                </motion.div>
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-10">
              {navigation.map((item) => (
                <motion.div key={item.name} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                  <Link 
                    href={item.href}
                    className="text-base font-medium text-white hover:text-[#28B83F] transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get a Quote
              </motion.button>
            </div>
            
            {/* Mobile menu button */}
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-[#28B83F] hover:bg-gray-700 focus:outline-none">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel 
              focus 
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-[#333] divide-y-2 divide-gray-700">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-auto">
                      <Image 
                        src="/images/Logo.png"
                        alt="EnergyMAESTRO Logo"
                        width={120}
                        height={30}
                        className="h-8 w-auto"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-[#444] rounded-md p-2 inline-flex items-center justify-center text-white hover:text-[#28B83F] hover:bg-gray-700 focus:outline-none">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-base font-medium text-white hover:text-[#28B83F]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <button
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </motion.header>
  );
};

export default Header; 