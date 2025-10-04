
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import StatsCounter from '../components/StatsCounter';
import Skills3D from '../components/Skills3D';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Scene3D from '../components/Scene3D';
import { ThemeProvider } from '../context/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
        <Scene3D />
        <Navbar />
        <Hero />
        <About />
        <StatsCounter />
        <Skills3D />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
