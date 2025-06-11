
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'Student Management System',
      description: 'A console-based CRUD application for managing student records with file handling and object-oriented design principles. Developed using Java with efficient data management.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500',
      tags: ['Java', 'File I/O', 'OOP', 'CRUD'],
      category: 'Academic',
      githubUrl: 'https://github.com',
      liveUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      description: 'A responsive personal portfolio website to showcase projects and skills. Designed with mobile-first approach and cross-browser compatibility.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
      category: 'Web Development',
      githubUrl: 'https://github.com',
      liveUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather App using OpenWeather API',
      description: 'A frontend weather application that integrates external REST API to fetch real-time weather data based on location with focus on UI/UX design.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500',
      tags: ['JavaScript', 'HTML/CSS', 'API', 'Fetch API'],
      category: 'Frontend',
      githubUrl: 'https://github.com',
      liveUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'TechVerse Nexus Community Platform',
      description: 'Founded and developed a tech community platform for mentoring 1K+ students, organizing hackathons, and fostering collaborative learning environment.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500',
      tags: ['Community', 'Leadership', 'Mentorship', 'Events'],
      category: 'Leadership',
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Data Structures & Algorithms Practice',
      description: 'Comprehensive collection of DSA problems solved in Java, focusing on optimization and efficient algorithmic approaches.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500',
      tags: ['Java', 'DSA', 'Algorithms', 'Problem Solving'],
      category: 'Academic',
      githubUrl: 'https://github.com',
      liveUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Hackathon Organization & Management',
      description: 'Led and managed 4+ tech hackathons across Delhi NCR with strategic planning, execution, and successful outcomes for participants.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500',
      tags: ['Event Management', 'Leadership', 'Strategy', 'Community'],
      category: 'Leadership',
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    }
  ];

  const categories = ['All', 'Academic', 'Web Development', 'Frontend', 'Leadership'];
  
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
            Here are some of my academic projects and community initiatives that showcase my technical skills and leadership abilities.
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
          <div className="bg-background border border-border rounded-lg p-1 flex flex-wrap gap-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md transition-all duration-300 text-sm ${
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
            Want to see more of my work and contributions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Visit My GitHub</span>
              <span>→</span>
            </a>
            <a
              href="https://linkedin.com/in/animeshsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <span>Connect on LinkedIn</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
