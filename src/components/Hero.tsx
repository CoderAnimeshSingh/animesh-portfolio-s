
import React, { useState, useEffect } from 'react';
import { Github, Mail, User, Linkedin } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Full Stack Developer',
    'BCA Student',
    'Tech Community Leader',
    'Problem Solver'
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-lg text-foreground/70 mb-2 animate-fade-in">
                👋 Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-scale-in">
                Animesh Singh
              </h1>
              <div className="text-2xl lg:text-3xl text-foreground/80 h-12 flex items-center justify-center lg:justify-start">
                <span className="mr-2">I'm a</span>
                <span className="text-blue-500 font-semibold border-r-2 border-blue-500 pr-1 min-w-[280px] text-left">
                  {displayText}
                </span>
              </div>
            </div>

            <p className="text-lg text-foreground/70 mb-8 max-w-2xl animate-fade-in">
              BCA student at Delhi Skill and Entrepreneurship University with expertise in Java, Python, and modern web technologies. 
              Passionate about building scalable applications and leading tech communities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/CoderAnimeshSingh" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/animeshsingh" className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300 hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ani.yug272@gmail.com" className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300 hover:scale-110">
                <Mail size={24} />
              </a>
              <button
                onClick={() => scrollToSection('about')}
                className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <User size={24} />
              </button>
            </div>
          </div>

          {/* Avatar/Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                A
              </div>
              {/* Floating icons around avatar */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl animate-bounce">
                ⚛️
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                💻
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
