
import React from 'react';
import { Award, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Full Stack Java Internship",
      issuedBy: "Tech Corporation",
      date: "December 2024",
      description: "Comprehensive training in Java full-stack development covering Spring Boot, React, and database management.",
      certificateFile: "/certificates/java-internship-certificate.pdf"
    },
    {
      title: "HTML5 Course Certification",
      issuedBy: "Web Development Institute",
      date: "November 2024",
      description: "Advanced HTML5 features, semantic markup, and modern web standards implementation.",
      certificateFile: "/certificates/html5-certificate.pdf"
    },
    {
      title: "Avanthi Excellence Certificate",
      issuedBy: "Avanthi Institute of Engineering and Technology",
      date: "October 2024",
      description: "Recognition for outstanding academic performance and technical project contributions.",
      certificateFile: "/certificates/avanthi-excellence-certificate.pdf"
    },
    {
      title: "Avanthi Leadership Certificate",
      issuedBy: "Avanthi Institute of Engineering and Technology",
      date: "September 2024",
      description: "Award for demonstrating exceptional leadership skills in team projects and student activities.",
      certificateFile: "/certificates/avanthi-leadership-certificate.pdf"
    }
  ];

  const handleDownload = (certificateFile: string, title: string) => {
    const link = document.createElement('a');
    link.href = certificateFile;
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}-certificate.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105">
              <div className="flex items-start mb-4">
                <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-blue-400 font-medium mb-1">{cert.issuedBy}</p>
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {cert.date}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleDownload(cert.certificateFile, cert.title)}
                className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100 hover:text-green-800 hover:border-green-300 transition-all duration-300 group"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Certificate
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
