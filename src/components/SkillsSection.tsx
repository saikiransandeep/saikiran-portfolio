
import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "C", level: 80 }
      ],
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express", level: 78 }
      ],
      color: "from-green-400 to-green-600"
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: 88 },
        { name: "VS Code", level: 95 },
        { name: "MySQL", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "Firebase", level: 85 }
      ],
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Core CS Skills",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "DBMS", level: 80 },
        { name: "REST APIs", level: 83 }
      ],
      color: "from-yellow-400 to-yellow-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-900/50 p-8 rounded-lg hover:bg-gray-900 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
