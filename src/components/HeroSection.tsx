
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sai <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Kiran</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              Computer Science Student | Programming Enthusiast | AI Explorer
            </h2>
            
            <div className="text-gray-400 mb-8 space-y-4 max-w-lg">
              <p className="text-lg leading-relaxed">
                Passionate about crafting innovative solutions through code. Currently mastering 
                <span className="text-blue-400 font-medium"> full-stack development</span> while exploring the 
                fascinating world of <span className="text-purple-400 font-medium">artificial intelligence</span>.
              </p>
              
              <p className="text-base leading-relaxed">
                From algorithms to AI tools, I'm constantly learning and building projects that 
                bridge traditional programming with cutting-edge technology. Every line of code 
                is a step toward creating meaningful digital experiences.
              </p>
              
              <p className="text-sm text-gray-500 italic">
                "Transforming ideas into reality through the power of programming"
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Column - Photo Space */}
          <div className="lg:flex justify-center items-center hidden">
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/30 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center text-gray-400">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-2xl">📸</span>
                </div>
                <p className="text-sm">Your Photo Here</p>
                <p className="text-xs text-gray-500 mt-1">Professional Portrait</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/60 h-8 w-8" />
      </div>
    </section>
  );
};

export default HeroSection;
