
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Let's connect! Whether you want to discuss technology, collaboration opportunities, or just say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-foreground/70">ani.yug272@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-foreground/70">+91-9693856529</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-foreground/70">Delhi, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/CoderAnimeshSingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 bg-secondary hover:bg-secondary/80 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
                >
                  <Github size={20} />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/animeshsingh9693/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 bg-secondary hover:bg-secondary/80 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
                >
                  <Linkedin size={20} />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/animesh.singh_rajput/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 bg-secondary hover:bg-secondary/80 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
                >
                  <Instagram size={20} />
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href="https://x.com/Animesh_9693?t=Iuz7GXrGixApFcQPV2UsXw&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 bg-secondary hover:bg-secondary/80 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
                >
                  <Twitter size={20} />
                  <span className="text-sm">Twitter</span>
                </a>
                <a
                  href="https://www.facebook.com/researchfacts.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 bg-secondary hover:bg-secondary/80 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 col-span-2"
                >
                  <Facebook size={20} />
                  <span className="text-sm">Facebook</span>
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="pt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Download Resume</span>
                <span>📄</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background border border-border rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
