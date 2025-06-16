
import React from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6 text-gray-700" />,
      title: "Programming Passion",
      description: "Passionate about coding and full-stack development"
    },
    {
      icon: <Globe className="h-6 w-6 text-gray-700" />,
      title: "Web Development",
      description: "Strong interest in modern web technologies"
    },
    {
      icon: <Database className="h-6 w-6 text-gray-700" />,
      title: "Practical Solutions",
      description: "Building real-world applications that matter"
    },
    {
      icon: <Zap className="h-6 w-6 text-gray-700" />,
      title: "Solo Projects",
      description: "Enjoys working independently on tech challenges"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                I'm a final-year B.Tech Computer Science student with an unwavering passion for 
                programming and full-stack development. My journey in technology is driven by 
                curiosity and the desire to create innovative solutions.
              </p>
              
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                With expertise in <span className="text-gray-900 font-semibold">Java, Python, and C</span>, 
                along with modern web technologies like <span className="text-gray-900 font-semibold">React, Node.js, and Firebase</span>, 
                I bring ideas to life through code.
              </p>
              
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                I thrive on working solo on real-world tech projects, constantly pushing the 
                boundaries of what's possible in web development. Every line of code I write 
                is a step towards building the future of digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
              {highlights.map((item, index) => (
                <div key={index} className="bg-white p-4 lg:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="text-sm lg:text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">{item.description}</p>
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
