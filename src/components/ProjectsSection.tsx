
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "ViddyStream",
      description: "A comprehensive video streaming platform with user authentication, video upload, and real-time streaming capabilities.",
      techStack: ["React", "Node.js", "Firebase", "MongoDB"],
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Facial Phase Estimation",
      description: "AI-powered application for detecting and analyzing facial phases using computer vision and machine learning algorithms.",
      techStack: ["Python", "OpenCV", "TensorFlow", "NumPy"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Pose Estimation",
      description: "Real-time human pose detection system using advanced ML models for fitness and motion analysis applications.",
      techStack: ["Python", "MediaPipe", "OpenCV", "TensorFlow"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Hand Length Detection",
      description: "Computer vision project that accurately measures hand dimensions using camera input and image processing techniques.",
      techStack: ["Python", "OpenCV", "NumPy", "SciPy"],
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: "Distance Estimation",
      description: "Smart distance measurement tool using computer vision to calculate real-world distances from camera input.",
      techStack: ["Python", "OpenCV", "Math", "Computer Vision"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">TECH STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-700 text-blue-400 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-sm text-gray-400 mb-4">
                  <strong>Role:</strong> Solo Developer
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
