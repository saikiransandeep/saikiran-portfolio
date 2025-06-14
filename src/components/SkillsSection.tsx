
import React from 'react';
import { Code2, Globe, Server, Database, Zap, Star } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { name: "Java", level: 90, category: "Programming", color: "from-red-500 to-red-600" },
    { name: "Python", level: 85, category: "Programming", color: "from-blue-500 to-blue-600" },
    { name: "C", level: 80, category: "Programming", color: "from-gray-500 to-gray-600" },
    { name: "JavaScript", level: 88, category: "Programming", color: "from-yellow-500 to-yellow-600" },
    { name: "TypeScript", level: 82, category: "Programming", color: "from-blue-400 to-blue-500" },
    { name: "React", level: 90, category: "Frontend", color: "from-cyan-500 to-cyan-600" },
    { name: "HTML5", level: 95, category: "Frontend", color: "from-orange-500 to-orange-600" },
    { name: "CSS3", level: 90, category: "Frontend", color: "from-blue-500 to-blue-600" },
    { name: "Tailwind CSS", level: 85, category: "Frontend", color: "from-teal-500 to-teal-600" },
    { name: "Node.js", level: 80, category: "Backend", color: "from-green-500 to-green-600" },
    { name: "Express.js", level: 78, category: "Backend", color: "from-gray-600 to-gray-700" },
    { name: "REST APIs", level: 85, category: "Backend", color: "from-purple-500 to-purple-600" },
    { name: "MySQL", level: 82, category: "Database", color: "from-blue-600 to-blue-700" },
    { name: "MongoDB", level: 80, category: "Database", color: "from-green-600 to-green-700" },
    { name: "Firebase", level: 78, category: "Database", color: "from-yellow-600 to-orange-600" }
  ];

  const categories = ["Programming", "Frontend", "Backend", "Database"];
  const categoryIcons = {
    Programming: <Code2 className="h-6 w-6" />,
    Frontend: <Globe className="h-6 w-6" />,
    Backend: <Server className="h-6 w-6" />,
    Database: <Database className="h-6 w-6" />
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg mb-6">My technical proficiency across different domains</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50">
              <span className="text-blue-400">{categoryIcons[category]}</span>
              <span className="text-gray-300 font-medium">{category}</span>
            </div>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:bg-gray-800/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              {/* Skill header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Category tag */}
              <div className="flex items-center gap-2">
                <span className="text-blue-400 opacity-70">{categoryIcons[skill.category]}</span>
                <span className="text-gray-500 text-sm font-medium">{skill.category}</span>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-gray-400 text-sm">Total Skills</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
            <div className="text-3xl font-bold text-green-400 mb-2">4</div>
            <div className="text-gray-400 text-sm">Categories</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
            <div className="text-gray-400 text-sm">Years Learning</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
            <div className="text-3xl font-bold text-orange-400 mb-2">84%</div>
            <div className="text-gray-400 text-sm">Avg Proficiency</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
