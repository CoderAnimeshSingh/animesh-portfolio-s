
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90, icon: '☕' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'C++', level: 80, icon: '⚡' },
        { name: 'JavaScript', level: 88, icon: '📜' }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'React.js', level: 85, icon: '⚛️' },
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'Express.js', level: 78, icon: '⚡' }
      ]
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'MySQL', level: 85, icon: '🗃️' },
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'Git/GitHub', level: 90, icon: '📝' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Postman', level: 85, icon: '📮' }
      ]
    },
    {
      title: 'Core Concepts',
      skills: [
        { name: 'Data Structures', level: 85, icon: '🔗' },
        { name: 'Algorithms', level: 82, icon: '⚙️' },
        { name: 'OOP', level: 90, icon: '🏗️' },
        { name: 'REST APIs', level: 80, icon: '🔌' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-gray-900/50 dark:via-blue-900/10 dark:to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">💡 Technical Expertise</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 text-shadow">
            Technical Skills
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            My technical expertise spans multiple programming languages and modern development technologies, 
            enabling me to build robust, scalable, and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="group bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 card-hover"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-500 transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl group-hover/skill:scale-110 transition-transform duration-300">{skill.icon}</span>
                        <span className="text-foreground font-medium text-sm group-hover/skill:text-blue-500 transition-colors duration-300">{skill.name}</span>
                      </div>
                      <span className="text-xs text-foreground/70 font-semibold bg-secondary/50 px-2 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-secondary/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out group-hover/skill:animate-pulse relative"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Certifications & Learning */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">🏆 Certifications & Achievements</h3>
          <p className="text-lg text-foreground/70 mb-12">Professional certifications and continuous learning milestones</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 card-hover">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                ☕
              </div>
              <h4 className="font-bold text-foreground text-xl mb-2">Java Programming</h4>
              <p className="text-foreground/70 font-medium mb-3">NPTEL</p>
              <p className="text-blue-600 dark:text-blue-400 text-sm leading-relaxed">
                Advanced certification in Java programming and Object-Oriented Programming concepts
              </p>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-700/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 card-hover">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                🚀
              </div>
              <h4 className="font-bold text-foreground text-xl mb-2">Full Stack Web Development</h4>
              <p className="text-foreground/70 font-medium mb-3">Apna College</p>
              <p className="text-purple-600 dark:text-purple-400 text-sm leading-relaxed">
                Complete web development with Java Data Structures and modern frameworks
              </p>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 card-hover">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                ☁️
              </div>
              <h4 className="font-bold text-foreground text-xl mb-2">Google Cloud Facilitator</h4>
              <p className="text-foreground/70 font-medium mb-3">Google Cloud · 2025</p>
              <p className="text-green-600 dark:text-green-400 text-sm leading-relaxed">
                Enabling hands-on, project-based learning with Google Cloud technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
