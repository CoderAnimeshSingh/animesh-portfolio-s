
import React, { useState } from 'react';
import { Github } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      id: 2,
      title: 'Personal Portfolio Website',
      description: 'A responsive personal portfolio website to showcase projects and skills. Built with React.js and Tailwind CSS with modern design principles.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500',
      tags: ['React.js', 'Tailwind CSS', 'TypeScript', 'Responsive'],
      category: 'Web Development',
      githubUrl: 'https://github.com/CoderAnimeshSingh/portfolio-website',
      liveUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'AI ChatBot',
      description: 'An intelligent chatbot application built with Next.js featuring real-time conversations, AI-powered responses, and modern user interface design.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500',
      tags: ['Next.js', 'AI', 'React.js', 'TypeScript'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/CoderAnimeshSingh/nextjs-ai-chatbot',
      liveUrl: 'https://coderanimeshsingh.github.io/nextjs-ai-chatbot/',
      featured: false
    },
    {
      id: 5,
      title: 'E-Commerce Website',
      description: 'Full-stack e-commerce platform built with Next.js featuring product catalog, shopping cart, user authentication, and modern responsive design.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500',
      tags: ['Next.js', 'React.js', 'E-commerce', 'Responsive'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/CoderAnimeshSingh/nextjs-commerce',
      liveUrl: 'https://coderanimeshsingh.github.io/nextjs-commerce/',
      featured: false
    },
    {
      id: 6,
      title: 'Vite React Application',
      description: 'A modern React application built with Vite for fast development and optimized performance. Features modern UI components and responsive design.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500',
      tags: ['Vite', 'React.js', 'JavaScript', 'Modern UI'],
      category: 'Frontend',
      githubUrl: 'https://github.com/CoderAnimeshSingh/vite-react-app',
      liveUrl: 'https://vite-react-6cbg1bzyz-animesh-singhs-projects-7d06dd11.vercel.app/',
      featured: false
    },
    {
      id: 7,
      title: 'To-Do List Application',
      description: 'A feature-rich task management application with add, edit, delete, and mark complete functionality. Built with vanilla JavaScript and modern CSS.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500',
      tags: ['JavaScript', 'HTML/CSS', 'Local Storage', 'DOM'],
      category: 'Frontend',
      githubUrl: 'https://github.com/CoderAnimeshSingh/To-do-List-Application',
      liveUrl: 'https://coderanimeshsingh.github.io/To-do-List-Application/',
      featured: false
    },
    {
      id: 8,
      title: 'Calculator Application',
      description: 'A fully functional calculator app with basic arithmetic operations, memory functions, and responsive design. Built with JavaScript and CSS.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500',
      tags: ['JavaScript', 'HTML/CSS', 'Calculator', 'Responsive'],
      category: 'Frontend',
      githubUrl: 'https://github.com/CoderAnimeshSingh/Calculator-App',
      liveUrl: 'https://coderanimeshsingh.github.io/Calculator-App/',
      featured: false
    },
    {
      id: 9,
      title: 'CoderAnimeshSingh Profile',
      description: 'Personal GitHub profile showcase website featuring bio, skills, and project highlights. Clean and professional design with responsive layout.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500',
      tags: ['HTML/CSS', 'JavaScript', 'GitHub Pages', 'Profile'],
      category: 'Web Development',
      githubUrl: 'https://github.com/CoderAnimeshSingh/CoderAnimeshSingh',
      liveUrl: 'https://coderanimeshsingh.github.io/CoderAnimeshSingh/',
      featured: false
    }
  ];

  const categories = ['All', 'Academic', 'Web Development', 'Frontend', 'Full Stack'];
  
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
            Here are some of my projects showcasing my technical skills in full-stack development, modern web technologies, and creative problem-solving.
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

        {/* GitHub Profile Section */}
        <div className="mt-16 bg-background border border-border rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Explore More on GitHub</h3>
          <p className="text-foreground/70 mb-6">
            Check out my complete collection of projects, contributions, and code repositories on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/CoderAnimeshSingh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <Github size={20} />
              <span>Visit My GitHub Profile</span>
              <span>→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/animeshsingh9693/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <span>Connect on LinkedIn</span>
              <span>→</span>
            </a>
          </div>
          
          {/* GitHub Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary/50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-foreground">Public Repositories</h4>
              <p className="text-2xl font-bold text-blue-500">20+</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-foreground">Languages Used</h4>
              <p className="text-2xl font-bold text-purple-500">10+</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-foreground">Live Projects</h4>
              <p className="text-2xl font-bold text-green-500">9+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
