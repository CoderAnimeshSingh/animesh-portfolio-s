
import React from 'react';
import { Code, Briefcase, GraduationCap, Heart, Users, Trophy } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2023',
      title: 'Started BCA at DSEU',
      description: 'Began Bachelor of Computer Applications at Delhi Skill and Entrepreneurship University with 8.5/10 CGPA',
      icon: <GraduationCap size={20} />
    },
    {
      year: '2023',
      title: 'Founded TechVerse Nexus',
      description: 'Established a tech community, mentoring 1K+ students and fostering collaborative learning',
      icon: <Users size={20} />
    },
    {
      year: '2023-2024',
      title: 'Hackathon Organizer',
      description: 'Led and managed 4+ tech hackathons across Delhi NCR with strategic planning and execution',
      icon: <Trophy size={20} />
    },
    {
      year: '2024',
      title: 'Event Coordinator',
      description: 'Contributing to high-profile government and corporate tech events, expanding professional network',
      icon: <Briefcase size={20} />
    }
  ];

  const achievements = [
    {
      title: 'Java Programming Certification',
      issuer: 'NPTEL',
      description: 'Advanced certification in Java programming and object-oriented principles'
    },
    {
      title: 'Full Stack Development',
      issuer: 'Apna College',
      description: 'Comprehensive training in DSA with Java and full-stack web development'
    }
  ];

  const interests = [
    '💻 Full Stack Development',
    '🎯 Problem Solving',
    '👥 Community Building',
    '🚀 Tech Innovation',
    '📱 Mobile Development',
    '🌐 Open Source'
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A passionate developer and community leader, turning ideas into reality through code and collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">My Story</h3>
            <p className="text-foreground/80 leading-relaxed">
              Currently pursuing Bachelor of Computer Applications at Delhi Skill and Entrepreneurship University 
              with an impressive 8.5/10 CGPA. My journey in technology combines academic excellence with practical 
              experience in full-stack development.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              As the founder of TechVerse Nexus, I've mentored over 1,000 students and organized multiple hackathons 
              across Delhi NCR. My technical expertise spans Java, Python, C++, JavaScript, and modern web technologies 
              including React.js, Node.js, and Express.
            </p>
            
            {/* Certifications */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Certifications</h4>
              <div className="space-y-3">
                {achievements.map((cert, index) => (
                  <div key={index} className="bg-background border border-border rounded-lg p-4">
                    <h5 className="font-semibold text-foreground">{cert.title}</h5>
                    <p className="text-blue-500 text-sm">{cert.issuer}</p>
                    <p className="text-foreground/70 text-sm mt-1">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Interests */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">What drives me...</h4>
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
            { number: '8.5', label: 'Current CGPA' },
            { number: '1K+', label: 'Students Mentored' },
            { number: '4+', label: 'Hackathons Organized' },
            { number: '3+', label: 'Academic Projects' }
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
