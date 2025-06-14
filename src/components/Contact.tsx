
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create Gmail compose URL with pre-filled data
    const gmailUrl = `https://mail.google.com/mail/u/0/?fs=1&to=animeshsingh9693@gmail.com&su=${encodeURIComponent(formData.subject || 'Contact from Portfolio Website')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    // Open Gmail in new tab
    window.open(gmailUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'animeshsingh9693@gmail.com',
      href: 'mailto:animeshsingh9693@gmail.com',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 96969 XXXXX',
      href: 'tel:+919696969693',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Delhi, India',
      href: '#',
      color: 'text-purple-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/CoderAnimeshSingh',
      color: 'hover:text-gray-600 dark:hover:text-gray-400'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/animeshsingh9693/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      name: 'Email',
      href: 'mailto:animeshsingh9693@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">📬 Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Ready to bring your ideas to life? Let's collaborate on your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form - Mobile Responsive */}
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6 sm:mb-8">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <MessageCircle className="text-white" size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Send Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>

            <p className="text-xs sm:text-sm text-foreground/60 mt-4 text-center">
              * This will open your email client to send the message directly to my Gmail.
            </p>
          </div>

          {/* Contact Information - Mobile Responsive */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Details */}
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 group"
                  >
                    <div className={`p-2 sm:p-3 rounded-xl ${info.color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                      <info.icon size={20} className={info.color} />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-foreground/70 font-medium">{info.label}</p>
                      <p className="text-sm sm:text-base text-foreground font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Follow Me</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-4 rounded-xl border border-border hover:border-current transition-all duration-300 hover:scale-105 text-foreground/70 ${social.color}`}
                  >
                    <social.icon size={24} className="mb-2" />
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Note */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl mb-4 mx-auto animate-pulse">
                  ⚡
                </div>
                <h4 className="font-bold text-foreground text-lg sm:text-xl mb-2">Quick Response</h4>
                <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                  I typically respond within 24 hours. For urgent matters, feel free to reach out via phone or LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
