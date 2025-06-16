
import React from 'react';
import { ExternalLink, Github, Code, Globe, Database, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Task Manager",
      description: "A smart task management application with AI-driven priority suggestions and deadline optimization.",
      longDescription: "Built with React and Node.js, this application uses machine learning algorithms to analyze user behavior and suggest optimal task priorities. Features include real-time collaboration, smart notifications, and productivity analytics.",
      technologies: ["React", "Node.js", "MongoDB", "AI/ML"],
      liveUrl: "https://ai-taskmanager-demo.com",
      githubUrl: "https://github.com/saikiransandeep/ai-task-manager",
      image: "/placeholder.svg",
      category: "Web Application",
      status: "Featured",
      year: "2024"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and inventory management.",
      longDescription: "Comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, secure payment processing, and admin dashboard for inventory management. Built with modern web technologies for optimal performance.",
      technologies: ["React", "Express.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://ecommerce-platform-demo.com",
      githubUrl: "https://github.com/saikiransandeep/ecommerce-platform",
      image: "/placeholder.svg",
      category: "Full Stack",
      status: "Featured",
      year: "2024"
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "Real-time weather data visualization with predictive analytics and location-based forecasting.",
      longDescription: "Interactive dashboard that aggregates weather data from multiple APIs, provides detailed analytics, and offers predictive insights. Features include historical data comparison, weather alerts, and customizable visualization charts.",
      technologies: ["React", "Python", "FastAPI", "Chart.js"],
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/saikiransandeep/weather-dashboard",
      image: "/placeholder.svg",
      category: "Data Visualization",
      status: "Live",
      year: "2023"
    },
    {
      id: 4,
      title: "Social Media Analytics Tool",
      description: "Comprehensive social media monitoring and analytics platform with sentiment analysis.",
      longDescription: "Advanced analytics tool that tracks social media mentions, analyzes sentiment, and provides actionable insights. Includes automated reporting, trend analysis, and competitor comparison features.",
      technologies: ["Python", "Django", "React", "NLP"],
      liveUrl: "https://social-analytics-demo.com",
      githubUrl: "https://github.com/saikiransandeep/social-analytics",
      image: "/placeholder.svg",
      category: "Analytics",
      status: "Live",
      year: "2023"
    }
  ];

  const handleViewProject = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleViewGithub = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Application':
        return <Globe className="h-4 w-4" />;
      case 'Full Stack':
        return <Code className="h-4 w-4" />;
      case 'Data Visualization':
        return <Database className="h-4 w-4" />;
      case 'Analytics':
        return <Smartphone className="h-4 w-4" />;
      default:
        return <Code className="h-4 w-4" />;
    }
  };

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: '#F5F5DC' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#3E2723' }}>Featured Projects</h2>
          <p className="text-lg mb-6" style={{ color: '#4B3832' }}>
            Showcasing my passion for creating innovative digital solutions
          </p>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#D2691E' }}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105" style={{ backgroundColor: '#4B3832' }}>
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Featured' 
                      ? 'text-white' 
                      : 'text-white'
                  }`} style={{ backgroundColor: project.status === 'Featured' ? '#D2691E' : '#4B3832' }}>
                    {project.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{ backgroundColor: '#4B3832' }}>
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2" style={{ color: '#D2691E' }}>
                    {getCategoryIcon(project.category)}
                    <span className="text-sm font-medium">{project.category}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-200 transition-colors duration-300" style={{ color: '#F5F5DC' }}>
                  {project.title}
                </h3>
                
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#F5F5DC' }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: '#F5F5DC', color: '#3E2723' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    size="sm"
                    className="flex-1 transition-all duration-300 text-white"
                    style={{ backgroundColor: '#D2691E' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#B8621E'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#D2691E'}
                    onClick={() => handleViewProject(project.liveUrl)}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 transition-all duration-300"
                    style={{ 
                      backgroundColor: '#F5F5DC', 
                      borderColor: '#D2691E', 
                      color: '#3E2723'
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#D2691E';
                      (e.target as HTMLElement).style.color = '#F5F5DC';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#F5F5DC';
                      (e.target as HTMLElement).style.color = '#3E2723';
                    }}
                    onClick={() => handleViewGithub(project.githubUrl)}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="px-8 py-3 transition-all duration-300 hover:scale-105 text-white"
            style={{ backgroundColor: '#D2691E' }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#B8621E'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#D2691E'}
            onClick={() => handleViewGithub('https://github.com/saikiransandeep')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
