
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500',
      tags: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      category: 'Frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500',
      tags: ['React', 'API Integration', 'Charts.js', 'CSS'],
      category: 'Frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Restaurant POS System',
      description: 'A complete point-of-sale system for restaurants with order management, inventory tracking, and sales analytics.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
      category: 'Full Stack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 5,
      title: 'Blog CMS',
      description: 'A content management system for bloggers with markdown support, SEO optimization, and social media integration.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500',
      tags: ['Next.js', 'MDX', 'Sanity CMS', 'Vercel'],
      category: 'Full Stack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'Crypto Tracker',
      description: 'Real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis.',
      image: 'https://images.unsplash.com/photo-1518544843211-c6b169ba4bb2?w=500',
      tags: ['React', 'Redux', 'Chart.js', 'CoinGecko API'],
      category: 'Frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-background border border-border rounded-lg p-1 flex space-x-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-foreground/70 hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-foreground/70 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Visit My GitHub</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
