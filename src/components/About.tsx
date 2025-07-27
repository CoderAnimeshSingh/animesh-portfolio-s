
import React from 'react';
import { Award, Users, Calendar, Target, Code, Lightbulb } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Award, label: 'CGPA', value: '8.5/10', color: 'text-blue-500' },
    { icon: Users, label: 'Developers Mentored', value: '1,000+', color: 'text-green-500' },
    { icon: Calendar, label: 'Hackathons Led', value: '4+', color: 'text-purple-500' },
    { icon: Code, label: 'Technologies', value: '15+', color: 'text-orange-500' }
  ];

  const highlights = [
    {
      icon: Target,
      title: 'Mission-Driven Development',
      description: 'Transforming complex ideas into impactful, production-grade applications with modern engineering principles.'
    },
    {
      icon: Users,
      title: 'Community Leadership',
      description: 'Founded TechVerse Nexus, building a thriving developer community of 1,000+ members focused on innovation and collaboration.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Mentorship',
      description: 'Leading hackathons across Delhi NCR and mentoring aspiring developers to shape India\'s digital talent ecosystem.'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">👨‍💻 About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            About Me
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Expert Full-Stack Developer | Technology Leader | Community Architect
          </p>
        </div>

        {/* Main Content Grid - Responsive Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* Left Column - Story */}
          <div className="space-y-6 lg:space-y-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6">
                Full-Stack Developer with expertise in building scalable, high-performance applications. Specializing in transforming complex ideas into production-grade solutions.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6">
                BCA student at Delhi Skill and Entrepreneurship University with 8.5/10 CGPA, combining academic excellence with practical expertise.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed">
                Founder of TechVerse Nexus with 1,000+ developer community. Expert in Java, Python, JavaScript, React, Node.js, MongoDB. Leading hackathons across Delhi NCR and mentoring aspiring developers.
              </p>
            </div>
          </div>

          {/* Right Column - Achievements Grid */}
          <div className="space-y-6 lg:space-y-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground text-center lg:text-left">🔍 At a Glance</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group bg-background/80 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 card-hover"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className={`p-2 sm:p-3 rounded-xl ${achievement.color} bg-opacity-10`}>
                      <achievement.icon size={20} className={achievement.color} />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-foreground/70 font-medium">{achievement.label}</p>
                      <p className={`text-lg sm:text-xl lg:text-2xl font-bold ${achievement.color}`}>
                        {achievement.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Competencies - Mobile Responsive Cards */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-center mb-8 sm:mb-12">
            🛠️ Technical & Strategic Core Competencies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-background/80 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 card-hover"
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon size={24} />
                  </div>
                  <h4 className="font-bold text-foreground text-lg sm:text-xl mb-3 sm:mb-4">{highlight.title}</h4>
                  <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Timeline - Mobile Responsive */}
        <div className="bg-background/50 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-center mb-8 sm:mb-12">
            🗺️ Professional Timeline
          </h3>
          
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {/* Timeline Items - Mobile Stack */}
            <div className="space-y-8 relative">
              {/* Timeline Line */}
              <div className="absolute left-4 sm:left-20 lg:left-24 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden sm:block"></div>
              
              <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 group hover:bg-background/60 p-4 rounded-xl transition-all duration-300">
                <div className="flex-shrink-0 w-full sm:w-32 lg:w-40 relative">
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    🔥 Present
                  </span>
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg hidden sm:block animate-ping"></div>
                </div>
                <div className="flex-1 sm:ml-8">
                  <h4 className="text-xl font-bold text-foreground mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BCA Student at DSEU</h4>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Achieving academic excellence (8.5 CGPA) with real-world computing applications.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 group hover:bg-background/60 p-4 rounded-xl transition-all duration-300">
                <div className="flex-shrink-0 w-full sm:w-32 lg:w-40 relative">
                  <span className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    🚀 Present
                  </span>
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full shadow-lg hidden sm:block animate-ping"></div>
                </div>
                <div className="flex-1 sm:ml-8">
                  <h4 className="text-xl font-bold text-foreground mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Founder, TechVerse Nexus</h4>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Leading 1K+ developer community focused on mentorship and innovation.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 group hover:bg-background/60 p-4 rounded-xl transition-all duration-300">
                <div className="flex-shrink-0 w-full sm:w-32 lg:w-40 relative">
                  <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    🎯 Present
                  </span>
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-lg hidden sm:block animate-ping"></div>
                </div>
                <div className="flex-1 sm:ml-8">
                  <h4 className="text-xl font-bold text-foreground mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Tech Events & Hackathon Leadership</h4>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Organizing 4+ major hackathons and tech events across Delhi NCR, fostering innovation ecosystem.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 group hover:bg-background/60 p-4 rounded-xl transition-all duration-300">
                <div className="flex-shrink-0 w-full sm:w-32 lg:w-40 relative">
                  <span className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    ⚡ Present
                  </span>
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-lg hidden sm:block animate-ping"></div>
                </div>
                <div className="flex-1 sm:ml-8">
                  <h4 className="text-xl font-bold text-foreground mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Industry Partnerships</h4>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Collaborating with government and corporate entities on large-scale tech initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
