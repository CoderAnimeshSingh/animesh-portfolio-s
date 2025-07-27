import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Product Manager",
    company: "TechCorp India",
    content: "Animesh delivered exceptional full-stack solutions that exceeded our expectations. His attention to detail and technical expertise in React and Node.js is outstanding.",
    rating: 5,
    avatar: "PS"
  },
  {
    id: 2,
    name: "Rahul Gupta",
    role: "CTO",
    company: "StartupHub",
    content: "Working with Animesh was a game-changer for our project. His leadership in hackathons and community building shows his collaborative spirit and technical depth.",
    rating: 5,
    avatar: "RG"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Tech Lead",
    company: "Global Solutions",
    content: "Animesh's expertise in MERN stack and Web3 technologies helped us build a cutting-edge platform. His code quality and architecture decisions were spot-on.",
    rating: 5,
    avatar: "SJ"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-full mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium text-yellow-600 dark:text-yellow-400">⭐ Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            What Clients Say
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Trusted by startups and enterprises worldwide for delivering exceptional digital solutions.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-background/90 backdrop-blur-sm border border-border rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl overflow-hidden">
            {/* Background Quote Icon */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-10">
              <Quote size={80} className="text-primary" />
            </div>

            {/* Current Testimonial */}
            <div className="relative z-10 text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-foreground/90 leading-relaxed mb-8 font-medium italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-lg sm:text-xl font-bold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm sm:text-base text-foreground/70">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-background border border-border rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          >
            <ChevronLeft size={20} className="text-foreground group-hover:text-primary transition-colors" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-background border border-border rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          >
            <ChevronRight size={20} className="text-foreground group-hover:text-primary transition-colors" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;