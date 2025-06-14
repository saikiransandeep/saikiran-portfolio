
import React from 'react';
import { Code2, Globe, Server, Database } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { name: "Java", level: 90, category: "Programming", color: "bg-red-500" },
    { name: "Python", level: 85, category: "Programming", color: "bg-blue-500" },
    { name: "C", level: 80, category: "Programming", color: "bg-gray-600" },
    { name: "JavaScript", level: 88, category: "Programming", color: "bg-yellow-500" },
    { name: "TypeScript", level: 82, category: "Programming", color: "bg-blue-400" },
    { name: "React", level: 90, category: "Frontend", color: "bg-cyan-500" },
    { name: "HTML5", level: 95, category: "Frontend", color: "bg-orange-500" },
    { name: "CSS3", level: 90, category: "Frontend", color: "bg-blue-500" },
    { name: "Tailwind CSS", level: 85, category: "Frontend", color: "bg-teal-500" },
    { name: "Node.js", level: 80, category: "Backend", color: "bg-green-500" },
    { name: "MongoDB", level: 80, category: "Database", color: "bg-green-600" }
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 text-lg mb-6">My proficiency in various technologies</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {categories.map((category, categoryIndex) => (
            category.skills.length > 0 && (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center mb-6">
                  <span className="text-blue-600 mr-3">{category.icon}</span>
                  <h3 className="text-2xl font-semibold text-gray-800">{category.name}</h3>
                </div>
                
                <div className="grid gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-medium text-gray-800">{skill.name}</span>
                        <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        {/* Skills summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-blue-600 mb-2">{skills.length}</div>
              <div className="text-gray-600 text-sm">Skills</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-green-600 mb-2">4</div>
              <div className="text-gray-600 text-sm">Categories</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-purple-600 mb-2">3+</div>
              <div className="text-gray-600 text-sm">Years</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-orange-600 mb-2">85%</div>
              <div className="text-gray-600 text-sm">Avg Level</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
