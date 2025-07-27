
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, MapPin, Calendar, MessageCircle } from 'lucide-react';
import { RESUME_PATH, RESUME_DOWNLOAD_NAME, WHATSAPP_NUMBER, WHATSAPP_MESSAGE, DESCRIPTIONS } from '../lib/constants';
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
      {/* Enhanced Background with better mobile performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900/90 dark:via-gray-800/90 dark:to-purple-900/20"></div>
      <div className="absolute inset-0 opacity-30 pattern-background" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Enhanced Mobile Layout */}
          <div className="text-center lg:text-left order-2 lg:order-1 space-y-6 lg:space-y-8">
            {/* Status Badge - Mobile Optimized */}
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-full text-xs sm:text-sm font-medium text-green-700 dark:text-green-400 animate-pulse">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></div>
              Available for opportunities
            </div>

            {/* Main Heading - Responsive Typography */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-glow">
                  Animesh Singh
                </span>
              </h1>
              
              {/* Rotating Descriptions */}
              <div className="h-12 sm:h-16 flex items-center justify-center lg:justify-start">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-blue-400 transition-all duration-500">
                  {DESCRIPTIONS[currentDescriptionIndex].text}
                </h2>
              </div>
            </div>

            {/* Bio - Mobile Responsive */}
            <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
              Full-Stack Developer specializing in scalable web applications using React, Node.js, MongoDB, and modern technologies. Building responsive UIs and robust backend systems with clean, maintainable code.
            </p>

            {/* Location & Experience - Mobile Stack */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-500" />
                <span>Delhi, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-purple-500" />
                <span>2+ Years Experience</span>
              </div>
            </div>

            {/* CTA Buttons - Mobile Stack */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Mail size={18} />
                <span>Get In Touch</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button
                onClick={handleWhatsAppClick}
                className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Social Links - Mobile Optimized */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/CoderAnimeshSingh"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-background/80 border border-border rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Github size={24} className="text-foreground group-hover:text-blue-500 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/animeshsingh9693/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-background/80 border border-border rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} className="text-foreground group-hover:text-blue-600 transition-colors" />
              </a>
              <a
                href="mailto:ani.yug272@gmail.com"
                className="group p-3 bg-background/80 border border-border rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} className="text-foreground group-hover:text-purple-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Section - Mobile Optimized */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Profile Image Container - Responsive */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Animated Background Ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-75 blur-sm"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-spin-reverse opacity-50 blur-md"></div>
                
                {/* Profile Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <img
                    src="/lovable-uploads/0f7e98bf-0ea2-4c68-b88f-0b538cfa5200.png"
                    alt="Animesh Singh - Full Stack Developer"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Mobile Friendly */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
