
import React, { useState, useEffect } from 'react';
import { Github, Mail, User, Linkedin, Download, ExternalLink } from 'lucide-react';

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
      {/* Enhanced Background with Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${
              i % 3 === 0 ? 'w-2 h-2 bg-blue-400/40' : 
              i % 3 === 1 ? 'w-1 h-1 bg-purple-400/40' : 
              'w-1.5 h-1.5 bg-pink-400/40'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Enhanced Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-background/80 backdrop-blur-sm border border-border rounded-full mb-4 animate-fade-in">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-foreground/70">Available for opportunities</span>
              </div>
              
              <p className="text-base md:text-lg text-foreground/70 mb-3 animate-fade-in">
                👋 Hello, I'm
              </p>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 animate-scale-in leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Animesh
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Singh
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground/80 h-12 md:h-16 flex items-center justify-center lg:justify-start mb-6">
                <span className="mr-3">I'm an</span>
                <div className="relative">
                  <span className="text-blue-500 font-semibold border-r-2 border-blue-500 pr-2 min-w-[280px] sm:min-w-[320px] md:min-w-[400px] text-left animate-pulse">
                    {displayText}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-8 md:mb-10 max-w-2xl animate-fade-in leading-relaxed">
              I'm a Full-Stack Developer specializing in building scalable, high-quality web applications using React, Node.js, Express, MongoDB, and SQL. I create responsive interfaces, efficient backend systems, and deliver end-to-end solutions with clean code and modern development practices. I'm passionate about solving real-world problems through technology and continuously refining my skills to stay ahead in the field.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start mb-8 md:mb-10">
              <button
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg font-semibold flex items-center justify-center gap-2"
              >
                <span>Explore My Portfolio</span>
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <a
                href="/resume.pdf"
                download
                className="group border-2 border-blue-500 text-blue-500 px-8 md:px-10 py-3.5 md:py-4 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 text-center text-base md:text-lg font-semibold flex items-center justify-center gap-2"
              >
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-4 md:gap-5 justify-center lg:justify-start">
              <a 
                href="https://github.com/CoderAnimeshSingh" 
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 md:p-4 bg-background/80 backdrop-blur-sm hover:bg-background border border-border hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github size={22} className="md:w-6 md:h-6 group-hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/animeshsingh9693/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 md:p-4 bg-background/80 backdrop-blur-sm hover:bg-background border border-border hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin size={22} className="md:w-6 md:h-6 group-hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a 
                href="mailto:ani.yug272@gmail.com" 
                className="group p-3.5 md:p-4 bg-background/80 backdrop-blur-sm hover:bg-background border border-border hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Mail size={22} className="md:w-6 md:h-6 group-hover:text-blue-500 transition-colors duration-300" />
              </a>
              <button
                onClick={() => scrollToSection('about')}
                className="group p-3.5 md:p-4 bg-background/80 backdrop-blur-sm hover:bg-background border border-border hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <User size={22} className="md:w-6 md:h-6 group-hover:text-blue-500 transition-colors duration-300" />
              </button>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <img
                  src="/lovable-uploads/0f7e98bf-0ea2-4c68-b88f-0b538cfa5200.png"
                  alt="Animesh Singh - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Enhanced Floating icons */}
              <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-lg md:text-2xl animate-bounce shadow-lg">
                ⚛️
              </div>
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-lg md:text-2xl animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }}>
                💻
              </div>
              <div className="absolute top-1/2 -right-8 md:-right-10 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-base md:text-lg animate-pulse shadow-lg">
                🚀
              </div>
              <div className="absolute top-1/4 -left-6 md:-left-8 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white text-sm md:text-base animate-bounce shadow-lg" style={{ animationDelay: '1s' }}>
                ⭐
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-foreground/30 rounded-full flex justify-center cursor-pointer hover:border-foreground/50 transition-colors duration-300">
          <div className="w-1.5 h-3 md:h-4 bg-foreground/30 rounded-full mt-2 md:mt-2.5 animate-pulse"></div>
        </div>
        <p className="text-xs text-foreground/50 text-center mt-2">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
