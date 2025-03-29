"use client";

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: 'Installing Power Up 32 chargers at our hotel has been a game-changer. Our guests love the reliable charging, and we\'ve seen a significant increase in bookings from EV drivers.',
    author: {
      name: 'Sarah Johnson',
      title: 'Operations Manager',
      company: 'Grand Vista Hotel Group',
    },
  },
  {
    id: 2,
    content: 'The management software is incredibly intuitive. We can monitor all our charging stations across multiple locations, set customized pricing, and the analytics have helped us optimize our energy usage.',
    author: {
      name: 'Michael Chen',
      title: 'Fleet Director',
      company: 'Urban Delivery Services',
    },
  },
  {
    id: 3,
    content: 'What impressed us most was the ease of installation and the outstanding customer support. The team at EnergyMAESTRO went above and beyond to ensure our charging infrastructure was perfectly suited to our needs.',
    author: {
      name: 'Jessica Rivera',
      title: 'Property Manager',
      company: 'Skyline Properties',
    },
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="heading-lg">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear what our clients have to say about their experience with Power Up 32 charging solutions
          </p>
        </motion.div>
        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="rounded-xl bg-white p-8 shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="relative">
                  <svg
                    className="absolute top-0 left-0 h-8 w-8 -translate-x-6 -translate-y-8 transform text-green-500 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative mt-2 text-base text-gray-700 italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-white font-bold">
                      {testimonial.author.name.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.author.name}</p>
                    <div className="text-sm text-gray-600">
                      {testimonial.author.title}, {testimonial.author.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 