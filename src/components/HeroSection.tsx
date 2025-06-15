
import React from 'react';
import { Download, ExternalLink, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
              Sai <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Kiran</span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 lg:mb-6 leading-relaxed">
              Computer Science Student | Programming Enthusiast | AI Explorer
            </h2>
            
            <div className="text-gray-400 mb-6 lg:mb-8 space-y-3 lg:space-y-4 max-w-lg mx-auto lg:mx-0">
              <p className="text-base lg:text-lg leading-relaxed">
                Passionate about crafting innovative solutions through code. Currently mastering 
                <span className="text-blue-400 font-medium"> React, Node.js, and Firebase</span> while exploring the 
                fascinating world of <span className="text-purple-400 font-medium">artificial intelligence</span>.
              </p>
              
              <p className="text-sm lg:text-base leading-relaxed">
                From algorithms to AI tools, I'm constantly learning and building projects that 
                bridge traditional programming with cutting-edge technology. Every line of code 
                is a step toward creating meaningful digital experiences.
              </p>
              
              <p className="text-xs lg:text-sm text-gray-500 italic">
                "Transforming ideas into reality through the power of programming"
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-center justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="mr-2 h-4 lg:h-5 w-4 lg:w-5" />
                View My Work
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:text-blue-800 hover:border-blue-300 px-6 lg:px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-4 lg:h-5 w-4 lg:w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Column - Photo Space */}
          <div className="flex justify-center items-center order-first lg:order-last">
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/30 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center text-gray-400">
                <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-xl lg:text-2xl">📸</span>
                </div>
                <p className="text-sm">Your Photo Here</p>
                <p className="text-xs text-gray-500 mt-1">Professional Portrait</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/60 h-6 w-6 lg:h-8 lg:w-8" />
      </div>
    </section>
  );
};

export default HeroSection;
