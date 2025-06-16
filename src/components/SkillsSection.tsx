
import React from 'react';
import { Code2, Globe, Server, Database } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["Java", "Python", "JavaScript"],
      iconBg: '#FF914D'
    },
    {
      title: "Frontend Technologies",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "HTML5", "CSS3"],
      iconBg: '#FF914D'
    },
    {
      title: "Backend & APIs",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Spring Boot"],
      iconBg: '#FF914D'
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "PostgreSQL"],
      iconBg: '#FF914D'
    }
  ];

  return (
    <section id="skills" className="py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: '#F5F5DC' }}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(255, 145, 77, 0.1)' }}></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(75, 56, 50, 0.1)' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span style={{ color: '#3E2723' }}>Skills & </span>
              <span style={{ color: '#FF914D' }}>Technologies</span>
            </h2>
            <p className="text-base lg:text-lg mb-6" style={{ color: '#4B3832' }}>Technical expertise across the development stack</p>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#FF914D' }}></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl"
                style={{ backgroundColor: '#4B3832' }}
              >
                {/* Icon header */}
                <div className="flex flex-col items-center mb-6">
                  <div className="p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg text-white" style={{ backgroundColor: category.iconBg }}>
                    {category.icon}
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-center group-hover:text-orange-300 transition-all duration-300" style={{ color: '#F5F5DC' }}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center justify-center p-2 rounded-lg transition-all duration-300"
                      style={{ backgroundColor: '#F5F5DC' }}
                    >
                      <span className="font-medium text-sm transition-colors duration-200" style={{ color: '#3E2723' }}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: 'rgba(255, 145, 77, 0.05)' }}></div>
              </div>
            ))}
          </div>

          {/* Bottom stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-xl backdrop-blur-sm" style={{ backgroundColor: '#4B3832' }}>
              <div className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: '#FF914D' }}>10</div>
              <div className="text-sm" style={{ color: '#F5F5DC' }}>Total Skills</div>
            </div>
            <div className="text-center p-4 rounded-xl backdrop-blur-sm" style={{ backgroundColor: '#4B3832' }}>
              <div className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: '#FF914D' }}>4</div>
              <div className="text-sm" style={{ color: '#F5F5DC' }}>Tech Categories</div>
            </div>
            <div className="text-center p-4 rounded-xl backdrop-blur-sm" style={{ backgroundColor: '#4B3832' }}>
              <div className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: '#FF914D' }}>3+</div>
              <div className="text-sm" style={{ color: '#F5F5DC' }}>Years Learning</div>
            </div>
            <div className="text-center p-4 rounded-xl backdrop-blur-sm" style={{ backgroundColor: '#4B3832' }}>
              <div className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: '#FF914D' }}>85%</div>
              <div className="text-sm" style={{ color: '#F5F5DC' }}>Avg Proficiency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
