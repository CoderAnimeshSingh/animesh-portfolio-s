
import React from 'react';
import { Code, Briefcase, GraduationCap, Heart, Users, Trophy, Award, Zap, Target, Cloud } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2023 – Present',
      title: 'BCA Student at DSEU',
      description: 'Consistently achieving academic distinction with a focus on real-world application of computing concepts at Delhi Skill and Entrepreneurship University.',
      icon: <GraduationCap size={20} />
    },
    {
      year: '2023 – Present',
      title: 'Founder, TechVerse Nexus',
      description: 'Established a dynamic tech community of 1K+ developers; leading initiatives on mentorship, skill development, and collaborative innovation.',
      icon: <Users size={20} />
    },
    {
      year: '2023 – 2024',
      title: 'Hackathon & Tech Event Organizer',
      description: 'Spearheaded and executed 4+ major hackathons and tech summits across Delhi NCR; ensured exceptional participant engagement, sponsorship alignment, and post-event impact.',
      icon: <Trophy size={20} />
    },
    {
      year: '2024 – Present',
      title: 'Industry Collaboration & Strategic Partnerships',
      description: 'Working closely with government and corporate entities to lead large-scale tech initiatives, foster innovation ecosystems, and expand outreach in India\'s digital talent landscape.',
      icon: <Briefcase size={20} />
    }
  ];

  const achievements = [
    {
      title: 'Google Cloud Arcade Facilitator Program',
      issuer: 'Google Cloud (Apr 2025 – Jun 2025)',
      description: 'Selected for the prestigious Google Cloud Arcade Facilitator Program, gained 600+ free credits, completed hands-on labs in Cloud Computing, AI/ML, Big Data, and App Development. Mentored peers and contributed to global cloud community.'
    },
    {
      title: 'Java Programming Excellence',
      issuer: 'NPTEL (Premium Certification)',
      description: 'Mastery in object-oriented design, enterprise-level development, and core Java principles with advanced programming techniques.'
    },
    {
      title: 'Full-Stack Development',
      issuer: 'Apna College (Industry Endorsed)',
      description: 'Proficient in DSA with Java, React.js, Node.js, Express, MongoDB, and scalable app architecture with modern development practices.'
    }
  ];

  const expertise = [
    { icon: '🏗️', text: 'Full-Stack Architecture' },
    { icon: '⚡', text: 'Performance Optimization' },
    { icon: '🔧', text: 'System Design' },
    { icon: '👥', text: 'Team & Technical Leadership' },
    { icon: '☁️', text: 'Cloud Integration' },
    { icon: '🎨', text: 'Front-End Engineering' }
  ];

  const stats = [
    { number: '8.5', label: 'Academic CGPA', suffix: '/10' },
    { number: '1K+', label: 'Developers Mentored', suffix: '' },
    { number: '4+', label: 'Hackathons Led', suffix: '' },
    { number: '15+', label: 'Technologies Mastered', suffix: '' }
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
            I am a driven and visionary Full-Stack Developer with a proven track record of building scalable, high-performance digital solutions. With a strong foundation in both software engineering and community leadership, I specialize in transforming complex ideas into impactful, production-grade applications.
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
              Currently pursuing a <strong>Bachelor of Computer Applications at Delhi Skill and Entrepreneurship University</strong>, 
              I maintain an exceptional CGPA of <strong>8.5/10</strong>, showcasing consistent academic excellence coupled with deep practical expertise.
            </p>
            
            <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
              As the <strong>Founder of TechVerse Nexus</strong>, I've built a thriving developer community of over <strong>1,000 members</strong>, 
              cultivating innovation, mentorship, and collaboration at scale. My work bridges cutting-edge technologies like Java, Python, C++, 
              JavaScript, React, Node.js, MongoDB, and cloud-native architectures, with a commitment to modern engineering principles and enterprise-grade standards.
            </p>

            <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
              Beyond development, I have led and organized multiple <strong>high-profile hackathons and tech summits across Delhi NCR</strong>, 
              partnering with academic institutions and government stakeholders. I am deeply invested in mentoring aspiring developers, 
              fostering technical growth, and shaping the future of India's digital talent ecosystem.
            </p>
            
            {/* At a Glance Section */}
            <div className="mt-8 bg-background/30 rounded-xl p-4 md:p-6 border border-border/30">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Zap size={20} className="mr-2 text-blue-500" />
                🔍 At a Glance
              </h4>
              <div className="space-y-2 text-sm md:text-base">
                <p className="text-foreground/80">🎓 <strong>Academic Excellence:</strong> 8.5/10 CGPA (BCA, DSEU)</p>
                <p className="text-foreground/80">👨‍🏫 <strong>Developers Mentored:</strong> 1,000+</p>
                <p className="text-foreground/80">🏁 <strong>Hackathons Led:</strong> 4+ Major Events</p>
                <p className="text-foreground/80">💡 <strong>Technologies Mastered:</strong> 15+ Core Tools & Languages</p>
              </div>
            </div>
            
            {/* Core Competencies */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Target size={20} className="mr-2 text-purple-500" />
                🛠️ Technical & Strategic Core Competencies
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
                🎖️ Certifications & Recognitions
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
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">🗺️ Professional Timeline</h3>
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
