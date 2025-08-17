
import React from 'react';
import { Code2, Globe, Server, Database } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["Java", "Python", "JavaScript"],
      bgColor: "bg-[hsl(var(--pastel-blue))]/20"
    },
    {
      title: "Frontend Technologies",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "HTML5", "CSS3"],
      bgColor: "bg-[hsl(var(--light-grey))]/30"
    },
    {
      title: "Backend & APIs",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Spring Boot"],
      bgColor: "bg-muted/50"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "PostgreSQL"],
      bgColor: "bg-[hsl(var(--pastel-blue))]/10"
    }
  ];

  return (
    <section id="skills" className="py-16 lg:py-20 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[hsl(var(--pastel-blue))] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[hsl(var(--light-grey))] rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Skills & <span className="text-[hsl(var(--pastel-blue-foreground))]">Technologies</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg mb-6">Technical expertise across the development stack</p>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(var(--pastel-blue-foreground))] to-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl bg-card border border-border backdrop-blur-sm hover:scale-105 transition-all duration-500"
                style={{ boxShadow: 'var(--soft-shadow)' }}
              >
                {/* Icon header */}
                <div className="flex flex-col items-center mb-6">
                  <div className={`p-3 rounded-xl ${category.bgColor} text-foreground mb-3 group-hover:scale-110 transition-transform duration-300`} style={{ boxShadow: 'var(--soft-shadow)' }}>
                    {category.icon}
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-center text-foreground group-hover:text-[hsl(var(--pastel-blue-foreground))] transition-all duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center justify-center p-2 rounded-lg bg-muted border border-border hover:border-[hsl(var(--pastel-blue-foreground))]/30 transition-all duration-300 hover:bg-[hsl(var(--pastel-blue))]/20"
                    >
                      <span className="text-muted-foreground font-medium text-sm hover:text-foreground transition-colors duration-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(var(--pastel-blue))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Bottom stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-xl bg-card border border-border backdrop-blur-sm" style={{ boxShadow: 'var(--soft-shadow)' }}>
              <div className="text-2xl lg:text-3xl font-bold text-[hsl(var(--pastel-blue-foreground))] mb-2">10</div>
              <div className="text-muted-foreground text-sm">Total Skills</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card border border-border backdrop-blur-sm" style={{ boxShadow: 'var(--soft-shadow)' }}>
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground text-sm">Tech Categories</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card border border-border backdrop-blur-sm" style={{ boxShadow: 'var(--soft-shadow)' }}>
              <div className="text-2xl lg:text-3xl font-bold text-[hsl(var(--pastel-blue-foreground))] mb-2">3+</div>
              <div className="text-muted-foreground text-sm">Years Learning</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card border border-border backdrop-blur-sm" style={{ boxShadow: 'var(--soft-shadow)' }}>
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground text-sm">Avg Proficiency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
