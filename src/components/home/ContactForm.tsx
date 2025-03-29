"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your server or a form service
    console.log('Form submitted:', formState);
    setSubmitted(true);
    
    // Reset form after submission (simulate successful submission)
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white py-10 sm:py-16 border-t border-gray-100" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="heading-lg mb-2">
            Contact Us
          </h2>
          <p className="mt-2 text-base text-gray-600 max-w-2xl mx-auto">
            Interested in Power Up 32 for your business? Reach out to us and a member of our team will get back to you shortly.
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-xl bg-white p-6 shadow-md border border-gray-200">
              {submitted ? (
                <motion.div 
                  className="text-center py-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-3 text-xl font-medium text-gray-900">Thank you!</h3>
                  <p className="mt-1 text-base text-gray-600">
                    Your message has been received. We&apos;ll be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-xs font-medium text-gray-700">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={3}
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                        placeholder="Tell us about your needs..."
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="btn-primary w-full text-sm py-2"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            className="mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-r from-green-400 to-green-600">
                    <EnvelopeIcon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Our friendly team is here to help.
                  </p>
                  <a href="mailto:sales@energymaestro.com" className="mt-1 block text-green-500 hover:text-green-600 transition-colors text-sm">
                    sales@energymaestro.com
                  </a>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-r from-green-400 to-green-600">
                    <PhoneIcon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Mon-Fri from 8am to 5pm PST.
                  </p>
                  <a href="tel:+18005551234" className="mt-1 block text-green-500 hover:text-green-600 transition-colors text-sm">
                    +1 (800) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-r from-green-400 to-green-600">
                    <MapPinIcon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Come say hello at our headquarters.
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    123 Innovation Drive<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl overflow-hidden h-48 border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1332143780428!2d-122.3968388!3d37.7900451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858073578bd6b1%3A0xbd5b0da366bc4893!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1646242222735!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location Map"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 