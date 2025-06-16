
import React from 'react';
import { ExternalLink, Github, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      title: "ViddyStream",
      description: "A comprehensive video streaming platform with user authentication, video upload, and real-time streaming capabilities. Built with modern web technologies for seamless user experience.",
      techStack: ["React", "Node.js", "Firebase", "MongoDB"],
      category: "Full Stack",
      year: "2024",
      githubUrl: "https://github.com/yourusername/viddystream", // Replace with your actual GitHub URLs
      demoUrl: "https://viddystream-demo.netlify.app" // Replace with your actual demo URLs
    },
    {
      title: "Facial Phase Detection", 
      description: "AI-powered application for detecting and analyzing facial phases using computer vision and machine learning algorithms. Implements advanced ML models for accurate detection.",
      techStack: ["Python", "OpenCV", "TensorFlow", "NumPy"],
      category: "AI/ML",
      year: "2024",
      githubUrl: "https://github.com/yourusername/facial-phase-detection",
      demoUrl: "https://facial-detection-demo.netlify.app"
    },
    {
      title: "Pose Estimation",
      description: "Real-time human pose detection system using advanced ML models for fitness and motion analysis applications. Provides accurate joint detection and tracking.",
      techStack: ["Python", "MediaPipe", "OpenCV", "TensorFlow"],
      category: "Computer Vision", 
      year: "2024",
      githubUrl: "https://github.com/yourusername/pose-estimation",
      demoUrl: "https://pose-estimation-demo.netlify.app"
    },
    {
      title: "Hand Length Detection",
      description: "Computer vision project that accurately measures hand dimensions using camera input and image processing techniques. Utilizes advanced algorithms for precise measurements.",
      techStack: ["Python", "OpenCV", "NumPy", "SciPy"],
      category: "Computer Vision",
      year: "2023",
      githubUrl: "https://github.com/yourusername/hand-length-detection",
      demoUrl: "https://hand-detection-demo.netlify.app"
    },
    {
      title: "Distance Estimation",
      description: "Smart distance measurement tool using computer vision to calculate real-world distances from camera input. Implements sophisticated depth estimation algorithms.",
      techStack: ["Python", "OpenCV", "Math", "Computer Vision"],
      category: "Computer Vision",
      year: "2023",
      githubUrl: "https://github.com/yourusername/distance-estimation",
      demoUrl: "https://distance-estimation-demo.netlify.app"
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-12 lg:py-16 relative overflow-hidden transition-all duration-300" style={{ backgroundColor: '#F5F5DC' }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(255, 145, 77, 0.1)' }}></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(75, 56, 50, 0.1)' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12 animate-fade-in">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              <span style={{ color: '#3E2723' }}>Featured </span>
              <span style={{ color: '#FF914D' }}>Projects</span>
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full mb-4" style={{ backgroundColor: '#FF914D' }}></div>
            <p className="max-w-2xl mx-auto leading-relaxed text-sm lg:text-base px-4" style={{ color: '#4B3832' }}>
              Showcasing innovative solutions built with cutting-edge technologies and modern development practices.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-8 lg:mb-12">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group backdrop-blur-sm hover:scale-[1.02] transition-all duration-500 hover:shadow-xl overflow-hidden animate-scale-in border-0"
                style={{ 
                  backgroundColor: '#4B3832',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className="relative p-4 lg:p-5" style={{ backgroundColor: '#FF914D' }}>
                    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}></div>
                    
                    <div className="relative z-10 flex justify-between items-start mb-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full shadow-sm" style={{ backgroundColor: '#F5F5DC', color: '#3E2723' }}>
                        {project.category}
                      </span>
                      <div className="flex items-center text-xs" style={{ color: '#F5F5DC' }}>
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-xl lg:text-2xl font-bold mb-1 leading-tight" style={{ color: '#F5F5DC' }}>
                        {project.title}
                      </h3>
                      <div className="flex items-center text-xs" style={{ color: '#F5F5DC' }}>
                        <User className="h-3 w-3 mr-1" />
                        <span>Solo Developer</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 lg:p-5">
                    <p className="leading-relaxed mb-4 text-sm lg:text-base line-clamp-3" style={{ color: '#F5F5DC' }}>
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className="text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: '#FF914D' }}>
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-2 py-1 text-xs font-medium rounded transition-all duration-300"
                            style={{ 
                              backgroundColor: '#F5F5DC', 
                              color: '#3E2723'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 transition-all duration-300 text-xs lg:text-sm hover:scale-105 border-0"
                        style={{ 
                          backgroundColor: '#F5F5DC', 
                          color: '#3E2723'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#FF914D';
                          e.target.style.color = '#F5F5DC';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#F5F5DC';
                          e.target.style.color = '#3E2723';
                        }}
                        onClick={() => handleLinkClick(project.githubUrl)}
                      >
                        <Github className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                        Code
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 transition-all duration-300 text-xs lg:text-sm hover:scale-105 border-0"
                        style={{ 
                          backgroundColor: '#FF914D', 
                          color: '#F5F5DC'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#F5F5DC';
                          e.target.style.color = '#3E2723';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#FF914D';
                          e.target.style.color = '#F5F5DC';
                        }}
                        onClick={() => handleLinkClick(project.demoUrl)}
                      >
                        <ExternalLink className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center animate-fade-in">
            <div className="inline-block p-4 lg:p-6 rounded-xl backdrop-blur-sm mx-4" style={{ backgroundColor: '#4B3832' }}>
              <h3 className="text-lg lg:text-xl font-bold mb-2" style={{ color: '#F5F5DC' }}>Interested in My Work?</h3>
              <p className="mb-4 max-w-md mx-auto text-sm lg:text-base" style={{ color: '#F5F5DC' }}>
                Explore more projects on GitHub or get in touch to discuss potential collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  className="px-4 lg:px-6 py-2 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base hover:scale-105"
                  style={{ 
                    backgroundColor: '#F5F5DC', 
                    color: '#3E2723'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#FF914D';
                    e.target.style.color = '#F5F5DC';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#F5F5DC';
                    e.target.style.color = '#3E2723';
                  }}
                  onClick={() => handleLinkClick("https://github.com/yourusername")} // Replace with your GitHub profile
                >
                  <Github className="mr-2 h-4 w-4" />
                  View All Projects
                </Button>
                <Button 
                  variant="outline" 
                  className="px-4 lg:px-6 py-2 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base hover:scale-105 border-0"
                  style={{ 
                    backgroundColor: '#FF914D', 
                    color: '#F5F5DC'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#F5F5DC';
                    e.target.style.color = '#3E2723';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#FF914D';
                    e.target.style.color = '#F5F5DC';
                  }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
