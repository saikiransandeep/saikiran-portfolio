
import React from 'react';
import { Scale } from 'lucide-react';

const SkillsSection = () => {
  const leftSkills = [
    { name: "JavaScript", level: 88, color: "text-yellow-400", position: { top: "20%", left: "10%" } },
    { name: "Python", level: 85, color: "text-blue-400", position: { top: "50%", left: "15%" } },
    { name: "Java", level: 90, color: "text-red-400", position: { top: "75%", left: "20%" } },
    { name: "HTML5", level: 95, color: "text-orange-400", position: { top: "35%", left: "5%" } }
  ];

  const rightSkills = [
    { name: "React", level: 90, color: "text-cyan-400", position: { top: "25%", right: "15%" } },
    { name: "Node.js", level: 80, color: "text-green-400", position: { top: "55%", right: "10%" } },
    { name: "CSS3", level: 90, color: "text-blue-500", position: { top: "70%", right: "20%" } },
    { name: "MongoDB", level: 80, color: "text-green-500", position: { top: "40%", right: "5%" } }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 h-96">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg mb-6">My core technical skills</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Skills container */}
        <div className="relative h-80 max-w-6xl mx-auto">
          {/* Left side skills */}
          {leftSkills.map((skill, index) => (
            <div 
              key={`left-${index}`}
              className={`absolute ${skill.color} font-bold text-lg md:text-xl hover:scale-110 transition-transform duration-300 cursor-default`}
              style={skill.position}
            >
              {skill.name}
            </div>
          ))}

          {/* Central Scale */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <Scale className="h-16 w-16 text-blue-400 mb-4" />
              <div className="text-white font-semibold text-xl mb-2">Skills Balance</div>
              <div className="text-gray-400 text-sm text-center max-w-xs">
                Frontend & Backend expertise balanced across technologies
              </div>
            </div>
          </div>

          {/* Right side skills */}
          {rightSkills.map((skill, index) => (
            <div 
              key={`right-${index}`}
              className={`absolute ${skill.color} font-bold text-lg md:text-xl hover:scale-110 transition-transform duration-300 cursor-default`}
              style={skill.position}
            >
              {skill.name}
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">8</div>
            <div className="text-gray-400 text-sm">Core Skills</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
            <div className="text-3xl font-bold text-green-400 mb-2">3+</div>
            <div className="text-gray-400 text-sm">Years Learning</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">87%</div>
            <div className="text-gray-400 text-sm">Avg Proficiency</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
            <div className="text-3xl font-bold text-orange-400 mb-2">Full Stack</div>
            <div className="text-gray-400 text-sm">Focus Area</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
