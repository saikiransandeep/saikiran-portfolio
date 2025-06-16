
import React, { useState } from 'react';
import { Download, ExternalLink, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LoadingSpinner from '@/components/LoadingSpinner';

const HeroSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleResumeDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      // Create a dummy PDF download (you can replace this with your actual resume file)
      const link = document.createElement('a');
      link.href = '/resume.pdf'; // Make sure to add your resume.pdf to the public folder
      link.download = 'Sai_Kiran_Resume.pdf';
      link.click();
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <>
      {isDownloading && <LoadingSpinner />}
      <section id="home" className="min-h-screen flex items-center justify-center relative transition-all duration-300" style={{ backgroundColor: '#F5F5DC' }}>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(62, 39, 35, 0.1)' }}></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(210, 105, 30, 0.1)' }}></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000" style={{ backgroundColor: 'rgba(75, 56, 50, 0.1)' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left space-y-6 animate-fade-in">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#3E2723' }}>
                  Sai <span style={{ color: '#D2691E' }}>Kiran</span>
                </h1>
                
                <h2 className="text-lg sm:text-xl lg:text-2xl leading-relaxed" style={{ color: '#4B3832' }}>
                  Computer Science Student | Programming Enthusiast | AI Explorer
                </h2>
                
                <div className="space-y-4 max-w-2xl mx-auto lg:mx-0" style={{ color: '#4B3832' }}>
                  {/* Full content for desktop */}
                  <div className="hidden md:block">
                    <p className="text-base lg:text-lg leading-relaxed">
                      Passionate about crafting innovative solutions through code. Currently mastering 
                      <span className="font-medium" style={{ color: '#D2691E' }}> React, Node.js, and Firebase</span> while exploring the 
                      fascinating world of <span className="font-medium" style={{ color: '#D2691E' }}>artificial intelligence</span>.
                    </p>
                    
                    <p className="text-sm lg:text-base leading-relaxed">
                      From algorithms to AI tools, I'm constantly learning and building projects that 
                      bridge traditional programming with cutting-edge technology.
                    </p>
                    
                    <p className="text-sm italic" style={{ color: '#4B3832' }}>
                      "Transforming ideas into reality through the power of programming"
                    </p>
                  </div>
                  
                  {/* Reduced content for mobile */}
                  <div className="md:hidden">
                    <p className="text-base leading-relaxed">
                      Passionate about creating innovative solutions with 
                      <span className="font-medium" style={{ color: '#D2691E' }}> React, Node.js</span> and exploring 
                      <span className="font-medium" style={{ color: '#D2691E' }}> AI</span>.
                    </p>
                    
                    <p className="text-sm italic" style={{ color: '#4B3832' }}>
                      "Building the future through code"
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-white"
                    style={{ backgroundColor: '#D2691E' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#B8621E'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#D2691E'}
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View My Work
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full sm:w-auto px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: '#F5F5DC', 
                      borderColor: '#4B3832', 
                      color: '#4B3832'
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#4B3832';
                      (e.target as HTMLElement).style.color = '#F5F5DC';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#F5F5DC';
                      (e.target as HTMLElement).style.color = '#4B3832';
                    }}
                    onClick={handleResumeDownload}
                    disabled={isDownloading}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    {isDownloading ? 'Downloading...' : 'Download Resume'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8" style={{ color: '#4B3832' }} />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
