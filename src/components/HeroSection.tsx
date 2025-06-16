
import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const HeroSection = () => {
  const { theme } = useTheme();

  const handleDownloadCV = () => {
    // Replace with your actual CV download link
    window.open('/path-to-your-cv.pdf', '_blank');
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: 'https://github.com/saikiransandeep', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com/in/sai-kiran-383474327', label: 'LinkedIn' },
    { icon: <Mail className="h-5 w-5" />, url: 'mailto:saikiransandeep1@gmail.com', label: 'Email' }
  ];

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center px-6 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
        : 'bg-white'
    }`}>
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className={`w-32 h-32 mx-auto rounded-full overflow-hidden border-4 ${
              theme === 'dark' ? 'border-white/20' : 'border-gray-200'
            }`}>
              <img
                src="/placeholder.svg"
                alt="Sai Kiran"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className={`text-5xl md:text-7xl font-bold leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Hi, I'm{' '}
              <span className={
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
                  : 'text-gray-900'
              }>
                Sai Kiran
              </span>
            </h1>

            <p className={`text-xl md:text-2xl font-light max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Computer Science Student & Aspiring Full Stack Developer
            </p>

            <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Passionate about creating innovative web solutions and learning cutting-edge technologies. 
              Currently pursuing my Bachelor's in Computer Science with a focus on full-stack development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                onClick={handleDownloadCV}
                className={
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105'
                    : 'bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg font-medium transition-all duration-300'
                }
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              
              <Button
                variant="outline"
                onClick={scrollToAbout}
                className={
                  theme === 'dark'
                    ? 'border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg font-medium transition-all duration-300'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-medium transition-all duration-300'
                }
              >
                Learn More
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    theme === 'dark'
                      ? 'bg-white/10 text-white hover:bg-white/20'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className={`animate-bounce p-2 rounded-full transition-all duration-300 ${
              theme === 'dark'
                ? 'text-white/60 hover:text-white'
                : 'text-gray-400 hover:text-gray-600'
            }`}
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
