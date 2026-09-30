import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TrustMarquee from '../components/TrustMarquee';
import ServicesBento from '../components/ServicesBento';
import WhyChooseUs from '../components/WhyChooseUs';
import OurApproach from '../components/OurApproach';
import EngagementModels from '../components/EngagementModels';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#060713] text-white overflow-x-clip selection:bg-blue-600 selection:text-white">
      <Navbar />
      <HeroSection />
      <TrustMarquee />
      <ServicesBento />
      <WhyChooseUs />
      <OurApproach />
      <EngagementModels />
      <CallToAction />
      <Footer />
    </main>
  );
}
