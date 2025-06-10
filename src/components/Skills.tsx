
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React.js', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Language' },
    { name: 'Next.js', level: 88, category: 'Framework' },
    { name: 'Node.js', level: 82, category: 'Backend' },
    { name: 'Python', level: 78, category: 'Language' },
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'PostgreSQL', level: 75, category: 'Database' },
    { name: 'Tailwind CSS', level: 92, category: 'Styling' },
    { name: 'Git', level: 88, category: 'Tools' },
    { name: 'Docker', level: 70, category: 'DevOps' },
    { name: 'AWS', level: 72, category: 'Cloud' },
    { name: 'GraphQL', level: 76, category: 'API' },
  ];

  const categories = ['Frontend', 'Backend', 'Language', 'Database', 'Tools', 'Cloud'];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
