
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, DESCRIPTIONS } from '../lib/constants';
import { Description } from '../lib/types';

const Hero = () => {
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);
  
  useEffect(() => {
    const currentDelay = DESCRIPTIONS[currentDescriptionIndex].delay;
    const interval = setInterval(() => {
      setCurrentDescriptionIndex((prev) => (prev + 1) % DESCRIPTIONS.length);
    }, currentDelay);
    return () => clearInterval(interval);
  }, [currentDescriptionIndex]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Enhanced Mobile Layout */}
          <div className="text-center lg:text-left order-2 lg:order-1 space-y-6 lg:space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 rounded-full text-sm text-green-800 dark:text-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Available for work
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="block">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Animesh Singh
                </span>
              </h1>
              
              {/* Rotating Descriptions */}
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400">
                  {DESCRIPTIONS[currentDescriptionIndex].text}
                </h2>
              </div>
            </div>

            {/* Bio */}
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Full-Stack Developer specializing in React, Node.js, and MongoDB. Building responsive web applications with clean, maintainable code.
            </p>

            {/* Location & Experience */}
            <div className="flex flex-col sm:flex-row gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Delhi, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>2+ Years Experience</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Mail size={18} />
                Get In Touch
              </a>
              
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://github.com/CoderAnimeshSingh" target="_blank" className="p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/animeshsingh9693/" target="_blank" className="p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ani.yug272@gmail.com" className="p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              <img
                src="/lovable-uploads/6a13d721-693e-4873-a475-9572fc869967.png"
                alt="Animesh Singh"
                className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
