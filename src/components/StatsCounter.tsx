import React, { useState, useEffect, useRef } from 'react';
import { Code, Users, Award, Briefcase, GitBranch, Trophy } from 'lucide-react';

interface Stat {
  icon: React.ElementType;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: Code,
    label: 'Projects Completed',
    value: 50,
    suffix: '+',
    color: 'text-blue-500'
  },
  {
    icon: Users,
    label: 'Developers Mentored',
    value: 1000,
    suffix: '+',
    color: 'text-green-500'
  },
  {
    icon: GitBranch,
    label: 'GitHub Repositories',
    value: 75,
    suffix: '+',
    color: 'text-purple-500'
  },
  {
    icon: Trophy,
    label: 'Hackathons Led',
    value: 4,
    suffix: '+',
    color: 'text-orange-500'
  },
  {
    icon: Briefcase,
    label: 'Years Experience',
    value: 2,
    suffix: '+',
    color: 'text-red-500'
  },
  {
    icon: Award,
    label: 'Tech Communities',
    value: 1,
    suffix: '',
    color: 'text-pink-500'
  }
];

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      const increment = stat.value / 100;
      const interval = setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.value) {
            newCounts[index] = Math.min(newCounts[index] + increment, stat.value);
          } else {
            clearInterval(interval);
          }
          return newCounts;
        });
      }, 30);
      return interval;
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
            <span className="text-sm font-medium text-white">📊 Impact & Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Numbers That Speak
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Delivering measurable impact through technology and community leadership
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105"
            >
              <div className={`inline-flex p-3 sm:p-4 bg-white/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon size={32} className="text-white" />
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  {stat.prefix}{Math.floor(counts[index])}{stat.suffix}
                </div>
                <p className="text-sm sm:text-base text-white/80 font-medium leading-tight">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-lg sm:text-xl text-white/90 mb-6">
            Ready to be part of these growing numbers?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;