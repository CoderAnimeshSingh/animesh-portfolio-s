
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import StatsCounter from '../components/StatsCounter';
import TechStack from '../components/TechStack';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <StatsCounter />
        <TechStack />
        <Skills />
        <Projects />
        <TestimonialsCarousel />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
