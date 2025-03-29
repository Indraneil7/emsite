"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interest: 'Power Up 32 Charger'
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formState);
    alert('Thanks for your message! We will get back to you soon.');
    // Reset form
    setFormState({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      interest: 'Power Up 32 Charger'
    });
  };

  return (
    <div className="bg-white py-16 sm:py-24 border-t border-gray-100" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto text-center mb-12"
        >
          <h2 className="heading-lg">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ready to power up your business? Let us know how we can help with your EV charging needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                  I'm interested in:
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formState.interest}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  <option value="Power Up 32 Charger">Power Up 32 Charger</option>
                  <option value="Management Software">Management Software</option>
                  <option value="Installation Services">Installation Services</option>
                  <option value="Custom Solutions">Custom Solutions</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full sm:w-auto"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 