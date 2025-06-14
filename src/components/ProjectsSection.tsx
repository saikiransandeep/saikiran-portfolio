
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
      status: "Completed",
      year: "2024"
    },
    {
      title: "Facial Phase Estimation",
      description: "AI-powered application for detecting and analyzing facial phases using computer vision and machine learning algorithms. Implements advanced ML models for accurate detection.",
      techStack: ["Python", "OpenCV", "TensorFlow", "NumPy"],
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      category: "AI/ML",
      status: "Completed",
      year: "2024"
    },
    {
      title: "Pose Estimation",
      description: "Real-time human pose detection system using advanced ML models for fitness and motion analysis applications. Provides accurate joint detection and tracking.",
      techStack: ["Python", "MediaPipe", "OpenCV", "TensorFlow"],
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      category: "Computer Vision",
      status: "Completed",
      year: "2024"
    },
    {
      title: "Hand Length Detection",
      description: "Computer vision project that accurately measures hand dimensions using camera input and image processing techniques. Utilizes advanced algorithms for precise measurements.",
      techStack: ["Python", "OpenCV", "NumPy", "SciPy"],
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      category: "Computer Vision",
      status: "Completed",
      year: "2023"
    },
    {
      title: "Distance Estimation",
      description: "Smart distance measurement tool using computer vision to calculate real-world distances from camera input. Implements sophisticated depth estimation algorithms.",
      techStack: ["Python", "OpenCV", "Math", "Computer Vision"],
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      category: "Computer Vision",
      status: "Completed",
      year: "2023"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Featured </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Projects
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          </div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions built with cutting-edge technologies and modern development practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Project Header with Gradient */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500/20 backdrop-blur-sm text-green-300 text-sm font-medium rounded-full border border-green-500/30">
                      {project.status}
                    </span>
                  </div>

                  {/* Project Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 transition-all duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{project.year}</span>
                      <User className="h-4 w-4 ml-4 mr-2" />
                      <span>Solo Developer</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <p className="text-gray-300 leading-relaxed mb-6 text-base">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-blue-300 text-sm font-medium rounded-lg border border-gray-600/50 hover:border-blue-400/50 hover:shadow-md hover:shadow-blue-400/20 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-blue-400/50 text-blue-400 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300 group/btn"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      View Code
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white hover:border-purple-400 transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in My Work?</h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Explore more projects on GitHub or get in touch to discuss potential collaborations.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                <Github className="mr-2 h-5 w-5" />
                View All Projects
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
