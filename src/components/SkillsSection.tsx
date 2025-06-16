
import React from 'react';
import { Code2, Globe, Server, Database } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["Java", "Python", "JavaScript"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Frontend Technologies",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "HTML5", "CSS3"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      title: "Backend & APIs",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Spring Boot"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "PostgreSQL"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30"
    }
  ];

  return (
    <section id="skills" className="py-16 lg:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technologies</span>
            </h2>
            <p className="text-gray-400 text-base lg:text-lg mb-6">Technical expertise across the development stack</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`group relative p-6 rounded-2xl ${category.bgColor} ${category.borderColor} border backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10`}
              >
                {/* Icon header */}
                <div className="flex flex-col items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-center text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center justify-center p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/70"
                    >
                      <span className="text-gray-300 font-medium text-sm hover:text-white transition-colors duration-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Bottom stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm">
              <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-2">10</div>
              <div className="text-gray-400 text-sm">Total Skills</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm">
              <div className="text-2xl lg:text-3xl font-bold text-green-400 mb-2">4</div>
              <div className="text-gray-400 text-sm">Tech Categories</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm">
              <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-2">3+</div>
              <div className="text-gray-400 text-sm">Years Learning</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm">
              <div className="text-2xl lg:text-3xl font-bold text-orange-400 mb-2">85%</div>
              <div className="text-gray-400 text-sm">Avg Proficiency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
