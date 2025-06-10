
import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
            alt="Animesh Singh"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/20"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Animesh Singh</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I create beautiful, responsive web applications with modern technologies.
            Passionate about clean code, user experience, and continuous learning.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            View My Work
          </button>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg hover:bg-accent transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg hover:bg-accent transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:animesh@example.com"
            className="p-3 rounded-lg hover:bg-accent transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce p-2 rounded-full hover:bg-accent transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
