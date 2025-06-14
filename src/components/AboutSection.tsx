
import React from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-blue-400" />,
      title: "Programming Passion",
      description: "Passionate about coding and full-stack development"
    },
    {
      icon: <Globe className="h-8 w-8 text-green-400" />,
      title: "Web Development",
      description: "Strong interest in modern web technologies"
    },
    {
      icon: <Database className="h-8 w-8 text-purple-400" />,
      title: "Practical Solutions",
      description: "Building real-world applications that matter"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "Solo Projects",
      description: "Enjoys working independently on tech challenges"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a final-year B.Tech Computer Science student with an unwavering passion for 
              programming and full-stack development. My journey in technology is driven by 
              curiosity and the desire to create innovative solutions.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise in <span className="text-blue-400 font-semibold">Java, Python, and C</span>, 
              along with modern web technologies like <span className="text-green-400 font-semibold">React, Node.js, and Firebase</span>, 
              I bring ideas to life through code.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I thrive on working solo on real-world tech projects, constantly pushing the 
              boundaries of what's possible in web development. Every line of code I write 
              is a step towards building the future of digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
