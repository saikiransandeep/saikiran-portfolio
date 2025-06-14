
import React from 'react';
import { GraduationCap, MapPin, Calendar, TrendingUp } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-lg shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600/20 p-4 rounded-full mr-6">
                <GraduationCap className="h-12 w-12 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Bachelor of Technology
                </h3>
                <p className="text-xl text-blue-400 font-semibold">
                  Computer Science Engineering
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-green-400" />
                  <span className="font-medium">Avanthi Institute of Engineering and Technology</span>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Calendar className="h-5 w-5 mr-3 text-yellow-400" />
                  <span>2022 – 2026</span>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <TrendingUp className="h-5 w-5 mr-3 text-purple-400" />
                  <span className="font-semibold">CGPA: 75%</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Final Year Student
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Strong Academic Performance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Focus on Practical Applications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Multiple Certifications
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
