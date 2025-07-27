import React from 'react';

interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud' | 'Tools' | 'Learning';
  icon: string;
  proficiency: number;
  color: string;
}

const technologies: TechItem[] = [
  // Frontend
  { name: 'React', category: 'Frontend', icon: '⚛️', proficiency: 95, color: 'bg-blue-500' },
  { name: 'TypeScript', category: 'Frontend', icon: '📘', proficiency: 90, color: 'bg-blue-600' },
  { name: 'Next.js', category: 'Frontend', icon: '▲', proficiency: 85, color: 'bg-gray-800' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: '🎨', proficiency: 95, color: 'bg-cyan-500' },
  { name: 'JavaScript', category: 'Frontend', icon: '🟨', proficiency: 95, color: 'bg-yellow-500' },
  
  // Backend
  { name: 'Node.js', category: 'Backend', icon: '💚', proficiency: 90, color: 'bg-green-600' },
  { name: 'Express.js', category: 'Backend', icon: '🚂', proficiency: 88, color: 'bg-gray-700' },
  { name: 'Java', category: 'Backend', icon: '☕', proficiency: 85, color: 'bg-orange-600' },
  { name: 'Python', category: 'Backend', icon: '🐍', proficiency: 80, color: 'bg-green-500' },
  
  // Database
  { name: 'MongoDB', category: 'Database', icon: '🍃', proficiency: 90, color: 'bg-green-500' },
  { name: 'PostgreSQL', category: 'Database', icon: '🐘', proficiency: 75, color: 'bg-blue-700' },
  { name: 'MySQL', category: 'Database', icon: '🗄️', proficiency: 80, color: 'bg-orange-500' },
  
  // Cloud & Tools
  { name: 'AWS', category: 'Cloud', icon: '☁️', proficiency: 75, color: 'bg-orange-400' },
  { name: 'Docker', category: 'Tools', icon: '🐳', proficiency: 70, color: 'bg-blue-500' },
  { name: 'Git', category: 'Tools', icon: '📚', proficiency: 95, color: 'bg-red-500' },
  
  // Learning
  { name: 'Web3', category: 'Learning', icon: '⛓️', proficiency: 60, color: 'bg-purple-600' },
  { name: 'Blockchain', category: 'Learning', icon: '🔗', proficiency: 55, color: 'bg-indigo-600' }
];

const TechStack = () => {
  const categories = ['Frontend', 'Backend', 'Database', 'Cloud', 'Tools', 'Learning'] as const;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-full mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400">⚡ Tech Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            Technology Stack
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across modern web technologies and emerging paradigms
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((category) => {
            const categoryTechs = technologies.filter(tech => tech.category === category);
            
            return (
              <div key={category} className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {category}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
                </div>

                <div className="space-y-4">
                  {categoryTechs.map((tech, index) => (
                    <div
                      key={index}
                      className="group bg-background/80 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{tech.icon}</span>
                          <h4 className="font-semibold text-foreground text-base sm:text-lg">
                            {tech.name}
                          </h4>
                        </div>
                        <span className="text-sm font-medium text-foreground/70">
                          {tech.proficiency}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${tech.color} rounded-full transition-all duration-1000 ease-out transform group-hover:scale-x-105`}
                          style={{ width: `${tech.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Highlight */}
        <div className="mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-center text-white">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Full-Stack Excellence
            </h3>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              From pixel-perfect frontends to scalable backends, I deliver complete solutions using cutting-edge technologies and industry best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {['MERN Stack', 'TypeScript', 'Cloud Deploy', 'DevOps', 'Web3 Ready'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;