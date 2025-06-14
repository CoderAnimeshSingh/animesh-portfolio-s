
import React, { useState, useEffect } from 'react';
import { Github, Mail, User, Linkedin } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Expert Full Stack Developer',
    'Tech Community Leader',
    'Innovation Catalyst',
    'Digital Solutions Architect'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const speed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentRole.slice(0, prev.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-4 md:mb-6">
              <p className="text-base md:text-lg text-foreground/70 mb-2 animate-fade-in">
                👋 Hello, I'm
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 md:mb-4 animate-scale-in leading-tight">
                Animesh Singh
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/80 h-10 md:h-12 flex items-center justify-center lg:justify-start">
                <span className="mr-2">I'm an</span>
                <span className="text-blue-500 font-semibold border-r-2 border-blue-500 pr-1 min-w-[200px] sm:min-w-[250px] md:min-w-[280px] text-left">
                  {displayText}
                </span>
              </div>
            </div>

            <div className="mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                💼 Full-Stack Developer | Crafting Scalable & Impactful Web Solutions
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl animate-fade-in leading-relaxed">
                I'm a dedicated Full-Stack Developer with strong expertise in both front-end and back-end technologies. I build clean, scalable, and high-performance web applications using tools like React, Node.js, Express, MongoDB, and SQL.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl animate-fade-in leading-relaxed mt-3">
                My focus is on delivering responsive UI/UX, writing efficient code, and developing end-to-end solutions that solve real-world problems. I follow modern development practices, prioritize code quality, and continuously explore new technologies to stay ahead in the field.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-6 md:mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                Explore My Portfolio
              </button>
              <a
                href="/resume.pdf"
                download
                className="border-2 border-blue-500 text-blue-500 px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 text-center text-sm md:text-base"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 md:gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/CoderAnimeshSingh" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Github size={20} className="md:w-6 md:h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/animeshsingh9693/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} className="md:w-6 md:h-6" />
              </a>
              <a href="mailto:ani.yug272@gmail.com" className="p-2.5 md:p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300 hover:scale-110">
                <Mail size={20} className="md:w-6 md:h-6" />
              </a>
              <button
                onClick={() => scrollToSection('about')}
                className="p-2.5 md:p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <User size={20} className="md:w-6 md:h-6" />
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-2 shadow-2xl">
                <img
                  src="/lovable-uploads/0f7e98bf-0ea2-4c68-b88f-0b538cfa5200.png"
                  alt="Animesh Singh"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Floating icons around avatar */}
              <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-8 h-8 md:w-12 md:h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm md:text-xl animate-bounce">
                ⚛️
              </div>
              <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-8 h-8 md:w-12 md:h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-sm md:text-xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                💻
              </div>
              <div className="absolute top-1/2 -right-6 md:-right-8 w-6 h-6 md:w-8 md:h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm animate-pulse">
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-foreground/30 rounded-full mt-1.5 md:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
