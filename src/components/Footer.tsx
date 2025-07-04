
import React from 'react';
import { ArrowUp, Linkedin, Github, Code, Users } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      url: 'https://linkedin.com/in/sai-kiran-383474327',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      url: 'https://github.com/saikiransandeep',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LeetCode',
      icon: <Code className="h-5 w-5" />,
      url: 'https://leetcode.com/u/saikiransandeep',
      color: 'hover:text-yellow-500'
    },
    {
      name: 'GeeksforGeeks',
      icon: <Users className="h-5 w-5" />,
      url: 'https://geeksforgeeks.org/user/saikirans8k6c',
      color: 'hover:text-green-500'
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-900 border-t border-gray-800 transition-all duration-300">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2025 <span className="text-white font-semibold">Sai Kiran</span>. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialClick(link.url)}
                  className={`text-gray-400 ${link.color} transition-all duration-300 hover:scale-110`}
                  title={`Visit my ${link.name} profile`}
                >
                  {link.icon}
                </button>
              ))}
            </div>
            
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
              title="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
