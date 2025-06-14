
import React from 'react';
import { Code2, Globe, Server, Database } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { name: "Java", level: 90, category: "Programming" },
    { name: "Python", level: 85, category: "Programming" },
    { name: "C", level: 80, category: "Programming" },
    { name: "JavaScript", level: 88, category: "Programming" },
    { name: "TypeScript", level: 82, category: "Programming" },
    { name: "React", level: 90, category: "Frontend" },
    { name: "HTML5", level: 95, category: "Frontend" },
    { name: "CSS3", level: 90, category: "Frontend" },
    { name: "Tailwind CSS", level: 85, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "MySQL", level: 82, category: "Database" },
    { name: "MongoDB", level: 80, category: "Database" }
  ];

  const categories = [
    { name: "Programming", icon: <Code2 className="h-5 w-5" />, skills: skills.filter(s => s.category === "Programming") },
    { name: "Frontend", icon: <Globe className="h-5 w-5" />, skills: skills.filter(s => s.category === "Frontend") },
    { name: "Backend", icon: <Server className="h-5 w-5" />, skills: skills.filter(s => s.category === "Backend") },
    { name: "Database", icon: <Database className="h-5 w-5" />, skills: skills.filter(s => s.category === "Database") }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 text-lg mb-6">My expertise across different technologies</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <span className="text-blue-600">{category.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                      <span className="text-blue-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">{skills.length}</div>
            <div className="text-gray-600 text-sm">Total Skills</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">4</div>
            <div className="text-gray-600 text-sm">Categories</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
            <div className="text-gray-600 text-sm">Years Learning</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
            <div className="text-gray-600 text-sm">Avg Proficiency</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
