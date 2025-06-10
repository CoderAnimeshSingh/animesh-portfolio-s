
import React from 'react';
import { Code, Briefcase, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2020',
      title: 'Started Programming Journey',
      description: 'Began learning web development with HTML, CSS, and JavaScript',
      icon: <Code size={20} />
    },
    {
      year: '2021',
      title: 'Mastered React & Node.js',
      description: 'Developed expertise in modern JavaScript frameworks and backend development',
      icon: <GraduationCap size={20} />
    },
    {
      year: '2022',
      title: 'First Professional Project',
      description: 'Delivered my first client project - a full-stack e-commerce platform',
      icon: <Briefcase size={20} />
    },
    {
      year: '2023',
      title: 'Full Stack Developer',
      description: 'Currently working on exciting projects and helping businesses grow',
      icon: <Heart size={20} />
    }
  ];

  const interests = [
    '🚀 Space Technology',
    '🎮 Game Development',
    '📚 Continuous Learning',
    '🎵 Music Production',
    '🏔️ Mountain Hiking',
    '📸 Photography'
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            I'm a passionate developer who loves turning complex problems into simple, beautiful solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">My Story</h3>
            <p className="text-foreground/80 leading-relaxed">
              My journey in web development started during college when I discovered the magic of creating 
              interactive experiences with code. What began as curiosity quickly turned into a passion for 
              building applications that make a real difference in people's lives.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I specialize in the MERN stack and love working with modern technologies like React, Next.js, 
              and TypeScript. When I'm not coding, you'll find me exploring new technologies, contributing 
              to open source projects, or planning my next adventure in the mountains.
            </p>
            
            {/* Interests */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">When I'm not coding...</h4>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center space-x-2 text-foreground/70">
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">My Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-4 pb-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white">
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="bg-background border border-border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                        <span className="text-sm text-blue-500 font-medium">{item.year}</span>
                      </div>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '3+', label: 'Years Experience' },
            { number: '50+', label: 'Projects Completed' },
            { number: '10+', label: 'Technologies' },
            { number: '100%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-foreground/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
