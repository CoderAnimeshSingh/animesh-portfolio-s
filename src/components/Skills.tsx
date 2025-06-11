
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
        { name: 'Git', level: 90, icon: '📝' },
        { name: 'GitHub', level: 88, icon: '🐙' },
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
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            My technical expertise spans multiple programming languages and modern development technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-background border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-foreground font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-xs text-foreground/70">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Learning */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Certifications & Learning</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-secondary/50 rounded-lg p-6 hover:bg-secondary/70 transition-colors duration-300">
              <h4 className="font-semibold text-foreground text-lg">Java Programming</h4>
              <p className="text-foreground/70">NPTEL</p>
              <p className="text-blue-500 text-sm mt-2">Advanced certification in Java programming and OOP concepts</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-6 hover:bg-secondary/70 transition-colors duration-300">
              <h4 className="font-semibold text-foreground text-lg">Full Stack Web Development & DSA</h4>
              <p className="text-foreground/70">Apna College</p>
              <p className="text-blue-500 text-sm mt-2">Complete web development with Java Data Structures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
