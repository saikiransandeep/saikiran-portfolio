
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
      color: '#FF914D'
    },
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      url: 'https://github.com/saikiransandeep',
      color: '#FF914D'
    },
    {
      name: 'LeetCode',
      icon: <Code className="h-5 w-5" />,
      url: 'https://leetcode.com/u/saikiransandeep',
      color: '#FF914D'
    },
    {
      name: 'GeeksforGeeks',
      icon: <Users className="h-5 w-5" />,
      url: 'https://geeksforgeeks.org/user/saikirans8k6c',
      color: '#FF914D'
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="transition-all duration-300" style={{ backgroundColor: '#F5F5DC', borderTopColor: '#4B3832', borderTopWidth: '1px' }}>
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p style={{ color: '#4B3832' }}>
              © 2025 <span className="font-semibold" style={{ color: '#3E2723' }}>Sai Kiran</span>. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialClick(link.url)}
                  className="transition-all duration-300 hover:scale-110"
                  style={{ color: '#4B3832' }}
                  onMouseEnter={(e) => e.target.style.color = link.color}
                  onMouseLeave={(e) => e.target.style.color = '#4B3832'}
                  title={`Visit my ${link.name} profile`}
                >
                  {link.icon}
                </button>
              ))}
            </div>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full transition-all duration-300 hover:scale-110 text-white"
              style={{ backgroundColor: '#FF914D' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#4B3832'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#FF914D'}
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
