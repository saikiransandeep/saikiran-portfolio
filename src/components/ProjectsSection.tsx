
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
      gradient: "from-red-500 via-pink-500 to-rose-500",
      category: "Full Stack",
      year: "2024",
      githubUrl: "https://github.com/yourusername/viddystream", // Replace with your actual GitHub URLs
      demoUrl: "https://viddystream-demo.netlify.app" // Replace with your actual demo URLs
    },
    {
      title: "Facial Phase Detection", 
      description: "AI-powered application for detecting and analyzing facial phases using computer vision and machine learning algorithms. Implements advanced ML models for accurate detection.",
      techStack: ["Python", "OpenCV", "TensorFlow", "NumPy"],
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      category: "AI/ML",
      year: "2024",
      githubUrl: "https://github.com/yourusername/facial-phase-detection",
      demoUrl: "https://facial-detection-demo.netlify.app"
    },
    {
      title: "Pose Estimation",
      description: "Real-time human pose detection system using advanced ML models for fitness and motion analysis applications. Provides accurate joint detection and tracking.",
      techStack: ["Python", "MediaPipe", "OpenCV", "TensorFlow"],
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      category: "Computer Vision", 
      year: "2024",
      githubUrl: "https://github.com/yourusername/pose-estimation",
      demoUrl: "https://pose-estimation-demo.netlify.app"
    },
    {
      title: "Hand Length Detection",
      description: "Computer vision project that accurately measures hand dimensions using camera input and image processing techniques. Utilizes advanced algorithms for precise measurements.",
      techStack: ["Python", "OpenCV", "NumPy", "SciPy"],
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      category: "Computer Vision",
      year: "2023",
      githubUrl: "https://github.com/yourusername/hand-length-detection",
      demoUrl: "https://hand-detection-demo.netlify.app"
    },
    {
      title: "Distance Estimation",
      description: "Smart distance measurement tool using computer vision to calculate real-world distances from camera input. Implements sophisticated depth estimation algorithms.",
      techStack: ["Python", "OpenCV", "Math", "Computer Vision"],
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
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
    <section id="projects" className="py-12 lg:py-16 bg-background relative overflow-hidden transition-all duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(var(--pastel-blue))] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(var(--medium-grey))] rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12 animate-fade-in">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              <span className="text-foreground">Featured </span>
              <span className="text-[hsl(var(--pastel-blue-foreground))]">
                Projects
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--pastel-blue-foreground))] to-primary mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm lg:text-base px-4">
              Showcasing innovative solutions built with cutting-edge technologies and modern development practices.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-8 lg:mb-12">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group bg-card border border-border backdrop-blur-sm hover:scale-[1.02] transition-all duration-500 overflow-hidden animate-scale-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  boxShadow: 'var(--soft-shadow)'
                }}
              >
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className="relative bg-gradient-to-br from-[hsl(var(--pastel-blue))]/30 to-[hsl(var(--medium-grey))]/20 p-4 lg:p-5 border-b border-border">
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-3 py-1 bg-background text-foreground text-xs font-semibold rounded-full border border-border" style={{ boxShadow: 'var(--soft-shadow)' }}>
                        {project.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1 leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <User className="h-3 w-3 mr-1" />
                        <span>Solo Developer</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 lg:p-5">
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-2 py-1 bg-muted text-[hsl(var(--pastel-blue-foreground))] text-xs font-medium rounded border border-border hover:border-[hsl(var(--pastel-blue-foreground))]/50 transition-all duration-300"
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
                        className="flex-1 bg-background border-border text-foreground hover:bg-muted transition-all duration-300 text-xs lg:text-sm hover:scale-105"
                        onClick={() => handleLinkClick(project.githubUrl)}
                      >
                        <Github className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                        Code
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 bg-[hsl(var(--pastel-blue))]/20 border-[hsl(var(--pastel-blue-foreground))]/30 text-[hsl(var(--pastel-blue-foreground))] hover:bg-[hsl(var(--pastel-blue))]/30 transition-all duration-300 text-xs lg:text-sm hover:scale-105"
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
            <div className="inline-block p-4 lg:p-6 bg-card rounded-xl border border-border backdrop-blur-sm mx-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2">Interested in My Work?</h3>
              <p className="text-muted-foreground mb-4 max-w-md mx-auto text-sm lg:text-base">
                Explore more projects on GitHub or get in touch to discuss potential collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 lg:px-6 py-2 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base hover:scale-105"
                  onClick={() => handleLinkClick("https://github.com/yourusername")} // Replace with your GitHub profile
                >
                  <Github className="mr-2 h-4 w-4" />
                  View All Projects
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-[hsl(var(--pastel-blue))]/20 border-[hsl(var(--pastel-blue-foreground))]/30 text-[hsl(var(--pastel-blue-foreground))] hover:bg-[hsl(var(--pastel-blue))]/30 px-4 lg:px-6 py-2 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base hover:scale-105"
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
