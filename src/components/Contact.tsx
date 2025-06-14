import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

--
Sent from your portfolio website contact form.
      `);
      
      const mailtoLink = `mailto:ani.yug272@gmail.com?subject=${subject}&body=${body}`;
      
      // Open user's default email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919693856529';
    const message = 'Hello Animesh! I would like to connect with you.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Let's connect! Whether you want to discuss technology, collaboration opportunities, or just say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-xl border border-border/50 hover:bg-background/70 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Mail size={18} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">Email</h4>
                  <a href="mailto:ani.yug272@gmail.com" className="text-foreground/70 text-sm md:text-base hover:text-blue-500 transition-colors">
                    ani.yug272@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-xl border border-border/50 hover:bg-background/70 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Phone size={18} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">Phone</h4>
                  <a href="tel:+919693856529" className="text-foreground/70 text-sm md:text-base hover:text-blue-500 transition-colors">
                    +91-9693856529
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-xl border border-border/50 hover:bg-background/70 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <MapPin size={18} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">Location</h4>
                  <p className="text-foreground/70 text-sm md:text-base">Delhi, India</p>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30 transition-all duration-300 w-full group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg width="18" height="18" className="md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.951 3.700"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-green-700 dark:text-green-400 text-sm md:text-base">WhatsApp</h4>
                  <p className="text-green-600 dark:text-green-500 text-sm md:text-base">Chat with me instantly</p>
                </div>
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-6 md:pt-8">
              <h4 className="font-semibold text-foreground mb-4 text-sm md:text-base">Follow Me</h4>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <a
                  href="https://github.com/CoderAnimeshSingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 md:h-12 bg-secondary hover:bg-secondary/80 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
                >
                  <Github size={16} className="md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/animeshsingh9693/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 md:h-12 bg-secondary hover:bg-secondary/80 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
                >
                  <Linkedin size={16} className="md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/animesh.singh_rajput/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 md:h-12 bg-secondary hover:bg-secondary/80 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
                >
                  <Instagram size={16} className="md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm">Instagram</span>
                </a>
                <a
                  href="https://x.com/Animesh_9693?t=Iuz7GXrGixApFcQPV2UsXw&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 md:h-12 bg-secondary hover:bg-secondary/80 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
                >
                  <Twitter size={16} className="md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm">Twitter</span>
                </a>
                <a
                  href="https://www.facebook.com/researchfacts.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 md:h-12 bg-secondary hover:bg-secondary/80 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 col-span-2"
                >
                  <Facebook size={16} className="md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm">Facebook</span>
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="pt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                <span>Download Resume</span>
                <span>📄</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background/50 border border-border/50 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 text-sm">
                Your email client has been opened with the message. Please send it to complete your contact request.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm">
                There was an error. Please try again or contact me directly at ani.yug272@gmail.com
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-sm md:text-base"
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
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-sm md:text-base"
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
                  rows={5}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none text-sm md:text-base"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} className="md:w-5 md:h-5" />
                <span>{isSubmitting ? 'Opening Email Client...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
