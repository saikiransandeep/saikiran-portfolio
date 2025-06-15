
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
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-all duration-300 pt-10 sm:pt-12 md:pt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-6 animate-fade-in">
                <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white leading-tight">
                  Sai <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Kiran</span>
                </h1>
                
                <h2 className="text-sm sm:text-base lg:text-2xl text-gray-300 leading-relaxed">
                  Computer Science Student | Programming Enthusiast
                </h2>
                
                <div className="text-gray-400 space-y-2 sm:space-y-3 max-w-2xl mx-auto lg:mx-0">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    Passionate about crafting innovative solutions through code. Currently mastering 
                    <span className="text-blue-400 font-medium"> React, Node.js, and Firebase</span>.
                  </p>
                  
                  {/* Hide this paragraph on mobile devices */}
                  <p className="hidden md:block text-sm lg:text-base leading-relaxed">
                    From algorithms to AI tools, I'm constantly learning and building projects that 
                    bridge traditional programming with cutting-edge technology.
                  </p>
                  
                  {/* Mobile-specific shorter description */}
                  <p className="block md:hidden text-xs leading-relaxed">
                    Building innovative projects with modern web technologies.
                  </p>
                  
                  <p className="text-xs md:text-sm text-gray-500 italic">
                    "Transforming ideas into reality through programming"
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 items-center justify-center lg:justify-start pt-3 sm:pt-4">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    View My Work
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full sm:w-auto bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:text-blue-800 hover:border-blue-300 px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base"
                    onClick={handleResumeDownload}
                    disabled={isDownloading}
                  >
                    <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    {isDownloading ? 'Downloading...' : 'Download Resume'}
                  </Button>
                </div>
              </div>

              {/* Right Column - Photo Space */}
              <div className="flex justify-center items-center order-first lg:order-last animate-scale-in">
                <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/30 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  <div className="text-center text-gray-400">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-sm sm:text-lg md:text-2xl">📸</span>
                    </div>
                    <p className="text-xs sm:text-xs md:text-sm">Your Photo Here</p>
                    <p className="text-xs text-gray-500 mt-1 hidden sm:block">Professional Portrait</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60 h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
