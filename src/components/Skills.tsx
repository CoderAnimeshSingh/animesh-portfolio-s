
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'Next.js', level: 90, icon: '🔺' },
        { name: 'TypeScript', level: 85, icon: '📘' },
        { name: 'Tailwind CSS', level: 95, icon: '🎨' },
        { name: 'JavaScript', level: 90, icon: '📜' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 80, icon: '⚡' },
        { name: 'MongoDB', level: 75, icon: '🍃' },
        { name: 'PostgreSQL', level: 70, icon: '🐘' },
        { name: 'GraphQL', level: 65, icon: '📊' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, icon: '📝' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'Figma', level: 85, icon: '🎯' },
        { name: 'VS Code', level: 95, icon: '💻' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Here's my technical arsenal. I'm always learning and staying up-to-date with the latest technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-background border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-foreground font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-foreground/70">{skill.level}%</span>
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
          <h3 className="text-2xl font-semibold text-foreground mb-8">Continuous Learning</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'React Developer', issuer: 'Meta', year: '2023' },
              { title: 'JavaScript Algorithms', issuer: 'freeCodeCamp', year: '2022' },
              { title: 'Node.js Developer', issuer: 'IBM', year: '2023' },
              { title: 'AWS Practitioner', issuer: 'Amazon', year: '2023' }
            ].map((cert, index) => (
              <div key={index} className="bg-secondary/50 rounded-lg p-4 hover:bg-secondary/70 transition-colors duration-300">
                <h4 className="font-semibold text-foreground">{cert.title}</h4>
                <p className="text-foreground/70 text-sm">{cert.issuer}</p>
                <p className="text-blue-500 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
