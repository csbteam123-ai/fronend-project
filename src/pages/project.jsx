import React, { useState } from 'react';
import { 
  Github, ExternalLink, ChevronRight, 
  Code, Layout, Zap, Cpu, Database,
  Smartphone, Globe, Palette, Server,
  ArrowRight, Menu, X, Filter
} from 'lucide-react';
import Navbar from '../components/section1/Navbar';

const Project = () => {
  const [filter, setFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Project data
  const projects = [
    {
      id: 1,
      title: "Quantum Dashboard",
      description: "A futuristic analytics dashboard with real-time data visualization and AI-powered insights.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      category: "web",
      github: "https://github.com",
      live: "https://example.com",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Nexus E-Commerce",
      description: "Full-stack e-commerce platform with AR product preview and blockchain payment integration.",
      technologies: ["Next.js", "Stripe", "Three.js", "Solidity"],
      category: "web",
      github: "https://github.com",
      live: "https://example.com",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Aurora Mobile App",
      description: "Cross-platform mobile application for personal finance tracking with machine learning predictions.",
      technologies: ["React Native", "Firebase", "TensorFlow.js", "Redux"],
      category: "mobile",
      github: "https://github.com",
      live: "https://example.com",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Neural Art Generator",
      description: "AI-powered art creation tool that transforms sketches into professional digital artwork.",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      category: "ai",
      github: "https://github.com",
      live: "https://example.com",
      icon: <Palette className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Orion API Framework",
      description: "High-performance REST API framework with built-in authentication, rate limiting, and analytics.",
      technologies: ["Express.js", "Redis", "PostgreSQL", "Docker"],
      category: "backend",
      github: "https://github.com",
      live: "https://example.com",
      icon: <Server className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Cyberspace Portfolio",
      description: "Interactive 3D portfolio website with particle effects and animated transitions.",
      technologies: ["Three.js", "React", "GSAP", "Tailwind CSS"],
      category: "web",
      github: "https://github.com",
      live: "https://example.com",
      icon: <Layout className="w-6 h-6" />
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
    console.log(filteredProjects )

  // Category data for filters
  const categories = [
    { id: 'all', label: 'All Projects', icon: <Zap className="w-4 h-4" />, count: projects.length },
    { id: 'web', label: 'Web Apps', icon: <Globe className="w-4 h-4" />, count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone className="w-4 h-4" />, count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ai', label: 'AI/ML', icon: <Cpu className="w-4 h-4" />, count: projects.filter(p => p.category === 'ai').length },
    { id: 'backend', label: 'Backend', icon: <Server className="w-4 h-4" />, count: projects.filter(p => p.category === 'backend').length }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <Navbar className=" text-white " buttonbg="bg-white text-black"/>
      
      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Project <span className="text-gray-300">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              A curated collection of my work showcasing innovative solutions across web, mobile, AI, and backend development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-sm">React.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-sm">Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-sm">Node.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-sm">AI/ML</span>
              </div>
            </div>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg border transition-all ${filter === cat.id 
                  ? 'bg-white text-black border-white' 
                  : 'border-gray-800 hover:border-gray-600 hover:bg-gray-900'}`}
              >
                {cat.icon}
                <span>{cat.label}</span>
                <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="group border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/50"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 border border-gray-800 rounded-lg group-hover:border-gray-600">
                      {project.icon}
                    </div>
                    <div className="flex space-x-2">
                      <a 
                        href={project.github} 
                        className="p-2 border border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-900"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.live} 
                        className="p-2 border border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-900"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-gray-900 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-gray-300 group-hover:text-white">
                    <span className="text-sm mr-2">View details</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                {/* Hover effect line */}
                <div className="h-1 bg-gradient-to-r from-white to-gray-700 w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="max-w-4xl mx-auto border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build the Future?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                <span>Contact Me</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-6 py-3 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-white to-gray-300 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-black" />
              </div>
              <span className="text-lg font-bold">DEV<span className="text-gray-400">PORTFOLIO</span></span>
            </div>
            
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} All rights reserved.
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Code className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Project;