
import React from 'react';
import { Download, ExternalLink, ChevronDown, Sparkles, Code, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 overflow-hidden">
      {/* Enhanced background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
      
      {/* Animated background elements - more dynamic */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-1500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-40 w-2.5 h-2.5 bg-emerald-400/60 rounded-full animate-bounce delay-1100"></div>
        <div className="absolute bottom-48 right-24 w-1 h-1 bg-pink-400/60 rounded-full animate-bounce delay-1400"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Enhanced greeting with icon */}
          <div className="flex items-center justify-center mb-6 space-x-2">
            <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
            <span className="text-lg text-gray-300 font-medium tracking-wide">Hello, I'm</span>
            <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse delay-500" />
          </div>
          
          {/* Enhanced name with better gradient */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
            Sai <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">Kiran</span>
          </h1>
          
          {/* Enhanced subtitle with icons */}
          <div className="flex items-center justify-center mb-6 space-x-3">
            <Code className="h-6 w-6 text-blue-400" />
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              Full-Stack Developer
            </h2>
            <Rocket className="h-6 w-6 text-purple-400" />
          </div>
          
          {/* Enhanced description */}
          <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed">
            Computer Science Undergraduate
          </p>
          
          {/* Quote with better styling */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent h-px top-1/2"></div>
            <p className="text-lg md:text-xl text-gray-300 italic font-light max-w-2xl mx-auto bg-gray-900 px-8 relative">
              "Building the future of the web, one project at a time"
            </p>
          </div>
          
          {/* Enhanced buttons with better spacing and effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 font-semibold text-lg group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-400 text-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:border-gray-300 px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 font-semibold text-lg group backdrop-blur-sm"
            >
              <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>

          {/* Skills preview tags */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mb-8">
            {['React', 'TypeScript', 'Node.js', 'Python', 'Java', 'MongoDB'].map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-300 text-sm font-medium hover:bg-gray-700/50 hover:border-gray-600/50 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
        <span className="text-gray-400 text-sm font-medium">Scroll to explore</span>
        <div className="animate-bounce">
          <ChevronDown className="text-white/80 h-8 w-8" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
