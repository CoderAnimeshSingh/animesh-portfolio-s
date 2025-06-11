
import React from 'react';
import { Heart, Code, Coffee, Github, Linkedin, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Animesh Singh
            </h3>
            <p className="text-foreground/70 mb-4">
              Full Stack Developer passionate about creating beautiful and functional web applications.
            </p>
            <div className="flex items-center space-x-2 text-foreground/60">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and</span>
              <Code size={16} className="text-blue-500" />
              <span>and lots of</span>
              <Coffee size={16} className="text-yellow-600" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-foreground/70 hover:text-foreground transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
            <div className="space-y-3">
              <a
                href="https://github.com/CoderAnimeshSingh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                <Github size={18} />
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://www.linkedin.com/in/animeshsingh9693/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/animesh.singh_rajput/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                <Instagram size={18} />
                <span>Instagram</span>
              </a>
              <a
                href="https://x.com/Animesh_9693?t=Iuz7GXrGixApFcQPV2UsXw&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                <Twitter size={18} />
                <span>Twitter</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Let's Connect</h4>
            <div className="space-y-2">
              <a
                href="mailto:ani.yug272@gmail.com"
                className="block text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                ani.yug272@gmail.com
              </a>
              <a
                href="tel:+919693856529"
                className="block text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                +91 96938 56529
              </a>
              <p className="text-foreground/70">New Delhi, India</p>
              <a
                href="https://www.facebook.com/researchfacts.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                <Facebook size={16} />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Animesh Singh. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/resume.pdf"
              download
              className="text-foreground/60 hover:text-foreground text-sm transition-colors duration-300"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/CoderAnimeshSingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground text-sm transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-foreground/60 hover:text-foreground transition-colors duration-300 text-sm"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
