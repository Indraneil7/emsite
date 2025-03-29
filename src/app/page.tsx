import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Software from '@/components/home/Software';
import Partners from '@/components/home/Partners';
import Testimonials from '@/components/home/Testimonials';
import IndustryScroll from '@/components/home/IndustryScroll';
import CTA from '@/components/home/CTA';
import ContactForm from '@/components/home/ContactForm';
import WhyUs from '@/components/home/WhyUs';

export default function Home() {
  return (
    <Layout>
      <IndustryScroll />
      <Hero />
      <Testimonials />
      <Partners />
      <Features />
      <Software />
      <CTA />
      <WhyUs />
      <ContactForm />
    </Layout>
  );
}
