
import React from 'react';
import { GraduationCap, MapPin, Calendar, TrendingUp } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20" style={{ backgroundColor: '#F5F5DC' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#3E2723' }}>Education</h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#D2691E' }}></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-lg shadow-2xl hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#4B3832' }}>
            <div className="flex items-center mb-6">
              <div className="p-4 rounded-full mr-6" style={{ backgroundColor: '#D2691E' }}>
                <GraduationCap className="h-12 w-12" style={{ color: '#F5F5DC' }} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#F5F5DC' }}>
                  Bachelor of Technology
                </h3>
                <p className="text-xl font-semibold" style={{ color: '#D2691E' }}>
                  Computer Science Engineering
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center" style={{ color: '#F5F5DC' }}>
                  <MapPin className="h-5 w-5 mr-3" style={{ color: '#D2691E' }} />
                  <span className="font-medium">Avanthi Institute of Engineering and Technology</span>
                </div>
                
                <div className="flex items-center" style={{ color: '#F5F5DC' }}>
                  <Calendar className="h-5 w-5 mr-3" style={{ color: '#D2691E' }} />
                  <span>2022 – 2026</span>
                </div>
                
                <div className="flex items-center" style={{ color: '#F5F5DC' }}>
                  <TrendingUp className="h-5 w-5 mr-3" style={{ color: '#D2691E' }} />
                  <span className="font-semibold">CGPA: 75%</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-3" style={{ color: '#F5F5DC' }}>Key Highlights</h4>
                <ul className="space-y-2" style={{ color: '#F5F5DC' }}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#D2691E' }}></span>
                    Final Year Student
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#D2691E' }}></span>
                    Strong Academic Performance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#D2691E' }}></span>
                    Focus on Practical Applications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#D2691E' }}></span>
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
