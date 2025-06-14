
import React from 'react';
import { Code2, Database, Globe, Server, Wrench, Brain, Terminal, Smartphone } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "C", level: 80 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 82 },
        { name: "C++", level: 75 }
      ],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Frontend Technologies",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "React", level: 85 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Bootstrap", level: 85 },
        { name: "SASS/SCSS", level: 80 }
      ],
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Backend & APIs",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 78 },
        { name: "REST APIs", level: 83 },
        { name: "Spring Boot", level: 75 },
        { name: "GraphQL", level: 70 },
        { name: "JWT", level: 80 }
      ],
      color: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-500/10 to-violet-500/10"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MySQL", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "Redis", level: 70 },
        { name: "SQLite", level: 80 }
      ],
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "VS Code", level: 95 },
        { name: "Docker", level: 72 },
        { name: "AWS", level: 68 },
        { name: "Vercel", level: 85 },
        { name: "Postman", level: 90 }
      ],
      color: "from-yellow-500 to-amber-500",
      bgGradient: "from-yellow-500/10 to-amber-500/10"
    },
    {
      title: "Core CS Concepts",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 80 },
        { name: "DBMS", level: 80 },
        { name: "OOP", level: 88 },
        { name: "System Design", level: 75 },
        { name: "Computer Networks", level: 78 }
      ],
      color: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-500/10 to-rose-500/10"
    },
    {
      title: "Development Tools",
      icon: <Terminal className="h-6 w-6" />,
      skills: [
        { name: "Linux", level: 78 },
        { name: "Bash/Shell", level: 75 },
        { name: "NPM/Yarn", level: 85 },
        { name: "Webpack", level: 70 },
        { name: "Vite", level: 80 },
        { name: "ESLint", level: 75 }
      ],
      color: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-500/10 to-blue-500/10"
    },
    {
      title: "Mobile & Other",
      icon: <Smartphone className="h-6 w-6" />,
      skills: [
        { name: "React Native", level: 70 },
        { name: "Android Studio", level: 65 },
        { name: "Flutter", level: 60 },
        { name: "PWA", level: 75 },
        { name: "Responsive Design", level: 90 },
        { name: "UI/UX Principles", level: 80 }
      ],
      color: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-500/10 to-cyan-500/10"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg mb-6">Comprehensive technical expertise across the full development stack</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/50`}
              style={{
                animationDelay: `${categoryIndex * 100}ms`
              }}
            >
              {/* Category header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium text-sm group-hover/skill:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${category.color} text-white`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out shadow-lg`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 6 + skillIndex) * 100}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-blue-400 mb-2">40+</div>
            <div className="text-gray-400 text-sm">Total Skills</div>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-green-400 mb-2">8</div>
            <div className="text-gray-400 text-sm">Tech Categories</div>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
            <div className="text-gray-400 text-sm">Years Learning</div>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-yellow-400 mb-2">85%</div>
            <div className="text-gray-400 text-sm">Avg Proficiency</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
