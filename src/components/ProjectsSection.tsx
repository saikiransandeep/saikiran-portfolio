
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
      year: "2024"
    },
    {
      title: "Facial Phase Estimation", 
      description: "AI-powered application for detecting and analyzing facial phases using computer vision and machine learning algorithms. Implements advanced ML models for accurate detection.",
      techStack: ["Python", "OpenCV", "TensorFlow", "NumPy"],
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      category: "AI/ML",
      year: "2024"
    },
    {
      title: "Pose Estimation",
      description: "Real-time human pose detection system using advanced ML models for fitness and motion analysis applications. Provides accurate joint detection and tracking.",
      techStack: ["Python", "MediaPipe", "OpenCV", "TensorFlow"],
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      category: "Computer Vision", 
      year: "2024"
    },
    {
      title: "Hand Length Detection",
      description: "Computer vision project that accurately measures hand dimensions using camera input and image processing techniques. Utilizes advanced algorithms for precise measurements.",
      techStack: ["Python", "OpenCV", "NumPy", "SciPy"],
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      category: "Computer Vision",
      year: "2023"
    },
    {
      title: "Distance Estimation",
      description: "Smart distance measurement tool using computer vision to calculate real-world distances from camera input. Implements sophisticated depth estimation algorithms.",
      techStack: ["Python", "OpenCV", "Math", "Computer Vision"],
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      category: "Computer Vision",
      year: "2023"
    }
  ];

  return (
    <section id="projects" className="py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-white">Featured </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Showcasing innovative solutions built with cutting-edge technologies and modern development practices.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/5 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Project Header with Gradient */}
                  <div className={`relative h-20 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Title */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 transition-all duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-white/80 text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{project.year}</span>
                        <User className="h-3 w-3 ml-3 mr-1" />
                        <span>Solo Developer</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4">
                    <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-2 py-1 bg-gradient-to-r from-gray-700 to-gray-600 text-blue-300 text-xs font-medium rounded border border-gray-600/50 hover:border-blue-400/50 hover:shadow-sm hover:shadow-blue-400/20 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 hover:text-slate-800 hover:border-slate-400 transition-all duration-300 group/btn"
                      >
                        <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Code
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:text-blue-800 hover:border-blue-300 transition-all duration-300 group/btn"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center">
            <div className="inline-block p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl border border-gray-600/30 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-3">Interested in My Work?</h3>
              <p className="text-gray-300 mb-5 max-w-md mx-auto">
                Explore more projects on GitHub or get in touch to discuss potential collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-gray-100 hover:bg-gray-200 text-gray-800 hover:text-gray-900 px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                  <Github className="mr-2 h-4 w-4" />
                  View All Projects
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:text-blue-800 hover:border-blue-300 px-6 py-2 rounded-lg font-medium transition-all duration-300"
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
