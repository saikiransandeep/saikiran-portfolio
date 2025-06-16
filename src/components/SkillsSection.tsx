
import React from 'react';
import { Code2, Globe, Server, Database } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["Java", "Python", "JavaScript"],
      color: "text-gray-700",
      bgColor: "bg-white",
      borderColor: "border-gray-200"
    },
    {
      title: "Frontend Technologies",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "HTML5", "CSS3"],
      color: "text-gray-700",
      bgColor: "bg-white",
      borderColor: "border-gray-200"
    },
    {
      title: "Backend & APIs",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Spring Boot"],
      color: "text-gray-700",
      bgColor: "bg-white",
      borderColor: "border-gray-200"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "PostgreSQL"],
      color: "text-gray-700",
      bgColor: "bg-white",
      borderColor: "border-gray-200"
    }
  ];

  return (
    <section id="skills" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Skills & <span className="text-gray-700">Technologies</span>
            </h2>
            <p className="text-gray-600 text-base lg:text-lg mb-6">Technical expertise across the development stack</p>
            <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`group relative p-6 rounded-2xl ${category.bgColor} ${category.borderColor} border hover:shadow-md transition-all duration-300`}
              >
                {/* Icon header */}
                <div className="flex flex-col items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gray-100 ${category.color} mb-3 group-hover:bg-gray-200 transition-all duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-center text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center justify-center p-2 rounded-lg bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-all duration-300"
                    >
                      <span className="text-gray-700 font-medium text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-200">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">10</div>
              <div className="text-gray-600 text-sm">Total Skills</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-200">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">4</div>
              <div className="text-gray-600 text-sm">Tech Categories</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-200">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">3+</div>
              <div className="text-gray-600 text-sm">Years Learning</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-200">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">85%</div>
              <div className="text-gray-600 text-sm">Avg Proficiency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
