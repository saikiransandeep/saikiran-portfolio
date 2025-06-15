
import React from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6 lg:h-8 lg:w-8 text-blue-400" />,
      title: "Programming Passion",
      description: "Passionate about coding and full-stack development"
    },
    {
      icon: <Globe className="h-6 w-6 lg:h-8 lg:w-8 text-green-400" />,
      title: "Web Development",
      description: "Strong interest in modern web technologies"
    },
    {
      icon: <Database className="h-6 w-6 lg:h-8 lg:w-8 text-purple-400" />,
      title: "Practical Solutions",
      description: "Building real-world applications that matter"
    },
    {
      icon: <Zap className="h-6 w-6 lg:h-8 lg:w-8 text-yellow-400" />,
      title: "Solo Projects",
      description: "Enjoys working independently on tech challenges"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I'm a final-year B.Tech Computer Science student with an unwavering passion for 
              programming and full-stack development. My journey in technology is driven by 
              curiosity and the desire to create innovative solutions.
            </p>
            
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              With expertise in <span className="text-blue-400 font-semibold">Java, Python, and C</span>, 
              along with modern web technologies like <span className="text-gray-300 font-semibold">React, Node.js, and Firebase</span>, 
              I bring ideas to life through code.
            </p>
            
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I thrive on working solo on real-world tech projects, constantly pushing the 
              boundaries of what's possible in web development. Every line of code I write 
              is a step towards building the future of digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 order-1 lg:order-2">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gray-800/50 p-4 lg:p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                <div className="mb-3 lg:mb-4">{item.icon}</div>
                <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm lg:text-base text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
