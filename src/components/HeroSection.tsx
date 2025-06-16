
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
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-white">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left space-y-6 animate-fade-in">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Sai <span className="text-gray-700">Kiran</span>
                </h1>
                
                <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Computer Science Student | Programming Enthusiast | AI Explorer
                </h2>
                
                <div className="text-gray-500 space-y-4 max-w-2xl mx-auto lg:mx-0">
                  {/* Full content for desktop */}
                  <div className="hidden md:block">
                    <p className="text-base lg:text-lg leading-relaxed">
                      Passionate about crafting innovative solutions through code. Currently mastering 
                      <span className="text-gray-700 font-medium"> React, Node.js, and Firebase</span> while exploring the 
                      fascinating world of <span className="text-gray-700 font-medium">artificial intelligence</span>.
                    </p>
                    
                    <p className="text-sm lg:text-base leading-relaxed">
                      From algorithms to AI tools, I'm constantly learning and building projects that 
                      bridge traditional programming with cutting-edge technology.
                    </p>
                    
                    <p className="text-sm text-gray-400 italic">
                      "Transforming ideas into reality through the power of programming"
                    </p>
                  </div>
                  
                  {/* Reduced content for mobile */}
                  <div className="md:hidden">
                    <p className="text-base leading-relaxed">
                      Passionate about creating innovative solutions with 
                      <span className="text-gray-700 font-medium"> React, Node.js</span> and exploring 
                      <span className="text-gray-700 font-medium"> AI</span>.
                    </p>
                    
                    <p className="text-sm text-gray-400 italic">
                      "Building the future through code"
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-all duration-300"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View My Work
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg transition-all duration-300"
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
          <ChevronDown className="text-gray-400 h-8 w-8" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
