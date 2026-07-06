import React from 'react';
import SectionReveal from '../components/SectionReveal';
import HeroCoverflowSlider from '../components/HeroCoverflowSlider';
import TechnologiesMarquee from '../components/TechnologiesMarquee';
import AddValueQuote from '../components/AddValueQuote';
import PartnersMarquee from '../components/PartnersMarquee';
import CompletedProjectsDashboard from '../components/CompletedProjectsDashboard';
import './Home.css';

const Home = () => {
  // Sample slider data - you can replace with your actual images and titles
  const slides = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751551864/slider1_kpddqi.png",
      title: 'Building Technology That Drives Success',
      subtitle: 'From custom software to complete ERP platforms.',
      description: 'We deliver comprehensive software solutions that drive your business success and operational excellence.'
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751551865/slider2_bt8bap.png",
      title: 'Software Built Around Your Business',
      subtitle: 'Node, Python, PHP, Java, Flutter — we code your way.',
      description: 'Expert development in multiple programming languages to create solutions that perfectly fit your business needs.'
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751551866/slider3_q6lpse.png",
      title: 'Transforming Operations with Odoo',
      subtitle: 'Tailored ERP systems that grow with you.',
      description: 'Specialized Odoo implementation and customization services designed to scale with your business growth.'
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751551867/slider4_hguueu.png",
      title: 'Mobile Experiences Without Limits',
      subtitle: 'iOS, Android & cross-platform apps — fast, scalable, secure.',
      description: 'Native and cross-platform mobile applications that keep pace with your business and user needs.'
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751551868/slider5_yt9hl1.png",
      title: 'From Vision to Digital Reality',
      subtitle: 'End-to-end development for modern enterprises.',
      description: 'Complete development lifecycle from concept to deployment, turning your ideas into powerful business solutions.'
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751551869/slider6_ufcimj.jpg",
      title: 'Technology Without Boundaries',
      subtitle: 'Web, mobile, desktop, ERP — all under one roof.',
      description: 'Comprehensive digital solutions across all platforms and technologies, all delivered by one trusted partner.'
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751552025/slider7_we6vna.jpg",
      title: 'Engineering Digital Excellence',
      subtitle: 'Reliable systems. Smarter operations.',
      description: 'Your trusted technology partner delivering innovative solutions that make your operations smarter and more efficient.'
    }
  ];

  return (
    <SectionReveal id="home" className="home section-hero" disableAnimation>
      <HeroCoverflowSlider slides={slides} />
      <TechnologiesMarquee />
      <AddValueQuote />
      <PartnersMarquee />
      <CompletedProjectsDashboard />
    </SectionReveal>
  );
};

export default Home;
