
import React from 'react';
import { GraduationCap, MapPin, Calendar, TrendingUp } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(var(--pastel-blue-foreground))] to-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-xl border border-border hover:scale-105 transition-all duration-300" style={{ boxShadow: 'var(--card-shadow)' }}>
            <div className="flex items-center mb-6">
              <div className="bg-[hsl(var(--pastel-blue))] p-4 rounded-full mr-6">
                <GraduationCap className="h-12 w-12 text-[hsl(var(--pastel-blue-foreground))]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Bachelor of Technology
                </h3>
                <p className="text-xl text-[hsl(var(--pastel-blue-foreground))] font-semibold">
                  Computer Science Engineering
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Avanthi Institute of Engineering and Technology</span>
                </div>
                
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-5 w-5 mr-3 text-[hsl(var(--pastel-blue-foreground))]" />
                  <span>2022 – 2026</span>
                </div>
                
                <div className="flex items-center text-muted-foreground">
                  <TrendingUp className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-semibold">CGPA: 75%</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground mb-3">Key Highlights</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[hsl(var(--pastel-blue-foreground))] rounded-full mr-3"></span>
                    Final Year Student
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Strong Academic Performance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full mr-3"></span>
                    Focus on Practical Applications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[hsl(var(--pastel-blue-foreground))] rounded-full mr-3"></span>
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
