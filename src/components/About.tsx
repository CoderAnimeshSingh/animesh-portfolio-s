
import React from 'react';
import { Code, Briefcase, GraduationCap, Heart, Users, Trophy, Award, Zap, Target } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2023',
      title: 'Started BCA at DSEU',
      description: 'Commenced Bachelor of Computer Applications at Delhi Skill and Entrepreneurship University, achieving exceptional 8.5/10 CGPA through dedicated academic excellence',
      icon: <GraduationCap size={20} />
    },
    {
      year: '2023',
      title: 'Founded TechVerse Nexus',
      description: 'Established a thriving tech community ecosystem, successfully mentoring 1K+ aspiring developers and fostering collaborative innovation in the tech space',
      icon: <Users size={20} />
    },
    {
      year: '2023-2024',
      title: 'Tech Event Leadership',
      description: 'Spearheaded and orchestrated 4+ major tech hackathons across Delhi NCR with strategic planning, flawless execution, and outstanding participant engagement',
      icon: <Trophy size={20} />
    },
    {
      year: '2024',
      title: 'Industry Collaboration',
      description: 'Leading high-profile government and corporate tech events, building strategic partnerships and expanding professional networks in the technology ecosystem',
      icon: <Briefcase size={20} />
    }
  ];

  const achievements = [
    {
      title: 'Java Programming Excellence',
      issuer: 'NPTEL (Premium Certification)',
      description: 'Advanced mastery in Java programming, object-oriented principles, and enterprise-level application development'
    },
    {
      title: 'Full Stack Development Mastery',
      issuer: 'Apna College (Industry Recognition)',
      description: 'Comprehensive expertise in DSA with Java, modern web development frameworks, and scalable application architecture'
    }
  ];

  const expertise = [
    { icon: '🎯', text: 'Full Stack Architecture' },
    { icon: '⚡', text: 'Performance Optimization' },
    { icon: '🔧', text: 'System Design & Scalability' },
    { icon: '👥', text: 'Team Leadership & Mentoring' },
    { icon: '🚀', text: 'Innovation & Product Development' },
    { icon: '🌐', text: 'Enterprise Solutions' }
  ];

  const stats = [
    { number: '8.5', label: 'Academic CGPA', suffix: '/10' },
    { number: '1K+', label: 'Developers Mentored', suffix: '' },
    { number: '4+', label: 'Major Hackathons Led', suffix: '' },
    { number: '15+', label: 'Technologies Mastered', suffix: '' }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Expert Full Stack Developer, Tech Visionary, and Community Leader transforming ideas into scalable digital solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-background/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-border/50 hover:bg-background/70 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-foreground/70 mt-1 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Professional Story */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code size={18} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">Professional Excellence</h3>
            </div>
            
            <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
              As an <strong>Expert Full Stack Developer</strong> and visionary tech leader, I bring exceptional technical prowess 
              combined with strategic thinking to every project. Currently pursuing Bachelor of Computer Applications at 
              Delhi Skill and Entrepreneurship University with an outstanding 8.5/10 CGPA, demonstrating academic excellence 
              alongside practical expertise.
            </p>
            
            <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
              As the <strong>Founder of TechVerse Nexus</strong>, I've successfully built and led a thriving community of 1,000+ 
              developers, establishing myself as a prominent figure in the tech ecosystem. My expertise spans cutting-edge 
              technologies including Java, Python, C++, JavaScript, React.js, Node.js, and modern cloud architectures.
            </p>

            <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
              Beyond development, I excel as a <strong>Hackathon Organizer</strong> and <strong>Event Coordinator</strong>, 
              having orchestrated multiple large-scale tech events across Delhi NCR. My leadership extends to mentoring 
              aspiring developers and fostering innovation in the technology community.
            </p>
            
            {/* Expertise Grid */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Zap size={20} className="mr-2 text-blue-500" />
                Core Expertise
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-background/30 rounded-lg p-3 border border-border/30 hover:bg-background/50 transition-all duration-300">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-foreground/80 text-sm md:text-base">{skill.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Award size={20} className="mr-2 text-purple-500" />
                Professional Certifications
              </h4>
              <div className="space-y-4">
                {achievements.map((cert, index) => (
                  <div key={index} className="bg-background/50 border border-border/50 rounded-xl p-4 md:p-6 hover:bg-background/70 transition-all duration-300">
                    <h5 className="font-semibold text-foreground text-sm md:text-base">{cert.title}</h5>
                    <p className="text-blue-500 text-xs md:text-sm font-medium">{cert.issuer}</p>
                    <p className="text-foreground/70 text-xs md:text-sm mt-2 leading-relaxed">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Journey Timeline */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Target size={18} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">Professional Journey</h3>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-4 pb-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white shadow-lg">
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="bg-background/50 border border-border/50 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-background/70 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                        <h4 className="text-base md:text-lg font-semibold text-foreground">{item.title}</h4>
                        <span className="text-xs md:text-sm text-blue-500 font-medium bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-foreground/70 text-sm md:text-base leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Mission Statement */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 md:p-8 border border-border/50">
            <div className="flex items-center justify-center mb-4">
              <Heart size={24} className="text-red-500 mr-2" />
              <h4 className="text-lg md:text-xl font-semibold text-foreground">Mission & Vision</h4>
            </div>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
              "Dedicated to crafting exceptional digital experiences that bridge the gap between innovative technology and 
              real-world solutions. I believe in the power of code to transform businesses, empower communities, and 
              create meaningful impact in the digital landscape. Every line of code I write is a step towards building 
              a more connected and efficient world."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
