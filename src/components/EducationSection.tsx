
import React from 'react';
import { GraduationCap, MapPin, Calendar, TrendingUp } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-4 rounded-full mr-6">
                <GraduationCap className="h-12 w-12 text-gray-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bachelor of Technology
                </h3>
                <p className="text-xl text-gray-700 font-semibold">
                  Computer Science Engineering
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3 text-gray-700" />
                  <span className="font-medium">Avanthi Institute of Engineering and Technology</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-3 text-gray-700" />
                  <span>2022 – 2026</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <TrendingUp className="h-5 w-5 mr-3 text-gray-700" />
                  <span className="font-semibold">CGPA: 75%</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                    Final Year Student
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                    Strong Academic Performance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                    Focus on Practical Applications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
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
