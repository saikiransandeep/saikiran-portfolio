
import React from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" style={{ color: '#FF914D' }} />,
      title: "Programming Passion",
      description: "Passionate about coding and full-stack development"
    },
    {
      icon: <Globe className="h-6 w-6" style={{ color: '#FF914D' }} />,
      title: "Web Development",
      description: "Strong interest in modern web technologies"
    },
    {
      icon: <Database className="h-6 w-6" style={{ color: '#FF914D' }} />,
      title: "Practical Solutions",
      description: "Building real-world applications that matter"
    },
    {
      icon: <Zap className="h-6 w-6" style={{ color: '#FF914D' }} />,
      title: "Solo Projects",
      description: "Enjoys working independently on tech challenges"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-20" style={{ backgroundColor: '#F5F5DC' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#3E2723' }}>About Me</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#FF914D' }}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <p className="text-base lg:text-lg leading-relaxed" style={{ color: '#4B3832' }}>
                I'm a final-year B.Tech Computer Science student with an unwavering passion for 
                programming and full-stack development. My journey in technology is driven by 
                curiosity and the desire to create innovative solutions.
              </p>
              
              <p className="text-base lg:text-lg leading-relaxed" style={{ color: '#4B3832' }}>
                With expertise in <span className="font-semibold" style={{ color: '#FF914D' }}>Java, Python, and C</span>, 
                along with modern web technologies like <span className="font-semibold" style={{ color: '#FF914D' }}>React, Node.js, and Firebase</span>, 
                I bring ideas to life through code.
              </p>
              
              <p className="text-base lg:text-lg leading-relaxed" style={{ color: '#4B3832' }}>
                I thrive on working solo on real-world tech projects, constantly pushing the 
                boundaries of what's possible in web development. Every line of code I write 
                is a step towards building the future of digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
              {highlights.map((item, index) => (
                <div key={index} className="p-4 lg:p-6 rounded-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#4B3832' }}>
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="text-sm lg:text-lg font-semibold mb-2" style={{ color: '#F5F5DC' }}>{item.title}</h3>
                  <p className="text-xs lg:text-sm leading-relaxed" style={{ color: '#F5F5DC' }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
