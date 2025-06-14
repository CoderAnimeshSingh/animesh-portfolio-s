
import React from 'react';
import { Code, Briefcase, GraduationCap, Trophy, Award, Target, Cloud } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '8.5', label: 'Academic CGPA', suffix: '/10' },
    { number: '1K+', label: 'Developers Mentored', suffix: '' },
    { number: '4+', label: 'Hackathons Led', suffix: '' },
    { number: '15+', label: 'Technologies Mastered', suffix: '' }
  ];

  const expertise = [
    { icon: '🏗️', text: 'Full-Stack Architecture' },
    { icon: '⚡', text: 'Performance Optimization' },
    { icon: '🔧', text: 'System Design' },
    { icon: '👥', text: 'Team Leadership' },
    { icon: '☁️', text: 'Cloud Integration' },
    { icon: '🎨', text: 'Front-End Engineering' }
  ];

  const certifications = [
    {
      title: 'Google Cloud Arcade Facilitator Program',
      issuer: 'Google Cloud Platform (Apr 2025 - Jun 2025)',
      description: 'Selected for prestigious program with 600+ free credits. Completed hands-on labs in Cloud Computing, AI/ML, and Big Data. Mentored peers globally.'
    },
    {
      title: 'Java Programming Excellence',
      issuer: 'NPTEL (Premium Certification)',
      description: 'Mastery in object-oriented design and enterprise-level Java development with advanced programming techniques.'
    },
    {
      title: 'Full-Stack Development & DSA',
      issuer: 'Apna College (Industry Endorsed)',
      description: 'Comprehensive training in React.js, Node.js, Express, MongoDB, and scalable application architecture.'
    }
  ];

  const timeline = [
    {
      year: '2023 – Present',
      title: 'BCA Student at DSEU',
      description: 'Maintaining 8.5/10 CGPA with focus on practical computing applications.',
      icon: <GraduationCap size={18} />
    },
    {
      year: '2023 – Present',
      title: 'Founder, TechVerse Nexus',
      description: 'Built thriving tech community of 1K+ developers, leading mentorship and innovation initiatives.',
      icon: <Trophy size={18} />
    },
    {
      year: '2023 – 2024',
      title: 'Hackathon Organizer',
      description: 'Led 4+ major tech events across Delhi NCR with exceptional participant engagement.',
      icon: <Code size={18} />
    },
    {
      year: '2024 – Present',
      title: 'Industry Partnerships',
      description: 'Collaborating with government and corporate entities on large-scale tech initiatives.',
      icon: <Briefcase size={18} />
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            Expert Full-Stack Developer | Technology Leader | Community Architect
          </h3>
          <p className="text-lg md:text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            Driven Full-Stack Developer with proven expertise in building scalable, high-performance digital solutions. 
            I specialize in transforming complex ideas into production-grade applications while leading tech communities and mentoring developers.
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
          {/* Professional Overview */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code size={18} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">Professional Excellence</h3>
            </div>
            
            <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
              Currently pursuing <strong>Bachelor of Computer Applications at Delhi Skill and Entrepreneurship University</strong> 
              with an exceptional <strong>8.5/10 CGPA</strong>, demonstrating consistent academic excellence.
            </p>
            
            <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
              As <strong>Founder of TechVerse Nexus</strong>, I've cultivated a dynamic community of <strong>1,000+ developers</strong>, 
              fostering innovation and technical growth. My expertise spans Java, Python, JavaScript, React, Node.js, MongoDB, 
              and cloud-native architectures.
            </p>

            <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
              Led <strong>4+ major hackathons across Delhi NCR</strong>, partnering with academic and government stakeholders 
              to drive India's digital transformation and mentor the next generation of developers.
            </p>
            
            {/* Core Competencies */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Target size={20} className="mr-2 text-purple-500" />
                🛠️ Core Competencies
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
                🎖️ Certifications
              </h4>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-background/50 border border-border/50 rounded-xl p-4 md:p-6 hover:bg-background/70 transition-all duration-300">
                    <h5 className="font-semibold text-foreground text-sm md:text-base">{cert.title}</h5>
                    <p className="text-blue-500 text-xs md:text-sm font-medium">{cert.issuer}</p>
                    <p className="text-foreground/70 text-xs md:text-sm mt-2 leading-relaxed">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Timeline */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Target size={18} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">🗺️ Professional Journey</h3>
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

        {/* Mission Statement */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 md:p-8 border border-border/50">
            <h4 className="text-lg md:text-xl font-semibold text-foreground mb-4">🎯 Mission</h4>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
              "Dedicated to crafting exceptional digital experiences that bridge innovative technology with real-world solutions. 
              I believe in the transformative power of code to empower businesses, strengthen communities, and create meaningful impact in our digital future."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
