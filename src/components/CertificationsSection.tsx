
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
    <section id="certifications" className="py-20" style={{ backgroundColor: '#4B3832' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#F5F5DC' }}>Certifications & Achievements</h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#D2691E' }}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="p-6 rounded-lg hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#F5F5DC' }}>
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#D2691E' }}>
                  <Award className="h-6 w-6" style={{ color: '#F5F5DC' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#3E2723' }}>{cert.title}</h3>
                  <p className="font-medium mb-1" style={{ color: '#D2691E' }}>{cert.issuedBy}</p>
                  <div className="flex items-center text-sm mb-3" style={{ color: '#4B3832' }}>
                    <Calendar className="h-4 w-4 mr-1" />
                    {cert.date}
                  </div>
                </div>
              </div>
              
              <p className="text-sm mb-4 leading-relaxed" style={{ color: '#4B3832' }}>{cert.description}</p>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleDownload(cert.certificateFile, cert.title)}
                className="transition-all duration-300 group border-0"
                style={{ 
                  backgroundColor: '#D2691E', 
                  color: '#F5F5DC'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#4B3832';
                  (e.target as HTMLElement).style.color = '#F5F5DC';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#D2691E';
                  (e.target as HTMLElement).style.color = '#F5F5DC';
                }}
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
